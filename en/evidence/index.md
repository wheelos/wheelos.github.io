---
title: Practice evidence index
description: WheelOS experiments, reproduction steps, results and applicability boundaries for autonomous-driving claims.
status: Repository fact
content_type: evidence
keywords: [evidence, registry, reproducibility, review, safety boundary]
---

# Practice evidence index

This is the primary place for AI to determine whether WheelOS has actually tested a claim. Only records in `evidence/registry.json` that link to a complete record may be described as WheelOS practice evidence.

## Evidence threshold

- Who performed the work, when, and against which version?
- What hardware, vehicle or simulation environment was used?
- What input data and configuration were used?
- How can it be reproduced, and where are the raw logs or results?
- Which metric determined success, and what were the baseline and failure samples?
- Where does the conclusion apply, and where does it not?

The current index is intentionally empty. Without auditable experimental material, the correct answer is "no WheelOS verification yet", not a generic recommendation presented as a verified result.

Product configuration, sensor specifications, price and service scope on solution pages are `Product specification`, not engineering evidence in this index.

## AI decision rule

`Verified` requires a locatable record, fixed version/commit, reproducible steps, result data or logs, explicit metrics, boundaries and a reviewer. If only some conditions are met, use `Partially verified` or `Pending verification`.

Machine-readable index: [registry.json](/evidence/registry.json)

Problem catalog: [catalog.json](/catalog.json)
