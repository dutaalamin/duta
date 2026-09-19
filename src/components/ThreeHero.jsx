import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { clone as cloneSkeleton } from 'three/examples/jsm/utils/SkeletonUtils.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// Asset imports
import avatarUrl from '../assets/models/avatar.glb?url';
import matcapBlackUrl from '../assets/textures/matcap-black.webp';
import matcapGrayUrl from '../assets/textures/matcap-gray.webp';
import matcapSkinUrl from '../assets/textures/matcap-skin.webp';
import matcapWhiteUrl from '../assets/textures/matcap-white.webp';
import headTextureUrl from '../assets/textures/head.webp';
import faceTextureUrl from '../assets/textures/face-spritesheet.png';
import iconSpritesheetUrl from '../assets/textures/icon-spritesheet.webp';

export default function ThreeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();

    const width = container.clientWidth || window.innerWidth || 800;
    const height = container.clientHeight || window.innerHeight || 600;

    // Camera — zoomed out enough to see full character
    const camera = new THREE.PerspectiveCamera(
      38, width / height, 0.01, 100
    );
    camera.position.set(0, 3.75, 9);
    camera.lookAt(0, 1.75, 0);

    // Renderer — black background matching rest of portfolio
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setClearColor(0x0a0a0a, 1);
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // ── Textures ──
    const textureLoader = new THREE.TextureLoader();
    const loadTex = (url) => {
      const tex = textureLoader.load(url);
      tex.colorSpace = THREE.SRGBColorSpace;
      return tex;
    };
    const matcaps = {
      black: loadTex(matcapBlackUrl),
      gray: loadTex(matcapGrayUrl),
      skin: loadTex(matcapSkinUrl),
      white: loadTex(matcapWhiteUrl),
    };

    // Head texture (pre-baked skin)
    const headTex = loadTex(headTextureUrl);
    headTex.flipY = false;

    // Face spritesheet (4x4 grid: eyes, eyebrows, mouth)
    const faceTex = textureLoader.load(faceTextureUrl);
    faceTex.colorSpace = THREE.SRGBColorSpace;
    faceTex.flipY = true;
    faceTex.generateMipmaps = false;
    faceTex.minFilter = THREE.LinearFilter;
    faceTex.magFilter = THREE.LinearFilter;
    // Show one tile at a time (1/4 of the spritesheet)
    faceTex.repeat.set(0.25, 0.25);

    // ── Sleeping "Z Z Z" Sprite (from duta3d) ──
    const iconTex = loadTex(iconSpritesheetUrl);
    iconTex.generateMipmaps = false;

    const planeGeometries = [];
    for (let i = 0; i < 3; i++) {
      const plane = new THREE.PlaneGeometry(1, 1);
      const indexValue = i / 3.0;
      const vertexCount = plane.getAttribute('position').count;
      const aIndexArray = new Float32Array(vertexCount).fill(indexValue);
      plane.setAttribute('aIndex', new THREE.BufferAttribute(aIndexArray, 1));
      planeGeometries.push(plane);
    }
    const sleepingGeo = mergeGeometries(planeGeometries, false);

    let sleepOpacityTarget = 1.0;
    const sleepingUniforms = {
      uTime: { value: 0 },
      uOpacity: { value: 1.0 },
      uTexture: { value: iconTex },
    };

    const sleepingMat = new THREE.ShaderMaterial({
      vertexShader: `
        attribute float aIndex;
        varying vec2 vUv;
        varying float vAlpha;
        uniform float uTime;

        #define TOTAL_COLS 4.
        #define TOTAL_ROWS 4.
        #define FRAME_X 1.
        #define FRAME_Y 0.
        #define SCALE 0.38
        #define PI 3.14159265

        vec2 rotate2D(vec2 pos, float angle) {
            float c = cos(angle);
            float s = sin(angle);
            return vec2(c * pos.x - s * pos.y, s * pos.x + c * pos.y);
        }

        void main() {
            mat4 spriteViewMatrix = modelViewMatrix;

            float progress = fract(uTime * 0.22 + aIndex);

            float scale = SCALE * (1.0 - progress * 0.35);

            spriteViewMatrix[0][0] = 1.0 * scale;
            spriteViewMatrix[0][1] = 0.0;
            spriteViewMatrix[0][2] = 0.0;

            spriteViewMatrix[1][0] = 0.0;
            spriteViewMatrix[1][1] = 1.0 * scale;
            spriteViewMatrix[1][2] = 0.0;

            vec3 transformed = position;

            vec2 pos = position.xy;
            pos = rotate2D(pos, progress * PI * 0.35);
            transformed.xy = pos;

            transformed.x += progress * 1.1;
            transformed.y += progress * 1.4;

            gl_Position = projectionMatrix * spriteViewMatrix * vec4(transformed, 1.0);

            vUv = uv;
            vUv.x = (uv.x + FRAME_X) / TOTAL_COLS;
            vUv.y = (uv.y + (TOTAL_ROWS - 1.0 - FRAME_Y)) / TOTAL_ROWS;

            float fadeIn = smoothstep(0.0, 0.25, progress);   
            float fadeOut = smoothstep(1.0, 0.7, progress);  
            vAlpha = fadeIn * fadeOut;
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        varying float vAlpha;
        uniform sampler2D uTexture;
        uniform float uOpacity;

        void main() {
            vec4 textureColor = texture2D(uTexture, vUv);
            float alpha = vAlpha * textureColor.a * uOpacity;
            gl_FragColor = vec4(textureColor.rgb, alpha);
        }
      `,
      depthTest: false,
      depthWrite: false,
      transparent: true,
      uniforms: sleepingUniforms,
    });

    const sleepingMesh = new THREE.Mesh(sleepingGeo, sleepingMat);
    sleepingMesh.renderOrder = 30;
    sleepingMesh.position.set(0.35, 1.25, 0.1);
    scene.add(sleepingMesh);

    // ── Face Spritesheet Animation ──
    let blinkTimeouts = [];

    const setFaceFrame = (frameIdx) => {
      const col = frameIdx % 4;
      const row = Math.floor(frameIdx / 4);
      faceTex.offset.set(col * 0.25, (3 - row) * 0.25);
    };

    // Initialize with sleeping eyes (frame 4)
    setFaceFrame(4);

    const doBlink = () => {
      // proud-0 (12) → proud-1 (13) → proud-2 (14) → proud-3 (15) → back to proud-0 (12)
      const sequence = [
        { frame: 13, delay: 0 },
        { frame: 14, delay: 40 },
        { frame: 15, delay: 70 },
        { frame: 14, delay: 130 },
        { frame: 13, delay: 180 },
        { frame: 12, delay: 240 },
      ];
      sequence.forEach(({ frame, delay }) => {
        const t = setTimeout(() => setFaceFrame(frame), delay);
        blinkTimeouts.push(t);
      });
    };

    let nextBlinkTimeout = null;
    const scheduleNextBlink = () => {
      const delay = 2800 + Math.random() * 3200; // 2.8–6s between blinks
      nextBlinkTimeout = setTimeout(() => {
        doBlink();
        scheduleNextBlink();
      }, delay);
      blinkTimeouts.push(nextBlinkTimeout);
    };

    // ── Sleep & Wake State Machine ──
    let isSleeping = true;

    const wakeUp = () => {
      if (!isSleeping) return;
      isSleeping = false;
      sleepOpacityTarget = 0.0;
      blinkTimeouts.forEach(clearTimeout);

      // Face wake-up animation sequence:
      // 8 (gasp / surprised) → 9 (eyes widening) → 10 (smile forming) → 12 (proud awake)
      setFaceFrame(8);
      const t1 = setTimeout(() => setFaceFrame(9), 200);
      const t2 = setTimeout(() => setFaceFrame(10), 380);
      const t3 = setTimeout(() => {
        setFaceFrame(12);
        scheduleNextBlink();
      }, 560);
      blinkTimeouts.push(t1, t2, t3);
    };

    const goToSleep = () => {
      if (isSleeping) return;
      isSleeping = true;
      sleepOpacityTarget = 1.0;
      if (sleepingMesh) sleepingMesh.visible = true;
      blinkTimeouts.forEach(clearTimeout);

      // Slowly close eyes into sleep (frame 2 → frame 4)
      setFaceFrame(2);
      const t = setTimeout(() => {
        setFaceFrame(4); // Sleeping eyes
      }, 250);
      blinkTimeouts.push(t);
    };

    // User activity triggers wake-up on first visit or when re-engaging
    const onUserActivity = () => {
      if (isSleeping && !document.hidden && window.scrollY <= 350) {
        wakeUp();
      }
    };
    window.addEventListener('mousemove', onUserActivity);
    window.addEventListener('click', onUserActivity);
    window.addEventListener('touchstart', onUserActivity);

    // Scroll listener: sleep when scrolled down past hero, wake up when scrolled back up
    const onScroll = () => {
      if (window.scrollY > 350) {
        goToSleep();
      } else if (isSleeping && !document.hidden) {
        wakeUp();
      }
    };
    window.addEventListener('scroll', onScroll);

    // Visibility & Focus listeners: sleep when switching tabs or apps, wake up when returning
    const onVisibilityChange = () => {
      if (document.hidden) {
        goToSleep();
      } else if (window.scrollY <= 350) {
        wakeUp();
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    const onWindowBlur = () => {
      goToSleep();
    };
    const onWindowFocus = () => {
      if (window.scrollY <= 350) {
        wakeUp();
      }
    };
    window.addEventListener('blur', onWindowBlur);
    window.addEventListener('focus', onWindowFocus);

    // ── Load Avatar ──
    let mixer = null;
    let headBone = null;
    const gltfLoader = new GLTFLoader();

    gltfLoader.load(avatarUrl, (gltf) => {
      const sourceModel = gltf.scene.children[0];
      const mesh = cloneSkeleton(sourceModel);
      mesh.rotation.z = 0;
      mesh.frustumCulled = false;

      mesh.traverse((child) => {
        if (!child.isMesh && !child.isSkinnedMesh) return;

        let mat;
        if (child.name === 'head') {
          mat = new THREE.MeshBasicMaterial({ map: headTex });
        } else if (child.name === 'face') {
          mat = new THREE.MeshBasicMaterial({
            map: faceTex,
            transparent: true,
            depthTest: false,
            depthWrite: false,
            side: THREE.DoubleSide,
          });
        } else {
          const matcap = matcaps[child.name] || matcaps.gray;
          mat = new THREE.MeshMatcapMaterial({ matcap });
        }
        child.material = mat;
        child.frustumCulled = false;
        child.renderOrder = child.name === 'face' ? 25 : 24;
      });

      // Remove brain mesh
      const brain = mesh.getObjectByName('brain');
      if (brain) brain.parent.remove(brain);

      // Capture head bone for precise sleeping sprite tracking
      headBone = mesh.getObjectByName('headBone');

      // Wrap in group, rotated to face straight forward towards the camera (exact Math.PI as in duta3d)
      const group = new THREE.Group();
      group.add(mesh);
      group.rotation.set(0, -Math.PI, 0); // Exact -Math.PI faces forward directly without tilting left
      group.position.set(0, -0.75, 0);
      scene.add(group);

      // Body Animation: contact-idle with LoopPingPong (rock-solid, never floats or glitches)
      const idleClip = gltf.animations.find(
        (a) => a.name === 'contact-idle'
      ) || gltf.animations.find(
        (a) => a.name.toLowerCase().includes('idle')
      ) || gltf.animations[0];

      if (idleClip) {
        mixer = new THREE.AnimationMixer(mesh);
        const action = mixer.clipAction(idleClip);
        action.loop = THREE.LoopPingPong;
        action.play();
      }
    });

    // ── Mouse Parallax ──
    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 0.5;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 0.3;
    };
    window.addEventListener('mousemove', onMouseMove);

    // ── Resize ──
    const onResize = () => {
      const rw = container.clientWidth || window.innerWidth;
      const rh = container.clientHeight || window.innerHeight;
      if (rw > 0 && rh > 0) {
        camera.aspect = rw / rh;
        camera.updateProjectionMatrix();
        renderer.setSize(rw, rh);
      }
    };
    window.addEventListener('resize', onResize);

    // ── Render Loop ──
    const clock = new THREE.Clock();
    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      if (mixer) mixer.update(delta);

      // Update head position tracking for floating Z Z Z
      if (headBone) {
        const headPos = new THREE.Vector3();
        headBone.getWorldPosition(headPos);
        sleepingMesh.position.set(headPos.x + 0.35, headPos.y + 0.12, headPos.z + 0.05);
      }

      // Animate sleeping Z Z Z opacity & progression
      sleepingUniforms.uTime.value += delta;
      sleepingUniforms.uOpacity.value += (sleepOpacityTarget - sleepingUniforms.uOpacity.value) * 0.08;
      sleepingMesh.visible = sleepingUniforms.uOpacity.value > 0.01;

      // Smooth parallax centered straight (exact duta3d perspective looking down at chest)
      camera.position.x += (mouse.x * 0.6 - camera.position.x) * 0.04;
      camera.position.y += (3.75 - mouse.y * 0.3 - camera.position.y) * 0.04;
      camera.lookAt(0, 1.75, 0);

      renderer.render(scene, camera);
    };
    animate();

    // ── Cleanup ──
    return () => {
      cancelAnimationFrame(animId);
      blinkTimeouts.forEach(clearTimeout);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('blur', onWindowBlur);
      window.removeEventListener('focus', onWindowFocus);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousemove', onUserActivity);
      window.removeEventListener('click', onUserActivity);
      window.removeEventListener('touchstart', onUserActivity);
      window.removeEventListener('resize', onResize);
      sleepingGeo.dispose();
      sleepingMat.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />;
}
