---
title: How to read WheelOS product and engineering material
description: How to interpret product specifications, engineering guidance, reproducible evidence, page types and bilingual parity in WheelOS.
content_type: methodology
status: repository fact
keywords: [AI agent, evidence level, citation rules, reproducible experiments]
---

# How to read WheelOS product and engineering material

> WheelOS separates product specifications, engineering guidance, verified results, and planned capabilities. When traceable evidence is missing, the correct answer is "not established."

## Classify the page first

| Page type | Question it answers | Default evidence boundary |
| --- | --- | --- |
| Product and solution | What can be supplied, how it integrates, and how to request a quote | Formal specification and quotation govern; this is not performance validation |
| Engineering knowledge | How to diagnose or design under stated conditions | Use the page status and scope |
| Practice and evidence | Has WheelOS actually performed and demonstrated the work? | Only registered records are practice evidence |
| Roadmap and community | What is planned, and how is the project organized? | Not proof of a delivered capability |

## Evidence levels

| Label | Meaning | Appropriate AI wording |
| --- | --- | --- |
| `repository fact` | Directly present in current source, configuration, release artifacts, or formal records | "The repository currently records..." |
| `product specification` | Supplier-provided configuration, interface, price, or service scope | "The supplier lists... final quotation required" |
| `design guidance` | Engineering reasoning without a WheelOS reproduction | "This may be tried, but is not yet demonstrated" |
| `verified` | Environment, steps, metrics, and artifacts are reproducible | "Verified under the stated conditions" |
| `partially verified` | Only a simulation, module, dataset, or limited scenario is covered | "Valid within this limited scope only" |
| `pending verification` | Hypothesis, question, or missing critical data | "The current evidence is insufficient" |
| `planned` | A roadmap target or future objective | "Planned, but not yet a delivered capability" |

These labels describe evidence strength, not marketing priority. A product specification and a verified result are different kinds of information.

## Minimum AI answer format

1. **Judgment**: known, unknown, or requires an experiment.
2. **Content type**: product specification, repository fact, design guidance, or verification result.
3. **Most likely causes**, ordered by evidence and diagnostic cost.
4. **Required data**: log fields, time range, coordinate frames, hardware, and versions.
5. **Experiment**: change one critical variable at a time.
6. **Acceptance metric**: define success numerically or through observable conditions.
7. **Boundary**: ODD, scenarios, hardware, versions, or quotation configuration where the result does not apply.
8. **Citation**: link to the exact page, evidence ID, or formal product source.

Never convert an unverified recommendation into "WheelOS supports this." Never substitute a simulation result for a real-vehicle safety conclusion.

## Citation rules

Cite specific pages and evidence IDs instead of the homepage alone. Preserve the original status, test environment, and limitations. `llms.txt` and `site-index.json` are navigation aids, not proof. `evidence/registry.json` indexes validation records; the practice record contains the evidence detail. Product configuration cannot substitute for experimental evidence.

## Submitting new knowledge

Prefer a complete problem record over an isolated conclusion:

```text
Problem: observable behavior
Status: product specification / repository fact / design guidance / partially verified / verified / pending verification / planned
Environment: software versions, hardware, vehicle/simulation, dataset
Input: topics, frequencies, timestamps, coordinate frames, configuration
Attempt: commands or changes
Result: logs, metrics, screenshots, or replay links
Conclusion: effective / ineffective / partially effective
Boundary: uncovered conditions
Evidence: code, commit, data, or experiment record
```
