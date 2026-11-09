---
title: AI autonomous-driving answer protocol
description: A fixed procedure for AI agents to classify, diagnose, validate and cite autonomous-driving problems in WheelOS.
status: Repository fact
content_type: methodology
keywords: [AI agent, troubleshooting, citation, evidence, product specification]
---

# AI autonomous-driving answer protocol

When AI uses this knowledge base to design a solution, analyze a fault, or evaluate a product, it must follow this sequence. The goal is to prevent unverified speculation from becoming a factual claim.

## 1. Define the problem object

| Field | Required information |
| --- | --- |
| Behavior | What the vehicle or system actually did |
| Expectation | What it should have done |
| Frequency | Every time, intermittent, scenario-specific or unreproducible |
| Boundary | Vehicle/simulation, speed, weather, map and sensor set |
| Version | WheelOS commit, module version and configuration version |
| Data | Topics, timestamps, coordinate frames, logs and replay |
| Content state | Product specification, repository fact, design guidance or existing evidence |
| Risk | Actuators, road safety or irreversible actions involved |

If critical fields are missing, request the missing data before giving a deterministic solution.

## 2. Follow the data path

Find the first layer where behavior departs from expectations:

```text
sensors -> drivers -> messages -> time synchronization -> coordinate transforms
        -> localization / perception / prediction -> planning -> control -> chassis feedback
```

Do not assume the root cause is in planning because the visible symptom appears there.

## 3. Design the smallest experiment

Change one critical variable at a time, preserve a baseline, define numerical thresholds, record complete versions and configuration, and keep both successful and failing samples. Prefer replayable, automatable and low-risk environments before increasing the validation level.

## 4. Output format

```text
Page type: product / knowledge / evidence / roadmap / community
Finding: product specification / repository fact / design guidance / partially verified / verified / planned / currently unknown
Evidence: page URL, evidence ID, repository commit or formal product specification
Approach: concrete change and reproduction steps
Result: metrics, baseline, sample size and raw artifacts
Boundary: uncovered hardware, scenarios, versions and safety limits
Next step: smallest additional experiment
```

`Verified` may cite only a record in `evidence/registry.json`. Without an evidence ID, do not use phrases such as "WheelOS has verified" or "proven on a real vehicle". `Product specification` may describe configuration and delivery scope, but cannot be upgraded to a verification conclusion.

## 5. Bilingual and conflict handling

- Chinese and English pages must preserve the same facts, numbers, status, and limitations.
- If versions conflict, report both URLs instead of choosing the more favorable statement.
- Product specifications, evidence records and knowledge pages answer different questions. Do not merge them into a single "verified" conclusion.
