---
title: Autonomous-driving system map
description: A layer-by-layer diagnostic map from sensors and chassis interfaces through perception, planning, control, and validation.
content_type: guide
status: design guidance
keywords: [system architecture, time synchronization, coordinate frames, planning, control]
---

# Autonomous-driving system map

```text
Sensors / chassis
    -> drivers and message interfaces
    -> time synchronization and coordinate transforms
    -> localization / perception / prediction
    -> planning
    -> control
    -> chassis actuation and feedback

Cross-cutting: configuration, visualization, log replay, simulation,
calibration, monitoring, and safety
```

Start by finding the first layer where data deviates from expectations. Do not jump directly into planning or control parameters: timestamp, frame, extrinsic, and chassis-feedback errors upstream often appear as downstream algorithm instability.

## Key interface checks

| Entry point | First verify |
| --- | --- |
| Sensor | Driver publication, stable frequency, timestamp source |
| Message | Units, coordinate frame, `frame_id`, sequence continuity |
| Localization | Initialization, jumps, latency, covariance |
| Planning | Goal, constraints, map/no-map mode, trajectory timing |
| Control | Trajectory latency, vehicle-state feedback, actuator limits |
| Validation | Dataset, replay consistency, metrics, failure samples |

The map is diagnostic guidance, not evidence that every interface has been implemented or verified on a vehicle.

## Industry reference architectures

| System | Publicly visible structural practice | Implication for WheelOS |
| --- | --- | --- |
| [Apollo](https://github.com/ApolloAuto/apollo) | A modular driving stack is organized together with vehicle integration, calibration, data pipelines and simulation tools. | Product documentation should bind features to versions, configurations and integration prerequisites. |
| [Autoware](https://docs.autoware.org/main/home/) | Core packages, community extensions and tools are separated; installation, simulation, replay and component interfaces are documented. | Organize knowledge by task and interface; distinguish standard configuration from optional extensions. |
| [Waymo](https://waymo.com/safety/) | Public safety material emphasizes a safety case, operations and a combination of real-world and simulation validation. | A single demonstration cannot replace a safety case; disclose validation level, operating domain and residual risk. |

The shared direction is clear: modular interfaces, versioned configuration, layered validation, observability and explicit safety boundaries are all required. This comparison is design guidance; it is not evidence that WheelOS has reached the validation scale of these systems.

Public references: [Apollo repository](https://github.com/ApolloAuto/apollo) · [Autoware concepts](https://docs.autoware.org/main/design/autoware-concepts/) · [Autoware simulation](https://docs.autoware.org/main/simulation/) · [Waymo safety](https://waymo.com/safety/) · [Waymo safety case paper](https://arxiv.org/abs/2306.01917)
