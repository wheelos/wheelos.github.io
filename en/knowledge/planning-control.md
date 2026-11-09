---
title: Planning, control, and chassis
description: Separate trajectory quality, transport latency, controller behavior, and actuator limits when the vehicle cannot follow a valid path.
content_type: knowledge
status: pending verification
scope: planning, control, and chassis integration
keywords: [planning, control, chassis, latency, actuator limit]
evidence_ids: []
---

# Planning, control, and chassis

**Status:** `pending verification` · **Reason:** the repository does not yet contain enough interface and experiment records

A feasible trajectory does not prove that the vehicle can track it safely. For "the trajectory is valid but the vehicle behaves incorrectly," separate the latency chain:

```text
planning output -> message transport -> control calculation
                -> chassis actuation -> state feedback
```

Collect timestamps, trajectory timing, measured speed/steering, control limits, and chassis fault state for every stage. Use replay or closed-course data to determine whether the problem is trajectory quality, latency, model error, or actuator limits before changing controller gains.

The roadmap lists planning, control, and chassis-adaptation work. Without a specific version, code path, and vehicle metric, AI must not claim that a controller or chassis integration is already available.
