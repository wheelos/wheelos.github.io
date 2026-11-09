---
title: 自动驾驶系统地图
description: 从传感器和底盘接口，经时间同步、感知、规划与控制，到验证的分层诊断地图。
content_type: guide
status: 设计建议
keywords: [系统架构, 时间同步, 坐标系, 规划, 控制]
---

# 自动驾驶系统地图

```text
传感器/底盘
    -> 驱动与消息接口
    -> 时间同步与坐标变换
    -> 定位 / 感知 / 预测
    -> 规划
    -> 控制
    -> 底盘执行与反馈

贯穿全链路：配置管理、可视化、日志回放、仿真、标定、监控与安全
```

排查问题时，先确认数据在哪一层首次偏离预期。不要直接从规划或控制参数入手：上游时间戳、坐标系、外参和底盘反馈错误，常会表现为下游“算法不稳定”。

## 关键接口问题

| 入口 | 首先确认 |
| --- | --- |
| 传感器 | 驱动是否发布、频率是否稳定、时间戳来自何处 |
| 消息 | 字段单位、坐标系、frame_id、序列号是否一致 |
| 定位 | 初始化、跳变、延迟和协方差 |
| 规划 | 目标、约束、地图/无地图模式和轨迹时间参数 |
| 控制 | 轨迹时延、车辆状态反馈、执行器限幅 |
| 验证 | 数据集、回放一致性、指标和失败样本 |

## 对标业界参考系统

| 系统 | 公开可见的结构性做法 | 对 WheelOS 的启示 |
| --- | --- | --- |
| [Apollo](https://github.com/ApolloAuto/apollo) | 模块化自动驾驶栈、车辆集成与标定、数据管线和仿真工具共同组织 | 产品资料应绑定版本、配置和集成前提，避免只列功能名 |
| [Autoware](https://docs.autoware.org/main/home/) | 核心包、扩展包和工具分层；组件接口清晰；覆盖安装、仿真、回放和场景测试 | 知识库按任务与接口组织，产品页明确标准配置和可选扩展 |
| [Waymo](https://waymo.com/safety/) | 强调安全案例、运营监控和大量真实/仿真验证的组合 | 单次演示不能替代安全论证；应披露验证层级、运营环境和剩余风险 |

这些公开做法支持同一个工程方向：**模块化接口、版本化配置、分层验证、可观测性和安全边界缺一不可**。本页是设计参考，不代表 WheelOS 已达到上述任何系统的验证规模。

公开参考：[Apollo repository](https://github.com/ApolloAuto/apollo) · [Autoware concepts](https://docs.autoware.org/main/design/autoware-concepts/) · [Autoware simulation](https://docs.autoware.org/main/simulation/) · [Waymo safety](https://waymo.com/safety/) · [Waymo safety case paper](https://arxiv.org/abs/2306.01917)
