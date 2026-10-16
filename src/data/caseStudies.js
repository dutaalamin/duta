/**
 * Case studies for selected projects.
 *
 * Only projects with an entry here get a detail page. Everything else keeps
 * linking straight to the live site.
 */

export const caseStudies = {
  'job-market-analyzer': {
    slug: 'job-market-analyzer',
    title: 'Job Market Analyzer',
    tagline: 'Which skills is the job market actually asking for?',
    year: '2026',
    role: 'Data engineering',
    live: 'https://job.duta1.com/',
    stack: ['Python', 'DuckDB', 'dbt', 'Apache Airflow', 'SQL'],
    problem:
      'Job postings scatter their requirements across free text. There is no simple way to answer "which skills are genuinely in demand right now?" without reading hundreds of listings by hand.',
    approach: [
      'Collect postings from a public jobs API and store each run as a raw snapshot so results are reproducible.',
      'Clean and normalise the records, extracting skills from the title and description with a curated dictionary.',
      'Load into a DuckDB warehouse, then model it with dbt: a staging layer plus marts for skill demand, role families and seniority.',
      'Enforce data quality with 27 dbt tests covering uniqueness, nulls, accepted values and a custom range check.',
      'Schedule the whole pipeline daily with an Airflow DAG, each stage an isolated, retryable task.',
    ],
    results: [
      { value: '2,604', label: 'postings analysed' },
      { value: '1,012', label: 'companies' },
      { value: '27', label: 'data-quality tests' },
      { value: '5', label: 'pipeline stages' },
    ],
    highlights: [
      'Share-of-market column on every skill (e.g. Python appears in 15.3% of postings).',
      'Window functions rank the top skills within each role family.',
      'The dashboard is a single static file reading one JSON export, so it needs no server.',
    ],
  },

  'qa-automation': {
    slug: 'qa-automation',
    title: 'QA Automation',
    tagline: 'End-to-end tests that guard a real production app.',
    year: '2026',
    role: 'Test automation',
    live: 'https://qa.duta1.com/',
    stack: ['Playwright', 'JavaScript', 'Page Object Model', 'GitHub Actions', 'CI/CD'],
    problem:
      'A live web app needs its core user journeys verified on every change. Manual checking does not scale and misses regressions that only appear in specific browsers or viewports.',
    approach: [
      'Build the suite with Playwright, driving the real production build rather than a mock.',
      'Keep every selector in Page Objects, so a UI change is fixed in one place and the specs stay readable.',
      'Cover positive, negative and edge cases: correct typing, wrong keys, backspace, timer, restart, theming and the results modal.',
      'Run across four targets in parallel: Chromium, Firefox, WebKit and a mobile viewport.',
      'Wire it into GitHub Actions so every push runs the suite and uploads the HTML report, traces and video.',
    ],
    results: [
      { value: '13', label: 'tests passing' },
      { value: '4', label: 'browser targets' },
      { value: '3', label: 'test suites' },
      { value: '100%', label: 'pass rate' },
    ],
    highlights: [
      'Polling instead of fixed waits, so tests stay stable when animations run.',
      'Traces, screenshots and video captured automatically on failure.',
      'The HTML report is published as a live page you can browse.',
    ],
  },
};

export function getCaseStudy(title) {
  const slug = title.toLowerCase().replace(/\s+/g, '-');
  return caseStudies[slug] ?? null;
}
