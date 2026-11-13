---
title: Autonomous Driving Scenario Fit Assessment
description: Assess short-distance transport opportunities across demand, routes, vehicle and cargo, safety and compliance, and economics.
status: design guidance
content_type: assessment
keywords: [scenario assessment, autonomous-driving fit, fixed routes, safety compliance, economics, pilot]
scope: Initial suitability screening for enterprise short-distance autonomous transport projects
decision_summary: After completing five gates, the tool returns a local recommendation to proceed to site assessment, collect more information, or defer deployment.
best_for: [frequent fixed routes, a clear operating owner, manageable sites, estimable operating cost]
not_for: [unresolved compliance responsibility, infrequent transport, no clear owner or budget, autonomous driving as a demonstration only]
next_action: Complete the five steps, print or copy the summary, then decide whether to start a site survey.
cta_url: mailto:support@wheelos.cn?subject=WheelOS%20scenario%20fit%20assessment
layout: doc
sidebar: false
aside: false
outline: [2, 3]
---

<script setup>
import ScenarioFitAssessment from '../../.vitepress/theme/components/ScenarioFitAssessment.vue'
</script>

# Autonomous Driving Scenario Fit Assessment

> Decide whether the transport task is worth solving before selecting a vehicle or system. This tool runs entirely in your browser and does not upload your answers.

<ScenarioFitAssessment />

## Static decision summary

Even without the interactive tool, check these five areas first:

| Gate | Core question | Decision impact |
| --- | --- | --- |
| Transport demand | Is the work long-term, repetitive, stable and already consuming drivers or vehicles? | One-off or low-frequency demand rarely supports a viable case |
| Route conditions | Are origins, destinations, corridors, loading areas and handoffs clear and manageable? | Complex mixed traffic and uncertain handoffs raise project risk |
| Vehicle and cargo | Are weight, dimensions, temperature, loading and system interfaces understood? | Non-standard cargo requires additional vehicle or process design |
| Safety and compliance | Are access, permits, safety responsibility, insurance and exceptions resolved? | Do not enter commercial deployment while critical responsibility is unresolved |
| Economics | Are current cost, full deployment cost and productive daily work estimable? | Compare total cost with the existing transport method, not only autonomous features |

## Complete assessment checklist

### Transport demand

- [ ] The transport task exists long-term rather than as a one-off need.
- [ ] There is a relatively stable daily or weekly transport frequency.
- [ ] Origins, destinations and primary tasks are clear.
- [ ] Drivers, vehicles or dispatch resources are currently committed.

### Route conditions

- [ ] The route is relatively fixed with clear origins and destinations.
- [ ] Roads and operating areas are passable for the intended vehicle.
- [ ] Loading and handoff locations are relatively fixed.
- [ ] Mixed traffic, junctions and temporary obstacles can be assessed and managed.

### Vehicle and cargo

- [ ] Cargo weight, dimensions and transport requirements are defined.
- [ ] Vehicle payload and cargo space satisfy the requirement.
- [ ] Temperature, insulation or sealing requirements are defined with a viable solution.
- [ ] Loading and handoff processes can be standardized.
- [ ] The need to connect warehouse or dispatch systems is understood.

### Safety and compliance

- [ ] The operating area and access requirements are defined.
- [ ] Operating permits, site management and safety responsibility can be assigned.
- [ ] Exception handling, emergency stop and site-response procedures can be implemented.
- [ ] Insurance and incident responsibility are defined.
- [ ] Special-cargo requirements can be met or explicitly excluded.

### Economics

- [ ] The current driver, vehicle and transport-service cost is understood.
- [ ] Vehicle, system, deployment, maintenance and operating costs can be estimated.
- [ ] Daily productive work can support the investment.
- [ ] A business owner, budget and willingness to cooperate are present.

## Common cases for deferring deployment

- The task is a short-term demonstration without stable utilization.
- No operating owner, budget or long-term plan exists.
- Routes, loading or handoffs are highly uncertain.
- Regulation, insurance or safety responsibility remains unresolved.
- Special-cargo requirements cannot be met and no alternative exists.
- The customer focuses only on “driverless” without a business metric.

## After the assessment

- **Proceed to site assessment:** review the vehicle, chassis, route, site and acceptance metrics.
- **Information is incomplete:** collect critical data before purchasing a vehicle.
- **Not ready for deployment yet:** resolve demand, route, safety or economic blockers first.

[View the path from requirements to pilot deployment →](/en/solutions/delivery-process)

<div class="solution-cta">
  <div>
    <h2>Want to review a real transport task with us?</h2>
    <p>Send the cargo, origin and destination, frequency, vehicle and current transport method for an initial fit review.</p>
  </div>
  <div class="solution-actions">
    <a class="primary" href="mailto:support@wheelos.cn?subject=WheelOS%20scenario%20fit%20assessment">Send the scenario summary</a>
    <a href="/en/solutions/applications">Explore six applications</a>
  </div>
</div>
