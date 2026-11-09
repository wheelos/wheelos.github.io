---
title: Autonomous-driving knowledge base
description: Problem-oriented autonomous-driving guidance organized around observable symptoms, evidence status, and reproducible diagnostics.
content_type: knowledge
status: repository fact
keywords: [autonomous driving, troubleshooting, sensor fusion, localization, planning, validation]
evidence_ids: []
---

# Autonomous-driving knowledge base

Content is organized around problems AI agents and engineers actually encounter. Each page starts with a diagnostic path and then explains the principle. Areas without WheelOS evidence are explicitly labeled as guidance or pending verification.

| Observed symptom | Read first |
| --- | --- |
| Trajectory jitter, prediction mismatch, unstable fusion | [Sensors and time synchronization](/en/knowledge/sensors-and-time) |
| Vehicle offset in the map, wrong turn direction | [Localization, frames, and calibration](/en/knowledge/localization-and-calibration) |
| Feasible trajectory that the vehicle cannot track | [Planning, control, and chassis](/en/knowledge/planning-control) |
| Simulation works but real-world readiness is unclear | [Simulation, replay, and validation](/en/knowledge/validation) |

## Question template

Provide the symptom, reproduction frequency, vehicle or simulation environment, software commit/version, sensor models, input topics, timestamp source, coordinate frames, key logs, and acceptance metric. Without this context, the correct conclusion is usually `pending verification`.
