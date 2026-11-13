---
title: From Requirements to Pilot Deployment
description: A five-milestone customer journey from requirements and scenario assessment through solution design, a single-route pilot and scale-up decision.
status: design guidance
content_type: delivery
keywords: [delivery process, pilot deployment, requirements, site survey, solution design, acceptance metrics]
scope: Customer delivery and pilot method for WheelOS short-distance autonomous transport projects
decision_summary: Validate one route and one cargo type before deciding whether to expand. Every milestone has inputs, deliverables and exit criteria.
best_for: [single-route pilots, fixed-route transport, measurable operating metrics, staged investment]
not_for: [deployment without a site assessment, operating commitments before chassis confirmation, production claims without evidence]
next_action: Complete the scenario fit assessment, then prepare cargo, origins and destinations, frequency, vehicle and current cost data.
cta_url: mailto:support@wheelos.cn?subject=WheelOS%20pilot%20delivery%20plan
---

# From Requirements to Pilot Deployment

> Do not start by building a complete autonomous transport network. Validate one suitable route and its business value, then expand. Build the project like a house: foundation, structure, utilities, inspection and trial operation must all be visible.

<div class="delivery-flow" role="list" aria-label="Five customer delivery stages">
  <div class="delivery-flow__node" role="listitem"><span>01</span><strong>Requirements</strong></div>
  <div class="delivery-flow__arrow" aria-hidden="true">→</div>
  <div class="delivery-flow__node" role="listitem"><span>02</span><strong>Initial assessment</strong></div>
  <div class="delivery-flow__arrow" aria-hidden="true">→</div>
  <div class="delivery-flow__node" role="listitem"><span>03</span><strong>Site survey and design</strong></div>
  <div class="delivery-flow__arrow" aria-hidden="true">→</div>
  <div class="delivery-flow__node" role="listitem"><span>04</span><strong>Single-route pilot</strong></div>
  <div class="delivery-flow__arrow" aria-hidden="true">→</div>
  <div class="delivery-flow__node" role="listitem"><span>05</span><strong>Review and scale</strong></div>
</div>

## Five customer milestones

### 1. Submit the basic requirements

| Customer sees | Customer provides | WheelOS delivers | Exit criteria |
| --- | --- | --- | --- |
| Scenario checklist and meeting notes | Cargo, origins and destinations, frequency, operating area, current vehicles and staff, special requirements | Requirement summary, missing-information list and next steps | The transport task and business objective are clear |

### 2. Initial scenario assessment

| Customer sees | Customer provides | WheelOS delivers | Exit criteria |
| --- | --- | --- | --- |
| Five-gate assessment, main risks and unknowns | Actual task data, route conditions, vehicle basis, safety responsibility and current cost | Fit recommendation, preliminary value judgment and whether a site survey is warranted | No unresolved hard blocker |

Use the [scenario fit assessment tool](/en/solutions/fit-assessment).

### 3. Site survey and solution design

| Customer sees | Jointly confirmed | WheelOS delivers | Exit criteria |
| --- | --- | --- | --- |
| Site issues, vehicle interfaces, route and risk list | ODD, stops, loading, owners, acceptance metrics and project scope | Solution boundary, vehicle and sensor recommendation, integration plan, responsibility matrix and quote inputs | Safety, regulation, chassis and responsibilities can be assigned |

### 4. Single-route pilot and validation

| Customer sees | Pilot scope | WheelOS delivers | Exit criteria |
| --- | --- | --- | --- |
| Daily task dashboard, exception list, metrics and weekly report | One route or one cargo type | Integration, calibration, operating logs, issue closure and stage report | Targets met with controlled risk and traceable issues |

The pilot must record at least:

| Metric | Baseline | Pilot result |
| --- | --- | --- |
| Transport frequency | Daily tasks, shifts and peak windows | Actual completed tasks |
| Labor input | Driver, handler, dispatch and intervention hours | Labor used during the pilot |
| Vehicle utilization | Productive run, waiting and empty-running time | Effective utilization per vehicle |
| On-time rate | Agreed time window | Share completed inside the window |
| Exceptions | Interventions, emergency stops, blocked paths and manual recovery | Exceptions per 100 tasks |
| Unit cost | Cost per task, kilometer or pallet | Actual pilot unit cost |
| Safety events | Classification rules | Collisions, near misses, violations and site risks |

These are pilot metrics, not current WheelOS performance data.

### 5. Review, optimize and decide whether to expand

| Customer sees | Review content | Expansion gate | If expansion is deferred |
| --- | --- | --- | --- |
| Evidence pack, metric comparison, failure samples and residual risk | Business value, operating stability, cost, exceptions and safety boundary | Targets met and conditions exist to add vehicles, routes or tasks | Retain validated learning, improve the solution or reassess |

## Seven engineering sub-steps

Customers see five milestones; internally they can be decomposed into seven engineering steps:

| Engineering step | Customer milestone | Main output |
| --- | --- | --- |
| Scenario discovery | 1 | Task list and preliminary value case |
| Boundary design | 2 | ODD, responsibility matrix and acceptance metrics |
| Vehicle and sensors | 3 | Hardware configuration, interface list and installation plan |
| Software and data integration | 3–4 | Configuration, calibration, recordings and system checklist |
| Replay and controlled-site validation | 4 | Validation report, failures and corrective records |
| Pilot operation | 4 | KPIs, issue closure and operating logs |
| Assessment and expansion | 5 | Evidence pack, retrospective and expansion recommendation |

## Do not skip stages

- Do not commit to vehicle integration before chassis and drive-by-wire interfaces are confirmed.
- Do not infer route performance before time sync, frames and calibration are checked.
- Do not make site-validation conclusions without replay and failure samples.
- Do not make business-impact conclusions without a baseline and operating metrics.
- Do not upgrade a pilot to “verified” or a production capability without an evidence record.

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
    <h2>Validate one route before deciding to scale</h2>
    <p>Start with the scenario assessment, then define the task, operating boundary, vehicle conditions and pilot metrics.</p>
  </div>
  <div class="solution-actions">
    <a class="primary" href="/en/solutions/fit-assessment">Start the fit assessment</a>
    <a href="/en/solutions/applications">Explore six applications</a>
  </div>
</div>
