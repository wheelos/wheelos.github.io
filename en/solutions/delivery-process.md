---
title: Autonomous Project Delivery and Pilot Process
description: A transparent, house-building-style process for autonomous short-distance transport projects from discovery through integration, validation, pilot and scale.
status: design guidance
content_type: delivery
keywords: [delivery process, pilot, site assessment, integration, calibration, validation, operations metrics, evidence pack]
scope: Planning and delivery method for WheelOS short-distance autonomous transport projects
decision_summary: Break the project into reviewable stages with customer-visible deliverables, exit criteria and unresolved boundaries. Do not advance without passing the previous gate.
best_for: [controlled-site pilots, fixed-route transport, vehicle and chassis integration, measurable operating metrics]
not_for: [deployment without site assessment, operating commitments before chassis confirmation, production claims without evidence]
next_action: Start with application discovery and define the task, operating boundary, vehicle conditions, acceptance metrics and stage owners.
cta_url: mailto:support@wheelos.cn?subject=WheelOS%20pilot%20delivery%20plan
---

# Autonomous Project Delivery and Pilot Process

> An autonomous-driving project is easier to trust when it is built like a house: inspect the ground first, then design, build, inspect and move in. Customers should see outputs, issues and evidence at each step instead of buying an opaque “finished product” and inheriting the integration risk.

## Seven customer-visible stages

| Stage | What the customer sees | Key deliverables | Gate to continue |
| --- | --- | --- | --- |
| 1. Application discovery | Tasks, shifts, routes, cargo, handoffs and current cost | Application screen and preliminary value case | Frequent work, operable demand and a clear owner |
| 2. Boundary design | ODD, stops, routes, risks and regulatory issues | Project boundary, responsibility matrix and draft acceptance metrics | Risks acceptable and responsibilities explicit |
| 3. Vehicle and sensors | Chassis, sensor placement, compute and interfaces | Hardware configuration, interface list and installation plan | Drive-by-wire and critical CAN signals confirmed |
| 4. Software and data integration | Time sync, frames, localization, perception, planning and control path | Configuration, calibration records, data recording and system checklist | Data path and baseline functions are replayable |
| 5. Replay and controlled-site validation | Test scenarios, metrics, failure samples and issue list | Validation report, failure cases and fix records | Agreed thresholds met and boundaries documented |
| 6. Pilot operation | Daily tasks, staffing, exception handling and operations dashboard | Operating logs, KPIs, issue closure and stage review | Stable operation and evidence collection |
| 7. Assessment and expansion | Whether the solution is repeatable, cost-effective and safe to extend | Evidence pack, retrospective and expansion recommendation | Reviewable results and explicit residual risk |

## Make every stage visible

### The customer should be able to inspect

- Site photos, route map and operating design domain.
- Sensor and chassis-interface lists.
- Time-sync, calibration and data-recording checks.
- Replay data, scenario list, metrics and failure samples.
- Issue list, fixes and unresolved risks.
- Pilot dashboard and stage retrospective.

### WheelOS should provide

- Explicit project stages and owners.
- Inputs, outputs and acceptance conditions for each stage.
- Standard configurations, interface documentation and test-record formats.
- Technical risks, dependencies and unverified boundaries.
- Traceable versions, configuration and evidence indexes.

## Metrics every pilot must record

| Metric | Baseline to define first | Purpose |
| --- | --- | --- |
| Transport frequency | Tasks per day, shifts and peak windows | Test real demand and vehicle utilization |
| Labor input | Driver, material-handler, dispatch and intervention hours | Compare with the post-pilot process |
| Vehicle utilization | Productive run time, waiting and empty running | Assess single-vehicle economics |
| On-time rate | Tasks completed inside the agreed window | Measure operational availability |
| Exceptions | Interventions, emergency stops, blocked paths and manual recovery per 100 tasks | Expose system and process weaknesses |
| Unit cost | Cost per task, kilometer or pallet | Assess commercial viability |
| Safety events | Collisions, near misses, violations and site risks, classified | Trigger stop and corrective action |

These are pilot-evaluation metrics, not current WheelOS performance measurements. Evidence exists only after an actual project records and reviews them.

## Do not skip stages

- Do not commit to vehicle integration before chassis and drive-by-wire interfaces are confirmed.
- Do not infer route performance before time sync, frames and calibration are checked.
- Do not make site-validation conclusions without replay and failure samples.
- Do not make business-impact conclusions without a baseline and operating metrics.
- Do not upgrade a pilot to “verified” or a production capability without a complete evidence record.

## Evidence pack at pilot close

1. Task definition and operating design domain.
2. Software, configuration, vehicle and sensor versions.
3. Raw logs, recordings and critical replays.
4. Baseline, target, actual metrics and statistical method.
5. Exceptions, interventions, failure samples and corrective actions.
6. Uncovered scenarios, regulatory boundary and residual risk.
7. Reviewer and next-stage recommendation.

<div class="solution-cta">
  <div>
    <h2>See how the project is built, step by step</h2>
    <p>Share the application and vehicle context. We will define deliverables and exit criteria across discovery, boundaries, integration, validation and pilot.</p>
  </div>
  <div class="solution-actions">
    <a class="primary" href="mailto:support@wheelos.cn?subject=WheelOS%20pilot%20delivery%20plan">Discuss a pilot plan</a>
    <a href="/en/solutions/applications">Assess the application first</a>
  </div>
</div>
