---
title: Apollo Lite resources
description: Apollo Lite models, perception, planning, control, calibration, engineering tools and WheelOS data/map service entry points.
status: Repository fact
content_type: resources
keywords: [Apollo Lite, perception models, planning and control, calibration, engineering tools]
---

# Apollo Lite resources

This page organizes the models, algorithms, tools, datasets and map services used for development, integration, calibration and validation around [Apollo Lite](https://github.com/wheelos/apollo-lite). Resources link primarily to source, configuration and documentation. Services that are not public are marked as pending rather than presented as downloadable assets.

`Implemented` means that source or configuration exists. It does not mean that the capability has completed production validation for every vehicle or operating environment.

## Find resources by task

| Task | Entry point |
| --- | --- |
| Prepare perception models and inference configuration | [Models and inference](#models-and-inference) |
| Enable ground, lane or obstacle perception | [Perception packages](#perception-packages) |
| Develop precision parking and mapless planning | [Planning and parking](#planning-and-parking) |
| Calibrate vehicle dynamics and longitudinal/lateral control | [Calibration and control](#calibration-and-control) |
| Record, replay, visualize and debug | [Engineering tools](#engineering-tools) |
| Obtain vehicle data or generate maps | [WheelOS data services](#wheelos-data-services) · [WheelOS map services](#wheelos-map-services) |

## Models and inference

Download the associated `conf`, sensor parameters and model version with each model. Replacing a weight file alone is not a valid deployment procedure.

| Resource | Apollo Lite use | Contents | Entry |
| --- | --- | --- | --- |
| Camera obstacle models | Camera obstacle detection | YOLO, YOLOv4, SMOKE detectors and postprocessing | [Camera perception](https://github.com/wheelos/apollo-lite/tree/main/modules/perception/camera) · [Model configuration](https://github.com/wheelos/apollo-lite/tree/main/modules/perception/production/data/perception/camera/models) |
| Camera lane models | Lane detection and calibration | Lane, DarkSCNN and Denseline postprocessing | [Lane module](https://github.com/wheelos/apollo-lite/tree/main/modules/lane) · [Lane model](https://github.com/wheelos/apollo-lite/tree/main/modules/perception/production/data/perception/camera/models/lane_detector) |
| Traffic-light models | Detection and recognition | Detection, recognition and production configuration | [Detection configuration](https://github.com/wheelos/apollo-lite/tree/main/modules/perception/production/data/perception/camera/models/traffic_light_detection) · [Recognition configuration](https://github.com/wheelos/apollo-lite/tree/main/modules/perception/production/data/perception/camera/models/traffic_light_recognition) |
| LiDAR obstacle models | Point-cloud detection and segmentation | CNNSEG, NCUT, center-based and spatio-temporal ground detection | [LiDAR perception](https://github.com/wheelos/apollo-lite/tree/main/modules/perception/lidar) · [LiDAR model configuration](https://github.com/wheelos/apollo-lite/tree/main/modules/perception/production/data/perception/lidar/models) |
| Camera semantic segmentation | Semantic segmentation inference | SegFormer ONNX/TensorRT export and build tools | [camera_semantic_segmentation](https://github.com/wheelos/apollo-lite/tree/main/modules/camera_semantic_segmentation) |

Recommended model metadata: sensor and intrinsics, class definitions, input dimensions, inference backend, TensorRT/CUDA version, memory use, latency, checksum, training/evaluation scope and known failure cases.

## Perception packages

| Capability | Scope | Apollo Lite entry |
| --- | --- | --- |
| Ground detection | LiDAR ground service, ground detector, spatio-temporal ground detection and segmentation | [ground_detector](https://github.com/wheelos/apollo-lite/tree/main/modules/perception/lidar/lib/ground_detector) · [ground service](https://github.com/wheelos/apollo-lite/tree/main/modules/perception/lidar/lib/scene_manager/ground_service) |
| Obstacle detection | Camera, LiDAR, BEV and offline obstacle detection | [Camera obstacle](https://github.com/wheelos/apollo-lite/tree/main/modules/perception/camera/lib/obstacle) · [LiDAR detector](https://github.com/wheelos/apollo-lite/tree/main/modules/perception/lidar/lib/detector) |
| Tracking and fusion | OMT/OMT2, multi-LiDAR and probabilistic fusion | [Tracking](https://github.com/wheelos/apollo-lite/tree/main/modules/perception/camera/lib/obstacle/tracker) · [Fusion](https://github.com/wheelos/apollo-lite/tree/main/modules/perception/fusion) |
| Lane perception | UFLDv2, DarkSCNN, Denseline and lane calibration | [Lane](https://github.com/wheelos/apollo-lite/tree/main/modules/lane) · [Lane perception](https://github.com/wheelos/apollo-lite/tree/main/modules/perception/camera/lib/lane) |
| Traffic-light perception | Detection, recognition, preprocessing and visualization | [Traffic light](https://github.com/wheelos/apollo-lite/tree/main/modules/perception/camera/lib/traffic_light) |
| Localization | NDT, MSF, RTK and localization health monitoring | [Localization](https://github.com/wheelos/apollo-lite/tree/main/modules/localization) · [Localization health](https://github.com/wheelos/apollo-lite/tree/main/modules/localization_health) |

## Planning and parking

| Capability | Scope | Apollo Lite entry |
| --- | --- | --- |
| Precision parking | Open-space planning, multi-gear parking search, curvature-constrained smoothing and collision checks | [Open-space planning](https://github.com/wheelos/apollo-lite/tree/main/modules/open_space_planning) · [Parking planning](https://github.com/wheelos/apollo-lite/tree/main/modules/planning/open_space/parking) |
| Mapless/open-space planning | Skeleton Corridor, Hybrid A*, trajectory planning, validation and safe degradation | [Open-space planning README](https://github.com/wheelos/apollo-lite/blob/main/modules/open_space_planning/README.md) |
| Reference-line planning | Lane following, traffic rules, scenario and mission planning | [Planning](https://github.com/wheelos/apollo-lite/tree/main/modules/planning) |
| Routing and relative map | Route topology, relative maps and navigation modes | [Routing](https://github.com/wheelos/apollo-lite/tree/main/modules/routing) · [Relative map](https://github.com/wheelos/apollo-lite/tree/main/modules/world_model/relative_map) |

## Calibration and control

| Capability | Scope | Apollo Lite entry |
| --- | --- | --- |
| Vehicle dynamics calibration | Actuator calibration, lateral dynamics tests, plan generation, CyberRT recording and offline analysis | [whl-dyn](https://github.com/wheelos/apollo-lite/tree/main/whl-dyn) · [Tool guide](https://github.com/wheelos/apollo-lite/blob/main/wheelos-service/context/modules/tools/whl-dyn-open-loop-calibration-tool.md) |
| Longitudinal and lateral control | MPC, longitudinal control, lateral control, calibration tables and replay | [Control](https://github.com/wheelos/apollo-lite/tree/main/modules/control) · [Control configuration](https://github.com/wheelos/apollo-lite/tree/main/modules/control/conf) |
| Sensor calibration | Camera, LiDAR, lane and coordinate-transform calibration | [Calibration](https://github.com/wheelos/apollo-lite/tree/main/modules/calibration) · [sensor_calibration.sh](https://github.com/wheelos/apollo-lite/blob/main/scripts/sensor_calibration.sh) |

## Engineering tools

| Tool | Purpose | Entry |
| --- | --- | --- |
| `whl-dyn` | Dynamics calibration, test plans, data collection, offline metrics and Streamlit workbench | [whl-dyn README](https://github.com/wheelos/apollo-lite/tree/main/whl-dyn) |
| `whl-debug` | Controller debugging, online/offline data extraction and issue diagnosis | [whl-debug](https://github.com/wheelos/apollo-lite/tree/main/modules/tools/whl-debug) |
| `whl-tools` | Camera segmentation, image publishing and lane-debug visualization | [whl-tools](https://github.com/wheelos/apollo-lite/tree/main/modules/tools/whl-tools) |
| `whl_toolbox` | Point-cloud, SLAM, sensor and runtime-data visualization | [whl_toolbox](https://github.com/wheelos/apollo-lite/tree/main/modules/tools/whl_toolbox) |
| `whl-can` | CAN automation, static/dynamic cases and vehicle-interface validation | [whl-can](https://github.com/wheelos/apollo-lite/tree/main/modules/tools/whl-can) |
| `whl-mock` | Mock publishing for routing, traffic-light and other inputs | [whl-mock](https://github.com/wheelos/apollo-lite/tree/main/modules/tools/whl-mock) |
| Map tools | Map generation from Mobileye, XY and other sources; route topology generation | [Map tools](https://github.com/wheelos/apollo-lite/tree/main/modules/map/tools) · [Scripts](https://github.com/wheelos/apollo-lite/tree/main/scripts) |
| Recording and replay | CyberRT recording, message recording, map-data collection and replay | [recording_launcher.py](https://github.com/wheelos/apollo-lite/blob/main/scripts/recording_launcher.py) · [record_map_data.py](https://github.com/wheelos/apollo-lite/blob/main/scripts/record_map_data.py) |

## WheelOS data services

Vehicle data should not be scattered as raw files in the Git repository. The following service catalog is a planned product boundary; entries marked pending are not current public download links.

| Service | Intended users | Proposed capability | Current state |
| --- | --- | --- | --- |
| Dataset catalog | Algorithm, calibration and test engineers | Search by vehicle, sensor, scenario and version; return dataset ID, time range, topics, format, size and permissions | Entry point pending |
| Raw recording service | Data and test engineers | CyberRT/MCAP upload, ranged download, resume, checksums and lifecycle management | Entry point pending |
| Annotation and sample service | Perception engineers | Sample selection, annotation versions, Lite export formats and train/validation freezing | Entry point pending |
| Replay and evaluation | Validation engineers | Select records, bind code/config, run offline replay and output metrics | Entry point pending |
| Model artifact service | Model and deployment engineers | Models, inference configuration, TensorRT engines, checksums and hardware/driver compatibility | Entry point pending |

APIs should expose `resource_id`, `version`, `source_commit`, `format`, `checksum`, `license`, `access`, `created_at` and `expires_at` so that downloads, replay and evidence records remain traceable.

## WheelOS map services

Map services should provide versioned maps for localization, routing, perception ROI, open-space planning and precision parking rather than a single static archive.

| Service | Capability | Proposed content | Current state |
| --- | --- | --- | --- |
| Map catalog | Discovery and version selection | Area, coordinate frame, coverage, version, update time, compatible vehicles and change history | Entry point pending |
| HD map download | Localization, routing and reference-line planning | `base_map`, `routing_map`, `sim_map`, topology and generation metadata | Entry point pending |
| Parking-map service | Precision parking and open-space planning | Parking slots, lane boundaries, forbidden areas, target poses, ROI and scenario configuration | Entry point pending |
| Map validation and conversion | Pre-release validation | Format conversion, frame checks, topology checks, planning usability and diff reports | Entry point pending |

A map record should include coordinate frame, origin, projection, vehicle constraints, generator version, input-data date, coverage boundary, checksum and rollback version. Map versions must be linked to replay records, planning configuration and vehicle calibration.

## Resource-catalog rules

1. Build the catalog from actual capabilities in `modules/`, `whl-dyn/`, `scripts/` and `wheelos-service/`.
2. Separate models from runnable algorithm packages and tools.
3. Publish code through Git releases and data/maps through permissioned, versioned WheelOS services.
4. Organize entry points by task before module name.
5. Bind every download to an Apollo Lite commit, configuration, model, map, vehicle calibration and evaluation result.
