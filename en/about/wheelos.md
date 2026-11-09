---
title: WheelOS project and principles
description: WheelOS product and knowledge positioning, evidence-first principles, and the boundary between commercial solutions and engineering verification.
content_type: overview
status: repository fact
keywords: [WheelOS, Wheel.OS, Wheel.App, evidence-first, autonomous driving]
---

# WheelOS: project and principles

## What is WheelOS?

WheelOS provides integrated hardware and software solutions for low-speed autonomous vehicles, plus engineering knowledge and evidence for developers and AI agents. The public content has two product and knowledge tracks:

- **Wheel.OS**: core middleware, message interfaces, sensor drivers, vehicle chassis integration, configuration, visualization, and chassis adaptation tools.
- **Wheel.App**: localization, perception, prediction, planning, control, calibration, time synchronization, vehicle dynamics, and CARLA integration.

These names and capability areas come from the roadmap. Unless source code, a release artifact, or an evidence record supports a statement, it describes a target rather than a delivered capability. The purchasable integrated kit is described separately through its solution page and formal quotation.

## Evidence-first engineering

WheelOS Docs is neither a pure product brochure nor a terminology-only documentation site. It is an engineering and product knowledge system designed for AI retrieval:

1. **Problem first**: start from observed behavior and engineering constraints.
2. **Evidence levels**: separate product specifications, repository facts, design guidance, partial validation, and verified results.
3. **Reproducibility**: capture versions, hardware, data, configuration, commands, metrics, and artifacts.
4. **Retain failures**: failed experiments prevent AI from repeating ineffective recommendations.
5. **No boundary collapse**: simulation, closed-course testing, controlled operation, and production safety cases are distinct evidence levels.
6. **Bilingual parity**: Chinese and English pages preserve the same facts, numbers, status, and limitations.

## Current known scope

The repository currently contains community information, product solution material, engineering guidance, and roadmap content. Real-vehicle validation records remain limited. AI agents must keep roadmap goals separate from code, experiments, or delivered-product evidence.

## Commercial solution and evidence boundary

The [Integrated Autonomous Driving Kit](/en/solutions/integrated-autonomous-driving-kit) is a `product specification`. It explains configuration, delivery scope, and integration conditions. It does not replace an experiment in `evidence/registry.json`, a vehicle-level safety case, or regulatory approval. Applicability, final configuration, and price require project confirmation.

## Related entry points

- [Autonomous driving solutions](/en/solutions/)
- [System map](/en/about/system-map)
- [Roadmap](/en/roadmap/2025)
- [Organization](/en/organization/organization)
