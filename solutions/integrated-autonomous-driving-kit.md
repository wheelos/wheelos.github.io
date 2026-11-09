---
title: 一体化自动驾驶开发套件
description: 面向园区低速自动驾驶的预集成软硬件开发套件，包含 Jetson AGX Orin 域控制器、16 线激光雷达、4 路相机、组合导航、软件栈与开发工具。
status: 产品规格
content_type: product
keywords: [自动驾驶开发套件, Jetson AGX Orin, 激光雷达, 线控底盘, 园区自动驾驶]
scope: 封闭或半封闭园区的低速自动驾驶原型开发、测试验证和项目集成
decision_summary: 适合希望快速建立低速自动驾驶开发与验证平台的团队；应先用正式报价确认配置、底盘和场景边界。
best_for: [原型开发, 园区低速运输, 传感器与软件联调, 车辆底盘集成, 算法验证]
not_for: [直接作为功能安全或量产认证, 未确认线控底盘的车辆, 没有场地和验收指标的展示项目]
next_action: 提交车辆、场景、CAN 信号和验收目标，获取配置建议与正式报价。
cta_url: mailto:support@wheelos.cn?subject=WheelOS%20Integrated%20Autonomous%20Driving%20Kit%20inquiry
layout: doc
sidebar: false
aside: false
outline: [2, 3]
---

<div class="solution-hero">
  <a class="solution-language" href="/en/solutions/integrated-autonomous-driving-kit">English version</a>
  <p class="solution-eyebrow">Integrated Autonomous Driving Kit</p>
  <h1>一套预集成、可开发、可验证的自动驾驶基础平台</h1>
  <p class="solution-lead">
    将计算平台、传感器、时间同步、自动驾驶软件栈和开发工具预先组合，帮助团队把精力放在场景应用、车辆集成和算法优化上。
  </p>
  <div class="solution-actions">
    <a class="primary" href="mailto:support@wheelos.cn?subject=WheelOS%20Integrated%20Autonomous%20Driving%20Kit%20inquiry">获取项目报价</a>
    <a href="/solutions/applications">评估应用场景</a>
    <a href="#规格概览">查看技术规格</a>
  </div>
  <div class="solution-stats">
    <div class="solution-stat"><strong>200 TOPS</strong><span>AI 算力，INT8</span></div>
    <div class="solution-stat"><strong>4 + 1</strong><span>环视相机 + 16 线激光雷达</span></div>
    <div class="solution-stat"><strong>PTP/gPTP</strong><span>硬件级时间同步</span></div>
    <div class="solution-stat"><strong>RMB 39,900 起</strong><span>标准套件参考价</span></div>
  </div>
</div>

<div class="solution-callout">
  <p><strong>适用边界：</strong>本套件用于园区、厂区、景区、校园、港口、矿山等封闭或半封闭环境中的原型开发、测试验证和项目集成，不等同于已通过功能安全认证或量产准入。最终适用性需结合车辆、场地和项目要求评估。</p>
</div>

场景选型、商业模式和部署准入条件见[短途运输应用场景](/solutions/applications)。

## 为什么选择预集成套件

<div class="solution-grid">
  <div class="solution-card">
    <span class="solution-card__index">01</span>
    <h3>缩短集成路径</h3>
    <p>计算、传感器、线束和软件模块按统一接口组织，减少硬件选型、驱动适配和数据链路联调工作。</p>
  </div>
  <div class="solution-card">
    <span class="solution-card__index">02</span>
    <h3>保持开发开放</h3>
    <p>提供 C++/Python SDK、API 文档、示例代码和 CAN 控制接口，便于接入自有算法或业务系统。</p>
  </div>
  <div class="solution-card">
    <span class="solution-card__index">03</span>
    <h3>便于复现与排查</h3>
    <p>支持 Cyber Record 数据记录与回放、DreamView 可视化和传感器标定工具，形成可追溯的开发流程。</p>
  </div>
</div>

## 系统组成

<div class="solution-flow" role="img" aria-label="系统数据流：传感器与底盘进入时间同步和数据接口，再进入定位、感知、规划与控制，最终输出到底盘执行">
  <div class="solution-flow__node"><strong>传感器与底盘</strong><span>LiDAR · Camera · GNSS/INS</span></div>
  <span class="solution-flow__arrow" aria-hidden="true">→</span>
  <div class="solution-flow__node"><strong>时间同步与接口</strong><span>PTP/gPTP · CAN FD · Ethernet</span></div>
  <span class="solution-flow__arrow" aria-hidden="true">→</span>
  <div class="solution-flow__node"><strong>自动驾驶软件栈</strong><span>Localization · Perception · Planning</span></div>
  <span class="solution-flow__arrow" aria-hidden="true">→</span>
  <div class="solution-flow__node"><strong>车辆执行</strong><span>Control · Steer · Drive · Brake</span></div>
</div>

套件以高性能自动驾驶域控制器为核心，融合 LiDAR、相机和组合导航等多源数据，通过标准接口与车辆线控底盘交互。软件栈可基于 Apollo，也可采用自有 WheelOS 框架。

## 规格概览

### 自动驾驶域控制器

| 参数 | 规格 |
| --- | --- |
| 计算核心 | NVIDIA Jetson AGX Orin 32G |
| AI 算力 | 200 TOPS INT8 |
| 内存 | 32 GB LPDDR5，204.8 GB/s |
| 存储 | 512 GB NVMe 2280 SSD |
| 核心接口 | 2 × CAN（支持 CAN FD）；8 × GMSL2；4 × 以太网 LiDAR 接口 |
| 辅助接口 | 1 × USB 3.0；3 × UART（RS232/485 可配置）；GPIO；1 × HDMI 2.0 |
| 同步与可靠性 | 硬件级 PTP/gPTP Master/Slave；硬件看门狗；可选安全 MCU |
| 供电 | 9–36 V DC 宽压输入，带反接和过压保护 |
| 功耗与环境 | 典型功耗约 80 W；工作温度 -20°C 至 +60°C；IP65 |
| 散热 | 被动散热 + 智能风扇辅助 |

### 标准传感器

| 传感器 | 规格 |
| --- | --- |
| 主激光雷达 | 16 线机械旋转式；360° 水平视场；约 30° 垂直视场；≥120 m@10% 反射率；10 Hz；测距精度 ±3 cm；以太网；IP67 |
| 环视相机 | 4 × 车规级广角相机；水平视场 ≥120°；1280 × 720；≥30 fps；≥100 dB HDR；GMSL2；IP67 |
| 相机选项 | 可选 190° 鱼眼镜头和 1920 × 1080 分辨率 |
| 组合导航 | RTK GNSS + 工业级 IMU；支持 GPS/GLONASS/BeiDou/Galileo；更新率 ≥100 Hz；UART/CAN/以太网 |
| 连接配置 | 5G 与 Wi-Fi 6 路由器、4 个千兆网口，可根据项目确认 |

## 软件与开发工具

| 模块 | 提供内容 |
| --- | --- |
| 基础软件 | Ubuntu 20.04 / 22.04 LTS（经实时性优化）、Apollo Cyber RT 中间件 |
| 感知 | LiDAR 与 Camera 前融合/后融合 3D 目标检测与跟踪，覆盖车辆、行人、二轮车 |
| 定位 | 融合 RTK-GNSS、IMU 和 LiDAR SLAM，输出高精度、高频率车辆位姿 |
| 规划与控制 | 高精地图点到点路径规划、静态障碍物避障、速度规划；PID/LQR 控制框架与 CAN 底盘接口 |
| 工具链 | 传感器在线/离线标定、DreamView 可视化、Cyber Record 记录与回放、HMI 示例 |
| 开发接口 | C++/Python SDK，包含消息订阅、数据录制、控制下发接口、API 文档和示例代码 |
| 仿真接口（可选） | 面向 CARLA、SVL 等平台的集成接口，支持 SIL/HIL 测试验证 |

## 标准交付清单

| 类别 | 内容 |
| --- | --- |
| 硬件 | 1 × 自动驾驶域控制器；1 × 16 线激光雷达；4 × 环视相机；1 × 组合导航（含天线）；标准线缆与必要附件 |
| 软件 | 预装 Ubuntu、Cyber RT、基础版自动驾驶软件栈、开发与调试工具 |
| 文档 | 产品规格书、用户手册、快速入门指南、API/SDK 参考文档 |
| 支持 | 自购买之日起 1 个月免费远程技术支持，覆盖安装、配置和基本使用问题 |

## 底盘与集成要求

车辆应具备开放、稳定、响应及时的 CAN 总线控制接口，至少包括：

- 转向角度或角速度控制
- 油门或驱动力矩控制
- 制动压力或减速度控制
- 档位状态与必要的车辆状态反馈
- 可确认的通信协议、信号定义、单位和安全限制

推荐集成流程：

1. **需求与接口确认：**明确场景、路线、速度、车辆约束、验收指标和底盘 CAN 能力。
2. **台架与车辆集成：**完成传感器安装、时间同步、内外参标定和底盘接口联调。
3. **数据与算法验证：**采集典型路线数据，通过回放、场景测试和指标分析迭代参数。
4. **现场测试与交接：**在受控场地验证基础功能，完成文档、培训和问题闭环。

## 服务与定制

| 服务 | 是否包含 | 说明 |
| --- | --- | --- |
| 标准文档与远程支持 | 包含 | 1 个月免费远程技术支持 |
| 现场部署与精标定 | 可选 | 硬件安装、传感器内外参、车辆动力学参数、系统联调和基础功能演示 |
| 定制化培训 | 可选 | 系统架构、算法原理、二次开发、测试运维 |
| 功能定制开发 | 可选 | 针对场景需求开发算法模块或扩展功能 |
| 高精度地图服务 | 可选 | 园区地图采集、生产与维护 |
| 仿真测试服务 | 可选 | 基于仿真平台的算法测试与验证 |

## 价格与询价

标准套件参考价格为 **人民币 39,900 元起**。最终价格取决于配置、交付地点、税费、运费、底盘适配和可选服务，以正式报价为准。

<div class="solution-contact">
  <a href="mailto:support@wheelos.cn?subject=WheelOS%20Integrated%20Autonomous%20Driving%20Kit%20inquiry"><small>项目咨询</small><strong>support@wheelos.cn</strong></a>
  <a href="tel:+8618320813902"><small>联系电话</small><strong>+86 183 2081 3902</strong></a>
  <div><small>公司地址</small><strong>深圳市坪山区龙田街道竹坑社区翠景路 37 号坪山城投智园 A 栋 11 楼</strong></div>
</div>

<div class="solution-cta">
  <div>
    <h2>准备评估这套自动驾驶平台？</h2>
    <p>发送车辆类型、应用场景、底盘接口和项目时间表，我们会回复建议配置和下一步集成问题。</p>
  </div>
  <div class="solution-actions">
    <a class="primary" href="mailto:support@wheelos.cn?subject=WheelOS%20Integrated%20Autonomous%20Driving%20Kit%20inquiry">联系 WheelOS</a>
  </div>
</div>

## 常见问题

### 套件是否包含车辆底盘？

不包含。套件提供域控制器、传感器、软件和服务，车辆需具备符合要求的线控底盘与 CAN 控制接口。

### 能否适配我们现有的车辆？

需要先核对底盘通信协议、控制信号、响应特性、安装空间和车辆安全限制。建议在报价前提供 CAN DBC、车辆尺寸、传感器布置约束和目标场景。

### 是否可以用于量产项目？

本套件定位于原型开发、测试验证和受控场景集成。量产项目需另行完成功能安全、法规准入、可靠性和供应链要求评估。

### 支持哪些语言和地区？

本站提供中文和英文产品资料，可接受海外项目询价。交付范围、语言支持、现场服务和适用法规会在项目评估时确认。
