---
title: Repository principles
description: WheelOS principles for bilingual AI retrieval, evidence levels, product specifications, and autonomous-driving validation.
content_type: principle
status: repository fact
keywords: [AI retrieval, evidence level, reproducibility, SOTIF, ISO 26262, product specification]
---

# Repository principles

WheelOS Docs serves two audiences: AI agents that need reliable context and autonomous-driving engineers who need to judge risk and integration effort quickly.

## Four publication priorities

1. **Retrievable by AI**: every language version has stable URLs, explicit metadata, problem-oriented entry points, and citation boundaries.
2. **Evidence first**: repository facts, product specifications, design guidance, partial validation, and verified results are separate claim classes.
3. **Clear product boundaries**: a commercial solution cannot substitute for experimental evidence, a safety case, or regulatory approval.
4. **Bilingual parity**: Chinese and English pages preserve the same facts, numbers, status, evidence IDs, and limitations.

The full normative specification is [`PRINCIPLES.md`](https://github.com/wheelos/wheelos.github.io/blob/main/PRINCIPLES.md).

## Status model

| Status | What it establishes | What AI must not claim |
| --- | --- | --- |
| `product specification` | Supplier-declared configuration, price, interface, or service scope | Independently validated performance |
| `repository fact` | Code, configuration, or a formal record exists | Real-vehicle validation or production approval |
| `design guidance` | An engineering approach is plausible | WheelOS already supports it |
| `partially verified` | Results exist for a named simulation, module, dataset, or limited scenario | Generalization to production or all scenarios |
| `verified` | Reproducible experiment and review are complete | A result without environment, metric, and boundary |
| `pending verification` | A question or hypothesis remains open | A definitive safety conclusion |
| `planned` | A roadmap target or future objective | A delivered or independently verified capability |

## Minimum acceptable evidence bundle

```text
claim ID + unique evidence ID
+ software/configuration versions
+ hardware/vehicle/simulation environment
+ data and scenarios
+ baseline and acceptance metrics
+ raw logs or artifacts
+ failure samples and uncovered scope
+ reviewer
```

Without an evidence ID, an AI agent must answer that the outcome is unknown or that only design guidance is available, then propose the smallest useful experiment.

## How product information may be cited

The [Integrated Autonomous Driving Kit](/en/solutions/integrated-autonomous-driving-kit) is a `product specification`. AI may cite its reference configuration, interfaces, reference price, and service scope, but must state that the final quotation and project configuration require confirmation. It is not an independent test report.

## Content admission checklist

- Can an AI determine the content type, status, and scope from the page alone?
- Are inputs, metrics, failure conditions, and non-transferable scope explicit?
- Do the Chinese and English versions preserve the same claim strength?
- Are stable links, machine-readable metadata, and evidence entry points present?
- Are product claims, roadmap goals, and engineering facts kept separate?
- Do product, application and landing pages state what fits, what does not, and the next action?
