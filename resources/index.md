# Apollo Lite 资源下载

这里面向 [Apollo Lite](https://github.com/wheelos/apollo-lite) 的开发、集成、标定与验证，整理 Lite 工程中实际支持的模型、功能算法、工具包，以及 WheelOS 自有的数据和地图服务。

资源条目优先链接到 Apollo Lite 的代码、配置和文档；服务类资源预留 WheelOS 服务入口，不把尚未公开的地址伪装成可下载链接。页面中的“已实现”表示代码或配置存在，不等同于在所有车型和道路环境中完成量产验证。

## 按开发任务查找

| 任务 | 资源入口 |
| --- | --- |
| 准备感知模型和推理配置 | [模型](#模型与推理资源) |
| 开启地面检测、车道线或障碍物感知 | [感知算法包](#感知算法包) |
| 开发精准停车和无地图规划 | [规划与停车算法包](#规划与停车算法包) |
| 做车辆动力学、横纵向控制标定 | [标定与控制算法包](#标定与控制算法包) |
| 采集、回放、可视化和排查问题 | [工程工具](#工程工具) |
| 获取车辆数据或生成地图 | [WheelOS 数据服务](#wheelos-数据服务) · [WheelOS 地图服务](#wheelos-地图服务) |

## 模型与推理资源

以下条目对应 Lite 中的模型文件、模型配置或推理适配代码。下载模型时应同时获取对应的 `conf`、传感器参数和模型版本，不能只替换一个权重文件。

| 资源 | Lite 中的用途 | 主要内容 | 入口 |
| --- | --- | --- | --- |
| 相机障碍物模型 | 相机障碍物检测 | YOLO、YOLOv4、SMOKE 检测器及后处理 | [perception/camera](https://github.com/wheelos/apollo-lite/tree/main/modules/perception/camera) · [模型配置](https://github.com/wheelos/apollo-lite/tree/main/modules/perception/production/data/perception/camera/models) |
| 相机车道线模型 | 车道线检测和车道线标定 | Lane、DarkSCNN、Denseline 后处理 | [lane 模块](https://github.com/wheelos/apollo-lite/tree/main/modules/lane) · [相机模型](https://github.com/wheelos/apollo-lite/tree/main/modules/perception/production/data/perception/camera/models/lane_detector) |
| 交通灯模型 | 交通灯检测与识别 | 检测、识别模型及生产配置 | [交通灯配置](https://github.com/wheelos/apollo-lite/tree/main/modules/perception/production/data/perception/camera/models/traffic_light_detection) · [识别配置](https://github.com/wheelos/apollo-lite/tree/main/modules/perception/production/data/perception/camera/models/traffic_light_recognition) |
| LiDAR 障碍物模型 | 点云障碍物检测和分割 | CNNSEG、NCUT、中心点和时空地面检测相关配置 | [LiDAR 感知](https://github.com/wheelos/apollo-lite/tree/main/modules/perception/lidar) · [LiDAR 模型配置](https://github.com/wheelos/apollo-lite/tree/main/modules/perception/production/data/perception/lidar/models) |
| 相机语义分割模型 | 相机语义分割推理 | SegFormer 的 ONNX/TensorRT 导出和构建工具 | [camera_semantic_segmentation](https://github.com/wheelos/apollo-lite/tree/main/modules/camera_semantic_segmentation) |

**模型条目建议字段：**传感器和内参、类别定义、输入尺寸、推理后端、TensorRT/CUDA 版本、显存、单帧时延、模型校验和、训练/评测范围和已知失效场景。

## 感知算法包

这些是按 Lite 功能组织的算法包，不是泛化的开源算法推荐。

| 功能包 | 能力范围 | Lite 代码入口 |
| --- | --- | --- |
| 地面检测 | LiDAR 地面服务、地面服务检测器、时空地面检测和地面分割 | [ground_detector](https://github.com/wheelos/apollo-lite/tree/main/modules/perception/lidar/lib/ground_detector) · [ground service](https://github.com/wheelos/apollo-lite/tree/main/modules/perception/lidar/lib/scene_manager/ground_service) |
| 障碍物检测 | 相机、LiDAR、BEV 障碍物检测和离线检测 | [camera obstacle](https://github.com/wheelos/apollo-lite/tree/main/modules/perception/camera/lib/obstacle) · [LiDAR detector](https://github.com/wheelos/apollo-lite/tree/main/modules/perception/lidar/lib/detector) |
| 障碍物跟踪与融合 | OMT/OMT2、多 LiDAR 融合、概率融合 | [tracking](https://github.com/wheelos/apollo-lite/tree/main/modules/perception/camera/lib/obstacle/tracker) · [fusion](https://github.com/wheelos/apollo-lite/tree/main/modules/perception/fusion) |
| 车道线感知 | UFLDv2、DarkSCNN、Denseline 及车道线标定 | [lane](https://github.com/wheelos/apollo-lite/tree/main/modules/lane) · [lane perception](https://github.com/wheelos/apollo-lite/tree/main/modules/perception/camera/lib/lane) |
| 交通灯感知 | 交通灯检测、识别、预处理和可视化 | [traffic light](https://github.com/wheelos/apollo-lite/tree/main/modules/perception/camera/lib/traffic_light) |
| 定位 | NDT、MSF、RTK 及定位健康监控 | [localization](https://github.com/wheelos/apollo-lite/tree/main/modules/localization) · [localization health](https://github.com/wheelos/apollo-lite/tree/main/modules/localization_health) |

## 规划与停车算法包

| 功能包 | 能力范围 | Lite 代码入口 |
| --- | --- | --- |
| 精准停车 | 开放空间规划、泊车多挡位搜索、曲率约束轨迹平滑和碰撞安全检查 | [open_space_planning](https://github.com/wheelos/apollo-lite/tree/main/modules/open_space_planning) · [停车规划](https://github.com/wheelos/apollo-lite/tree/main/modules/planning/open_space/parking) |
| 无地图/开放空间规划 | Skeleton Corridor、Hybrid A*、轨迹规划、轨迹验证和安全降级 | [开放空间规划说明](https://github.com/wheelos/apollo-lite/blob/main/modules/open_space_planning/README.md) |
| 参考线规划 | 车道跟随、交通规则、场景和任务规划 | [planning](https://github.com/wheelos/apollo-lite/tree/main/modules/planning) |
| 路由与相对地图 | 路由拓扑、相对地图和导航模式 | [routing](https://github.com/wheelos/apollo-lite/tree/main/modules/routing) · [relative map](https://github.com/wheelos/apollo-lite/tree/main/modules/world_model/relative_map) |

## 标定与控制算法包

| 功能包 | 能力范围 | Lite 代码/工具入口 |
| --- | --- | --- |
| 动力学标定 | 执行器标定、横向车辆动力学测试、计划生成、CyberRT 采集、离线分析 | [whl-dyn](https://github.com/wheelos/apollo-lite/tree/main/whl-dyn) · [工具说明](https://github.com/wheelos/apollo-lite/blob/main/wheelos-service/context/modules/tools/whl-dyn-open-loop-calibration-tool.md) |
| 横纵向控制 | MPC、纵向控制、横向控制、控制标定表和控制回放 | [control](https://github.com/wheelos/apollo-lite/tree/main/modules/control) · [控制配置](https://github.com/wheelos/apollo-lite/tree/main/modules/control/conf) |
| 传感器标定 | 相机、LiDAR、车道线和坐标变换相关标定 | [标定模块](https://github.com/wheelos/apollo-lite/tree/main/modules/calibration) · [sensor_calibration.sh](https://github.com/wheelos/apollo-lite/blob/main/scripts/sensor_calibration.sh) |

## 工程工具

| 工具 | 用途 | 入口 |
| --- | --- | --- |
| `whl-dyn` | 动力学标定、测试计划、数据采集、离线指标和 Streamlit 工作台 | [whl-dyn README](https://github.com/wheelos/apollo-lite/tree/main/whl-dyn) |
| `whl-debug` | 控制器调试、线上/离线数据提取和问题定位 | [whl-debug](https://github.com/wheelos/apollo-lite/tree/main/modules/tools/whl-debug) |
| `whl-tools` | 相机语义分割、图像消息发布、车道线调试可视化 | [whl-tools](https://github.com/wheelos/apollo-lite/tree/main/modules/tools/whl-tools) |
| `whl_toolbox` | 点云、SLAM、传感器和运行时数据的可视化工具箱 | [whl_toolbox](https://github.com/wheelos/apollo-lite/tree/main/modules/tools/whl_toolbox) |
| `whl-can` | CAN 自动测试、静态/动态用例和车辆接口验证 | [whl-can](https://github.com/wheelos/apollo-lite/tree/main/modules/tools/whl-can) |
| `whl-mock` | 路由、交通灯等输入消息的模拟发布 | [whl-mock](https://github.com/wheelos/apollo-lite/tree/main/modules/tools/whl-mock) |
| 地图工具 | 从 Mobileye、XY 等来源生成地图，以及路由拓扑图生成 | [map/tools](https://github.com/wheelos/apollo-lite/tree/main/modules/map/tools) · [脚本](https://github.com/wheelos/apollo-lite/tree/main/scripts) |
| 录制与回放 | CyberRT 录制、消息记录、地图数据采集和回放启动 | [recording_launcher.py](https://github.com/wheelos/apollo-lite/blob/main/scripts/recording_launcher.py) · [record_map_data.py](https://github.com/wheelos/apollo-lite/blob/main/scripts/record_map_data.py) |

## WheelOS 数据服务

数据服务应作为 WheelOS 的自有产品提供，不把原始车辆数据直接散落在 Git 仓库中。建议从以下服务入口开始建设：

| 服务 | 面向对象 | 建议提供的能力 | 当前状态 |
| --- | --- | --- | --- |
| 数据集目录服务 | 算法、标定、测试开发 | 按车型/传感器/场景/版本检索，返回数据集 ID、时间范围、话题、格式、大小和权限 | 服务入口待接入 |
| 原始记录服务 | 数据和测试工程师 | CyberRT/MCAP 记录上传、分片下载、断点续传、校验和和生命周期管理 | 服务入口待接入 |
| 标注与样本服务 | 感知算法开发 | 样本筛选、标注版本、导出 Lite 所需格式、训练/验证集冻结 | 服务入口待接入 |
| 回放与评测服务 | 算法验证 | 选择记录、绑定代码提交和配置，运行离线回放并输出指标 | 服务入口待接入 |
| 模型制品服务 | 模型和部署工程师 | 模型、推理配置、TensorRT engine、校验和、硬件/驱动兼容关系 | 服务入口待接入 |

建议 API 返回统一的 `resource_id`、`version`、`source_commit`、`format`、`checksum`、`license`、`access`、`created_at` 和 `expires_at`，让下载、回放和证据记录可以互相追溯。

## WheelOS 地图服务

地图服务应围绕 Lite 的定位、路由、感知 ROI、开放空间规划和精准停车提供版本化地图，而不是只提供一个静态压缩包。

| 服务 | 面向能力 | 建议提供的内容 | 当前状态 |
| --- | --- | --- | --- |
| 地图目录服务 | 地图发现和版本选择 | 区域、坐标系、覆盖范围、版本、更新时间、适配车型和变更记录 | 服务入口待接入 |
| HD Map 下载服务 | 定位、路由和参考线规划 | `base_map`、`routing_map`、`sim_map`、拓扑图和生成元数据 | 服务入口待接入 |
| 停车场地图服务 | 精准停车和开放空间规划 | 停车位、车道边界、禁行区、目标位姿、ROI 和场景配置 | 服务入口待接入 |
| 地图检查与转换服务 | 地图上线前验证 | 格式转换、坐标系检查、拓扑检查、规划可用性和差异报告 | 服务入口待接入 |

地图条目至少应携带坐标系、原点、投影、车辆约束、生成工具版本、输入数据日期、覆盖边界、校验和和回滚版本。地图版本必须与回放记录、规划配置和车辆标定关联。

## 资源目录建设建议

1. **以 Lite 能力为准建目录：**资源只从 `modules/`、`whl-dyn/`、`scripts/` 和 `wheelos-service/` 的实际能力抽取，不再维护无关的通用数据集推荐。
2. **把“模型”和“算法包”分开：**模型是权重、推理配置和部署制品；算法包是可运行的感知、定位、规划、控制或停车功能。
3. **服务与代码分开发布：**代码通过 Git 仓库和版本发布，数据/地图通过 WheelOS 服务按权限和版本下载。
4. **以任务组织入口：**用户优先按“地面检测、精准停车、动力学标定、回放验证”等任务找到资源，再进入模块目录。
5. **保留可复现关系：**每次下载都绑定 Apollo Lite commit、配置版本、模型版本、地图版本、车辆标定和评测结果。

这套结构仍然延续 [Horizon 开发者文档](https://developer.horizon.auto/docs/) 的平台化思路，但将资源边界收敛到 Apollo Lite 的“模型—算法—工具—数据服务—地图服务”闭环。
