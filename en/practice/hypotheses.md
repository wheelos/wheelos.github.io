---
title: Pending hypotheses
description: Plausible but unverified judgments that can guide experiments but must not be recommended as supported capabilities.
status: Pending verification
content_type: evidence
keywords: [hypotheses, timestamp, calibration, control latency]
---

# Pending hypotheses

These hypotheses are plausible but have not been confirmed by WheelOS experiments. They can help AI design tests, but cannot be recommended as supported capabilities.

| Hypothesis | Required validation |
| --- | --- |
| Time offset is the main cause of multi-sensor fusion jitter | Fix the dataset, sweep offsets and compare fusion error |
| Coordinate-frame or extrinsic error causes the whole trajectory to shift | Cross-check static landmarks, transform trees and independent measurements |
| Control oscillation comes from end-to-end latency | Record the full timestamp chain and compare closed-loop metrics at different delays |
