---
title: Integrated Autonomous Driving Kit
titleTemplate: false
description: A pre-integrated hardware and software development kit with an NVIDIA Jetson AGX Orin controller, 16-line LiDAR, four cameras, GNSS/INS, autonomy software and developer tools.
status: Product specification
content_type: product
keywords: [autonomous driving development kit, Jetson AGX Orin, LiDAR, drive-by-wire chassis, campus autonomy]
scope: Prototype development, test validation and project integration for low-speed autonomy in controlled or semi-controlled sites
decision_summary: Appropriate for teams that need a fast starting point for low-speed autonomous-driving development and validation; confirm configuration, chassis and operating boundary through a formal quotation.
best_for: [prototype development, low-speed campus transport, sensor/software integration, chassis integration, algorithm validation]
not_for: [functional-safety or production certification by itself, vehicles without a confirmed drive-by-wire interface, demonstrations without a site or acceptance metric]
next_action: Send the vehicle, application, CAN signals and acceptance target to receive a configuration recommendation and formal quotation.
cta_url: mailto:support@wheelos.cn?subject=WheelOS%20Integrated%20Autonomous%20Driving%20Kit%20inquiry
layout: doc
sidebar: false
aside: false
outline: [2, 3]
---

<div class="solution-hero">
  <a class="solution-language" href="/solutions/integrated-autonomous-driving-kit">中文版本</a>
  <p class="solution-eyebrow">Integrated Autonomous Driving Kit</p>
  <h1>A pre-integrated platform for autonomous vehicle development</h1>
  <p class="solution-lead">
    Start with compute, sensors, synchronized interfaces, an autonomous-driving software stack and developer tools that already work as one system. Spend your time on the vehicle, site and application.
  </p>
  <div class="solution-actions">
    <a class="primary" href="mailto:support@wheelos.cn?subject=WheelOS%20Integrated%20Autonomous%20Driving%20Kit%20inquiry">Request a project quote</a>
    <a href="/en/solutions/applications">Assess the application</a>
    <a href="#specifications">View technical specifications</a>
  </div>
  <div class="solution-stats">
    <div class="solution-stat"><strong>200 TOPS</strong><span>AI compute, INT8</span></div>
    <div class="solution-stat"><strong>4 + 1</strong><span>Surround cameras + 16-line LiDAR</span></div>
    <div class="solution-stat"><strong>PTP/gPTP</strong><span>Hardware-level time sync</span></div>
    <div class="solution-stat"><strong>From RMB 39,900</strong><span>Standard-kit reference price</span></div>
  </div>
</div>

<div class="solution-callout">
  <p><strong>Intended use:</strong> The kit supports prototype development, test validation and project integration in campuses, industrial parks, scenic areas, ports, mines and similar controlled or semi-controlled environments. It is not supplied as a functionally safe or homologated production vehicle system. Final suitability depends on the vehicle, site and project requirements.</p>
</div>

See [short-distance transport applications](/en/solutions/applications) for scenario selection, commercial models and deployment gates.

## Why start with a pre-integrated kit

<div class="solution-grid">
  <div class="solution-card">
    <span class="solution-card__index">01</span>
    <h3>Reduce integration work</h3>
    <p>Compute, sensors, cabling and software modules share a defined interface, reducing hardware selection, driver adaptation and data-path debugging.</p>
  </div>
  <div class="solution-card">
    <span class="solution-card__index">02</span>
    <h3>Keep the platform open</h3>
    <p>Use the C++/Python SDK, API documentation, examples and CAN control interface to connect your own algorithms or operations system.</p>
  </div>
  <div class="solution-card">
    <span class="solution-card__index">03</span>
    <h3>Investigate with evidence</h3>
    <p>Record and replay Cyber Record data, inspect system state in DreamView and calibrate sensors as part of a traceable workflow.</p>
  </div>
</div>

## System architecture

<div class="solution-flow" role="img" aria-label="System data flow from sensors and chassis through time synchronization and data interfaces, into localization, perception and planning, then to steering, drive and brake control">
  <div class="solution-flow__node"><strong>Sensors & chassis</strong><span>LiDAR · Camera · GNSS/INS</span></div>
  <span class="solution-flow__arrow" aria-hidden="true">→</span>
  <div class="solution-flow__node"><strong>Sync & interfaces</strong><span>PTP/gPTP · CAN FD · Ethernet</span></div>
  <span class="solution-flow__arrow" aria-hidden="true">→</span>
  <div class="solution-flow__node"><strong>Autonomy stack</strong><span>Localization · Perception · Planning</span></div>
  <span class="solution-flow__arrow" aria-hidden="true">→</span>
  <div class="solution-flow__node"><strong>Vehicle actuation</strong><span>Control · Steer · Drive · Brake</span></div>
</div>

The kit combines multi-sensor data from LiDAR, cameras and GNSS/INS on an autonomous-driving domain controller. A standard vehicle interface connects the software stack to a drive-by-wire chassis. The stack can be based on Apollo or the WheelOS framework.

## Specifications

### Autonomous driving domain controller

| Parameter | Specification |
| --- | --- |
| Compute module | NVIDIA Jetson AGX Orin 32G |
| AI performance | 200 TOPS INT8 |
| Memory | 32 GB LPDDR5, 204.8 GB/s |
| Storage | 512 GB NVMe 2280 SSD |
| Core interfaces | 2 × CAN with CAN FD support; 8 × GMSL2; 4 × Ethernet LiDAR ports |
| Additional interfaces | 1 × USB 3.0; 3 × UART (RS232/485 configurable); GPIO; 1 × HDMI 2.0 |
| Synchronization and reliability | Hardware PTP/gPTP master/slave; hardware watchdog; optional safety MCU |
| Power | 9–36 V DC wide input with reverse-polarity and overvoltage protection |
| Power and environment | Approx. 80 W typical; -20°C to +60°C operating temperature; IP65 |
| Cooling | Passive cooling plus intelligent fan assist |

### Standard sensor suite

| Sensor | Specification |
| --- | --- |
| Primary LiDAR | 16-line mechanical rotating scanner; 360° horizontal field of view; approx. 30° vertical field of view; ≥120 m at 10% reflectivity; 10 Hz; ±3 cm ranging accuracy; Ethernet; IP67 |
| Surround cameras | 4 × automotive-grade wide-angle cameras; ≥120° horizontal field of view; 1280 × 720; ≥30 fps; ≥100 dB HDR; GMSL2; IP67 |
| Camera options | Optional 190° fisheye lens and 1920 × 1080 resolution |
| GNSS/INS | RTK GNSS + industrial IMU; GPS/GLONASS/BeiDou/Galileo; ≥100 Hz update rate; UART/CAN/Ethernet |
| Connectivity configuration | 5G and Wi-Fi 6 router with 4 × gigabit Ethernet ports, subject to project confirmation |

## Software and tools

| Module | What is provided |
| --- | --- |
| Base software | Ubuntu 20.04 / 22.04 LTS with real-time tuning; Apollo Cyber RT middleware |
| Perception | LiDAR and camera early/late fusion for 3D detection and tracking of vehicles, pedestrians and two-wheelers |
| Localization | Fusion of RTK-GNSS, IMU and LiDAR SLAM for high-rate, high-accuracy vehicle pose |
| Planning and control | HD-map point-to-point routing, static-obstacle avoidance and speed planning; PID/LQR control framework and CAN chassis interface |
| Tooling | Online/offline sensor calibration, DreamView visualization, Cyber Record recording and replay, HMI examples |
| Developer interfaces | C++/Python SDK for message subscription, data recording and control commands, with API documentation and examples |
| Simulation interfaces (optional) | Integration interfaces for CARLA, SVL and similar platforms for SIL/HIL validation |

## Standard deliverables

| Category | Included |
| --- | --- |
| Hardware | 1 × autonomous-driving domain controller; 1 × 16-line LiDAR; 4 × surround cameras; 1 × GNSS/INS with antenna; standard cable set and required accessories |
| Software | Preinstalled Ubuntu, Cyber RT, baseline autonomous-driving stack and development/debugging tools |
| Documentation | Product specification, user manual, quick-start guide and API/SDK reference |
| Support | One month of remote technical support from purchase, covering installation, configuration and basic use |

## Chassis and integration requirements

The vehicle should provide an open, stable and responsive CAN control interface with at least:

- Steering angle or steering-rate control
- Throttle or drive-torque control
- Brake-pressure or deceleration control
- Gear state and required vehicle-status feedback
- Confirmed communication protocol, signal definitions, units and safety limits

Recommended integration sequence:

1. **Scope and interface review:** define the site, route, speed, vehicle constraints, acceptance criteria and chassis CAN capabilities.
2. **Bench and vehicle integration:** install sensors, verify time synchronization, calibrate intrinsics/extrinsics and connect the chassis interface.
3. **Data and algorithm validation:** record representative routes, replay data, run scenario tests and iterate parameters against measurable criteria.
4. **Controlled test and handover:** validate baseline functions at a controlled site, complete documentation, training and issue closure.

## Services and customization

| Service | Included | Scope |
| --- | --- | --- |
| Standard documentation and remote support | Yes | One month of remote technical support |
| On-site deployment and precision calibration | Optional | Hardware installation, sensor intrinsics/extrinsics, vehicle dynamics parameters, system integration and baseline demonstration |
| Customized training | Optional | System architecture, algorithms, secondary development, test operations |
| Custom feature development | Optional | Algorithm modules or feature extensions for a specific application |
| HD map service | Optional | Campus or site map acquisition, production and maintenance |
| Simulation testing service | Optional | Algorithm testing and validation on simulation platforms |

## Pricing and inquiry

The standard-kit reference price is **from RMB 39,900**. The final price depends on configuration, destination, taxes, freight, chassis adaptation and optional services, and is confirmed in a formal quotation.

<div class="solution-contact">
  <a href="mailto:support@wheelos.cn?subject=WheelOS%20Integrated%20Autonomous%20Driving%20Kit%20inquiry"><small>Project inquiries</small><strong>support@wheelos.cn</strong></a>
  <a href="tel:+8618320813902"><small>Phone</small><strong>+86 183 2081 3902</strong></a>
  <div><small>Headquarters</small><strong>Floor 11, Building A, Pingshan Chengtou Zhiyuan, No. 37 Cuijing Road, Pingshan District, Shenzhen, China</strong></div>
</div>

<div class="solution-cta">
  <div>
    <h2>Ready to scope your autonomous vehicle project?</h2>
    <p>Send the vehicle type, application, chassis interface and timeline. We will respond with a recommended configuration and the next integration questions.</p>
  </div>
  <div class="solution-actions">
    <a class="primary" href="mailto:support@wheelos.cn?subject=WheelOS%20Integrated%20Autonomous%20Driving%20Kit%20inquiry">Contact WheelOS</a>
  </div>
</div>

## Frequently asked questions

### Is a vehicle chassis included?

No. The kit includes the domain controller, sensors, software and support. The vehicle project supplies a compatible drive-by-wire chassis and CAN interface.

### Can the kit be integrated with our existing vehicle?

We first review the chassis protocol, control signals, response behavior, installation space and vehicle safety limits. For an efficient quotation, share the CAN DBC, vehicle dimensions, sensor-placement constraints and target operating scenario.

### Can it be used in a production vehicle program?

The kit is intended for prototype development, test validation and controlled-site integration. A production program requires separate functional-safety, regulatory, reliability and supply-chain qualification.

### Do you work with international customers?

Yes. English product documentation and international project inquiries are supported. Delivery scope, language support, on-site service and applicable regulations are confirmed during project evaluation.
