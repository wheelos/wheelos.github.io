---
title: Sensors and time synchronization
description: Diagnose timestamp, latency, and synchronization problems that appear as unstable multi-sensor fusion.
content_type: knowledge
status: design guidance
scope: multi-sensor autonomous-driving pipelines
keywords: [sensor timestamp, latency, PTP, fusion jitter, Cyber RT]
evidence_ids: []
---

# Sensors and time synchronization

**Status:** `design guidance` · **Scope:** multi-sensor autonomous-driving pipelines

## Common symptoms

- Sensor rates look normal, but fused objects smear or jump.
- Replay is stable while the online system is unstable.
- Every device reports Unix time, yet messages still cannot be aligned.

## Diagnostic order

1. Record acquisition, publication, receipt, timestamp, and sequence number separately. Do not inspect only one middleware field.
2. Measure message-period distribution, latency, and cross-sensor time offset, including tail behavior rather than only averages.
3. Confirm each device's clock source, synchronization protocol, and time-zone/monotonic-clock semantics.
4. Replay a fixed dataset while sweeping offsets to quantify sensitivity.
5. Preserve metrics and failure samples before and after any synchronization fix.

## What cannot be concluded yet

Claiming "time synchronization is solved" requires a reproducible environment, measured offset, correction method, and acceptance metric. The WheelOS roadmap mentions synchronization tooling, but this page does not treat the roadmap as implementation or vehicle-validation evidence.
