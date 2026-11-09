---
title: Simulation, replay, and validation
description: Map each validation level to what it can and cannot establish for autonomous-driving claims.
content_type: knowledge
status: design guidance
scope: verification and validation strategy
keywords: [simulation, replay, SIL, HIL, closed course, safety case]
evidence_ids: []
---

# Simulation, replay, and validation

**Status:** `design guidance`

Validation claims must state the evidence level:

| Level | Can establish | Cannot establish |
| --- | --- | --- |
| Unit/interface test | Data structures and local logic | System real-time behavior or safety |
| Offline replay | Repeatability under fixed data and configuration | Online clocks, drivers, and actuators |
| Simulation/SIL | Scenario behavior and interface integration | Real sensor noise, chassis dynamics, road risk |
| HIL | Hardware/software timing and interfaces under lab conditions | Unmodeled site hazards and full vehicle behavior |
| Closed course | Named vehicle and scenario performance | Uncovered sites, production safety |
| Controlled operation/public road/production | Evidence under an approved operating scope | Generalization to other vehicles or regulations |

Every experiment should retain versions, configuration, scenario definition, random seed, data provenance, metrics, failure samples, and the exact boundary of its conclusion.

Simulation, replay, and closed-course success are cumulative evidence, not substitutes for one another.

Safety-related projects should also use [ISO 26262](https://www.iso.org/standard/68383.html) functional safety, [ISO 21448](https://www.iso.org/standard/77490.html) SOTIF, and UL 4600 safety-case methods as reference frameworks. Referencing these standards does not mean that a WheelOS product or this repository is certified.
