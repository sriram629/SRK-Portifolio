## Update — 19 September 2026

The following user-confirmed updates supersede the initial audit where relevant:

- Chatbot: user confirmed a lightweight routing model selects an LLM based on prompt requirements and difficulty, plus multi-provider failover. The new résumé also confirms Gemini/Groq/Mistral failover. This copy reflects the user's implementation account, not a fresh source-code verification. No latency or uptime guarantees were added.
- Trusynth: described connected, up-to-date project knowledge for employee onboarding, Jira-specific coding help, and test-script/code-testing support. Avoided equating document retrieval with model weight training.
- Cegma: named the live application's Express-to-NestJS migration and refactoring into modules/services with container organization.
- Assessment Portal: user's latest account specifies frontend contributions for student and organization experiences. This takes precedence over the broader backend ownership implied by the résumé.
- Linked the newly supplied applied-AI résumé PDF unchanged. It still describes Atlas Vector Search; the earlier source audit found a later text-retrieval implementation. Website copy does not claim a current vector-search implementation.
- Added a labeled email contact form using the original Formspree endpoint mvzzaklw, confirmed unchanged by the user. Recipient inbox delivery has not been verified with a live submission.

---

# Portfolio content audit — 18 September 2026

## Sources

Reviewed the portfolio's original source, its deployed page, and the current default-branch source of the five linked repositories. Personal employment details originated from the supplied portfolio; they cannot be independently verified from public project code.

| Original claim | Finding / correction | Evidence |
| --- | --- | --- |
| Chatbot uses MongoDB Vector Search | Current implementation stores document text and retrieves bounded excerpts with word-overlap ranking. Describe document retrieval, not vector similarity search. | AI-ChatBot/server/app/rag.py: select_context, search_vector_db |
| Intent-complexity routing; 10ms initial chunks; 100% availability | No supporting benchmark or availability measurement established. Replaced with streamed responses, document context, image inputs, and model integrations. | AI-ChatBot/server/app/chat.py: call_gemini, call_groq, provider streaming, websocket_endpoint |
| Finance Manager reduces memory 60% and manual entry 70% | Unsupported percentages removed. Describe spreadsheet imports, MongoDB reporting, and PDF/CSV/Excel exports. | Finance-Manager/server/routes/reports.js; middleware/uploadMiddleware.js |
| Quiz has zero-loss refresh persistence and zero latency | No localStorage/sessionStorage persistence found in the quiz source. Removed both claims. Describe timed questions and answer feedback. | quiz-app/src/components/QuestionBox/QuestionBox.jsx; src/pages/Home/Home.jsx; package.json |
| Quiz uses Web Audio API | Source uses the HTML Audio constructor. Wording now says audio feedback. | QuestionBox.jsx |
| Media capture guarantees 1:1 alignment | Browser capture is implemented; timing guarantee removed. | Browser-Based-Media-Capture-System/frontend/screen.js |
| Interactive Game Engine; 100% data retention | Renamed Rock, Paper, Scissors. Locally saved scores are supported, but storage isn't guaranteed permanent. | Rock-Paper-Scissors-Game JavaScript score persistence |
| Summer 2026 internship availability | Stale as of review. Updated from direct user confirmation. | User confirmed CPT internships and 2027 graduate full-time roles with OPT |
| Current MS / graduation | User confirmed still studying, expected graduation May 2027. | Direct user confirmation |
| GPA, 40% cost reduction, leadership/concurrency claims | Removed unsupported headline metrics. Employment history retained in restrained wording from the supplied portfolio. | Employer results not independently verified |

## Other fixes

- Removed duplicate About section IDs and the hover-dependent project disclosure interface.
- Fixed favicon URL from `/public/logo.svg` to `/logo.svg`.
- Removed missing project-image paths. Project visuals are original illustrative interfaces, labeled as sample content.
- Replaced contact form with direct email and social contact routes.
- Retained original résumé file without changing its contents; review its claims separately before applications.

## Checks

- TypeScript / Vite production build passes.
- ESLint passes; Git whitespace check passes.
- Dependency audit reports zero known vulnerabilities after compatible updates.
- Browser checks: desktop rendering, 390px mobile layout without horizontal overflow, mobile menu navigation, expandable technical details, motion toggle and static fallback.
- Motion toggle removes WebGL canvas. Browser console returned no errors/warnings in the tested production page.
- Résumé PDF and favicon return HTTP 200 locally.
- The chatbot live link showed Render's service wake-up screen during verification; this is not evidence that the full app or its backend is healthy.
- Three.js remains a sizable lazy-loaded chunk (about 132 KB gzip); no performance benchmark on physical mobile devices was performed.

The changes are prepared on branch `dev` for review into `main`. The original main branch code is preserved on `OLD` at `6addf5a`. No production deployment was performed as part of this audit.
