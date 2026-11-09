---
title: Localization, coordinate frames, and calibration
description: Verify coordinate frames, units, extrinsics, and localization timing before tuning algorithm parameters.
content_type: knowledge
status: design guidance
scope: localization and multi-sensor coordinate handling
keywords: [localization, frame_id, extrinsic calibration, coordinate transform]
evidence_ids: []
---

# Localization, coordinate frames, and calibration

**Status:** `design guidance` · **Core rule:** prove coordinates and calibration before tuning algorithm parameters

## Minimum check set

- Is every message's `frame_id`, parent/child relationship, and axis direction explicit?
- Are units for length, angle, and velocity consistent?
- Are extrinsic validity periods, mounting orientation, and transform order recorded?
- Does localization timestamp describe the vehicle state rather than processing completion?
- Are trajectories, maps, perceived objects, and chassis feedback expressed in the same reference frame?

## Typical symptoms and hypotheses

| Symptom | First hypothesis | Cheap evidence |
| --- | --- | --- |
| Whole vehicle appears translated | Extrinsic, initial pose, or map-frame mismatch | Overlay trajectories and static landmarks |
| Turn direction is reversed | Axis or angle-sign convention error | Inspect transform matrix and handedness |
| Intermittent pose/speed jumps | Time alignment or localization reset | Compare state sequence with reset logs |

These are general diagnostics, not proof that WheelOS has validated every vehicle and sensor combination.
