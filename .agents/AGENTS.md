# WheelOS Project Instructions

This repository is the public, bilingual WheelOS knowledge and product site.

## Product narrative

Do not present autonomous driving as a finished product that customers must simply buy. Present it like a house that is built in visible stages. Customer-facing pages use five milestones:

1. Requirements conversation
2. Initial scenario assessment
3. Site survey and solution design
4. Single-route pilot and effect validation
5. Review and expansion decision

Internally, these can be decomposed into seven engineering stages:

1. Site and task discovery
2. Operating boundary and route design
3. Vehicle, chassis and sensor foundation
4. Software, time synchronization and data integration
5. Replay and controlled-site validation
6. Paid or approved pilot operation
7. Evidence review and scale-up

Customers should be able to see what happens at each stage, what they receive, what they must approve, how success is measured, and what remains unverified.

## Evidence rules

- Product specifications, application guidance, repository facts, plans and verified evidence are different claim classes.
- Never infer verified performance, safety, regulatory compliance or production readiness from a product page, roadmap, proposal or demonstration.
- A verified claim requires a complete evidence record with environment, versions, data, procedure, metrics, raw artifacts, failure samples, boundaries and reviewer.
- Preserve the current evidence status. The public evidence registry may be empty.
- A pilot is not complete until the agreed baseline, operational metrics, exception log and evidence summary exist.

## Customer decision requirements

Every product, application or landing page must make these items explicit:

- What problem is solved
- Who it fits and who it does not fit
- What the customer receives
- What the customer must provide
- How responsibilities are split
- Which operating metrics determine success
- What the next action is

Use `decision_summary`, `best_for`, `not_for`, `next_action` and `cta_url` in frontmatter.

## Static-site interaction

- Fit-assessment tools must run locally in the browser and must not imply that answers are submitted to a server.
- Use print/PDF, clipboard copy and prefilled email as the handoff after an assessment.
- Make the static fallback readable without JavaScript and keep it indexable by search and AI systems.

## Bilingual requirements

- Every public page must have a Chinese and English counterpart at matching routes.
- Both languages must preserve the same numbers, scope, claim status, evidence IDs and limitations.
- Machine indexes must expose both language URLs.
- Do not use automatic translation output as a finished public claim without human review.

## AI retrieval requirements

Maintain these discoverable entry points:

- `public/llms.txt`: concise policy and decision brief
- `public/llms-full.txt`: complete bilingual source corpus
- `public/site-index.json`: structured page, status, route and decision index

Every page must declare title, description, content type, claim status and keywords. Product, application, assessment, delivery and landing pages must also declare decision metadata.

## Information architecture

- Keep top-level navigation shallow and task-oriented.
- Put products and applications before engineering detail.
- Separate product/solution content, engineering knowledge and evidence.
- Link every solution to its integration path and validation gate.
- Prefer one strong page with clear sections over many thin pages.

## Required validation

Before deployment, run:

1. Bilingual metadata and critical-fact checks
2. Evidence-registry validation
3. AI index generation
4. VitePress production build
5. Internal link and anchor validation

Do not treat a successful build as evidence that a product capability has been verified.
