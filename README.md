# duta1.com

Personal portfolio for **Duta Alamin**, a software engineer focused on data and
test automation. It pairs a real-time 3D character with a clean project index
and per-project case studies.

Live: [duta1.com](https://duta1.com)

## What it is

A single-page React app with four views:

| View | What it shows |
| ---- | ------------- |
| Hero | A live 3D avatar (three.js) with head tracking |
| Work | The full project index, list and grid layouts |
| Case study | A deep dive per project: problem, approach, stack, result |
| Contact | Ways to get in touch |

## Stack

| Area | Technology |
| ---- | ---------- |
| Framework | React 19 + Vite |
| 3D | three.js (GLB avatar, matcap textures, custom sprite shader) |
| Motion | Framer Motion + GSAP + Lenis |
| Styling | Tailwind CSS 4 |
| Forms | EmailJS |
| Hosting | Vercel (auto-deploy from this repo) |

## Run locally

```bash
npm install
npm run dev        # http://localhost:3900
```

```bash
npm run build      # production bundle to dist/
npm run preview    # serve the build
```

## Structure

```
src/
  App.jsx                 view routing (home / work / case study)
  components/
    Hero.jsx              hero section and layout
    ThreeHero.jsx         the three.js scene and animation loop
    ProjectsList.jsx      project index + parallax gallery
    WorkPage.jsx          full work listing with filters
    CaseStudy.jsx         per-project detail page
    Contact.jsx           contact section
  data/
    caseStudies.js        case study content (problem, approach, results)
public/
  images/projects/        project thumbnails
```

## Adding a project

1. Add a thumbnail to `public/images/projects/`.
2. Add an entry to the `projects` array in `src/components/ProjectsList.jsx`.
3. Optional: add a case study in `src/data/caseStudies.js` to give it a detail page.

## Deploy

Pushes to `main` deploy automatically to Vercel.

## Author

Duta Alamin
[duta1.com](https://duta1.com)
