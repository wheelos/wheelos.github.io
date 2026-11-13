<script setup>
import { computed, reactive, ref } from 'vue'
import { useData } from 'vitepress'

const { lang } = useData()
const isEnglish = computed(() => lang.value === 'en')

const stepsZh = [
  {
    id: 'demand',
    title: '运输需求',
    description: '需求是否长期、重复，并且值得持续投入？',
    questions: [
      ['demand-long-term', '运输任务长期存在，不属于偶发需求'],
      ['demand-frequency', '每天或每周有相对稳定的运输频次'],
      ['demand-route', '起点、终点和主要运输任务较明确'],
      ['demand-resource', '当前持续投入司机、车辆或调度资源']
    ]
  },
  {
    id: 'route',
    title: '线路条件',
    description: '线路和作业区域是否可控，适合从固定线路开始？',
    questions: [
      ['route-fixed', '线路相对固定，起终点明确'],
      ['route-passable', '道路和作业区域具备车辆通行条件'],
      ['route-handoff', '装卸与交接位置相对固定'],
      ['route-manageable', '人车混行、路口和临时障碍可评估、可管理']
    ]
  },
  {
    id: 'vehicle',
    title: '车辆与货物',
    description: '车辆、货物和交接流程是否需要大量非标准改造？',
    questions: [
      ['cargo-spec', '货物重量、尺寸和运输要求明确'],
      ['vehicle-payload', '车辆载荷和货厢空间满足需求'],
      ['cargo-environment', '温控、保温、密封等要求已经明确并有对应方案'],
      ['cargo-handoff', '装卸流程和交接方式可以标准化'],
      ['business-integration', '仓储、调度等业务系统是否需要对接已经明确']
    ]
  },
  {
    id: 'safety',
    title: '安全与合规',
    description: '这是硬门槛。关键责任无法落实时，不应进入商业部署。',
    questions: [
      ['permit', '车辆运行区域和准入要求已经明确'],
      ['safety-owner', '运营许可、场地管理和安全责任可以落实'],
      ['emergency', '异常处理、紧急停车和现场响应机制可以落实'],
      ['insurance', '保险和事故责任安排明确'],
      ['special-cargo', '特殊货物运输要求能够满足，或能够明确排除']
    ]
  },
  {
    id: 'economics',
    title: '经济性',
    description: '自动驾驶是否能以合理成本完成真实运输任务？',
    questions: [
      ['baseline-cost', '已了解当前司机、车辆和运输服务成本'],
      ['full-cost', '可估算车辆、系统、部署、维护和运营成本'],
      ['utilization', '每日有效运输任务量能够支撑投入'],
      ['budget-owner', '有明确业务负责人、预算和合作意愿']
    ]
  }
]

const stepsEn = [
  {
    id: 'demand',
    title: 'Transport demand',
    description: 'Is the demand long-term, repetitive and worth sustained investment?',
    questions: [
      ['demand-long-term', 'The transport task exists long-term rather than as a one-off need'],
      ['demand-frequency', 'There is a relatively stable daily or weekly transport frequency'],
      ['demand-route', 'Origins, destinations and primary tasks are clear'],
      ['demand-resource', 'Drivers, vehicles or dispatch resources are currently committed']
    ]
  },
  {
    id: 'route',
    title: 'Route conditions',
    description: 'Are the route and operating area controllable enough to start with one fixed route?',
    questions: [
      ['route-fixed', 'The route is relatively fixed with clear origins and destinations'],
      ['route-passable', 'Roads and operating areas are passable for the intended vehicle'],
      ['route-handoff', 'Loading and handoff locations are relatively fixed'],
      ['route-manageable', 'Mixed traffic, junctions and temporary obstacles can be assessed and managed']
    ]
  },
  {
    id: 'vehicle',
    title: 'Vehicle and cargo',
    description: 'Would the vehicle, cargo and handoff process require extensive non-standard adaptation?',
    questions: [
      ['cargo-spec', 'Cargo weight, dimensions and transport requirements are defined'],
      ['vehicle-payload', 'Vehicle payload and cargo space satisfy the requirement'],
      ['cargo-environment', 'Temperature, insulation or sealing requirements are defined with a viable solution'],
      ['cargo-handoff', 'Loading and handoff processes can be standardized'],
      ['business-integration', 'The need to connect warehouse or dispatch systems is understood']
    ]
  },
  {
    id: 'safety',
    title: 'Safety and compliance',
    description: 'This is a hard gate. Do not enter commercial deployment when critical responsibilities are unresolved.',
    questions: [
      ['permit', 'The operating area and access requirements are defined'],
      ['safety-owner', 'Operating permits, site management and safety responsibility can be assigned'],
      ['emergency', 'Exception handling, emergency stop and site-response procedures can be implemented'],
      ['insurance', 'Insurance and incident responsibility are defined'],
      ['special-cargo', 'Special-cargo requirements can be met or explicitly excluded']
    ]
  },
  {
    id: 'economics',
    title: 'Economics',
    description: 'Can autonomous transport complete the real task at a reasonable total cost?',
    questions: [
      ['baseline-cost', 'The current driver, vehicle and transport-service cost is understood'],
      ['full-cost', 'Vehicle, system, deployment, maintenance and operating costs can be estimated'],
      ['utilization', 'Daily productive work can support the investment'],
      ['budget-owner', 'A business owner, budget and willingness to cooperate are present']
    ]
  }
]

const labels = computed(() =>
  isEnglish.value
    ? {
        title: 'Scenario fit assessment',
        intro: 'Answer the five gates below. The assessment runs entirely in your browser and does not upload data.',
        yes: 'Yes',
        no: 'No',
        unknown: 'Not sure',
        previous: 'Previous',
        next: 'Next',
        result: 'View assessment',
        restart: 'Start over',
        print: 'Print / save PDF',
        copy: 'Copy summary',
        email: 'Email this summary',
        step: 'Step',
        of: 'of',
        answered: 'answered',
        incomplete: 'Answer every question to generate the assessment.',
        ready: 'Proceed to site assessment',
        conditional: 'Collect missing information before deployment',
        notReady: 'Not ready for deployment yet',
        readyText: 'The key conditions are sufficiently defined to start a site survey, route review and minimum validation project.',
        conditionalText: 'There are unresolved assumptions. Clarify the missing items first; a site assessment may still be appropriate.',
        notReadyText: 'One or more hard conditions are not met. Resolve them before discussing vehicle deployment.',
        boundaries: 'This is an initial screening tool, not a deployment approval or safety conclusion.',
        groupSummary: 'Gate summary',
        nextAction: 'Next action',
        generated: 'Generated by the WheelOS scenario fit assessment',
        summaryTitle: 'WheelOS scenario assessment summary'
      }
    : {
        title: '场景适配判断',
        intro: '依次回答五道关卡，结果完全在浏览器本地计算，不会上传任何数据。',
        yes: '是',
        no: '否',
        unknown: '不确定',
        previous: '上一步',
        next: '下一步',
        result: '查看评估结果',
        restart: '重新评估',
        print: '打印 / 保存 PDF',
        copy: '复制摘要',
        email: '将摘要发送给 WheelOS',
        step: '第',
        of: '步，共',
        answered: '已回答',
        incomplete: '请回答当前步骤的全部问题后继续。',
        ready: '建议进入现场评估',
        conditional: '补齐信息后再决定',
        notReady: '当前不建议进入部署',
        readyText: '关键条件已经较清晰，可以进入现场调研、线路评估和最小验证项目。',
        conditionalText: '仍有关键假设待确认。先补齐信息；必要时仍可开展初步现场评估。',
        notReadyText: '至少有一项硬条件尚不满足。请先解决责任、合规、线路或基础运行条件。',
        boundaries: '本工具只用于初步筛选，不是部署批准、性能验证或安全结论。',
        groupSummary: '五道关卡摘要',
        nextAction: '下一步',
        generated: '由 WheelOS 场景适配判断工具生成',
        summaryTitle: 'WheelOS 场景评估摘要'
      }
)

const steps = computed(() => (isEnglish.value ? stepsEn : stepsZh))
const answers = reactive({})
const currentIndex = ref(0)
const showResult = ref(false)
const copyState = ref('')
const currentStep = computed(() => steps.value[currentIndex.value])
const currentComplete = computed(() =>
  currentStep.value.questions.every(([id]) => answers[id])
)
const answeredCount = computed(
  () => steps.value.flatMap((step) => step.questions).filter(([id]) => answers[id]).length
)
const totalQuestions = computed(
  () => steps.value.flatMap((step) => step.questions).length
)
const allComplete = computed(() => answeredCount.value === totalQuestions.value)

const evaluation = computed(() => {
  const groups = steps.value.map((step) => {
    const counts = { yes: 0, no: 0, unknown: 0 }
    for (const [id] of step.questions) {
      const answer = answers[id]
      if (answer) counts[answer] += 1
    }
    return { id: step.id, title: step.title, counts, total: step.questions.length }
  })
  const safety = groups.find((group) => group.id === 'safety')
  const economics = groups.find((group) => group.id === 'economics')
  const hardGroups = groups.filter((group) => group.id !== 'economics')

  let kind = 'incomplete'
  if (allComplete.value) {
    if (safety.counts.no > 0 || hardGroups.some((group) => group.counts.no >= 2)) {
      kind = 'notReady'
    } else if (
      safety.counts.unknown > 0 ||
      hardGroups.some((group) => group.counts.no > 0 || group.counts.unknown > 0) ||
      economics.counts.no >= 2
    ) {
      kind = 'conditional'
    } else if (economics.counts.no > 0 || economics.counts.unknown > 0) {
      kind = 'conditional'
    } else {
      kind = 'ready'
    }
  }

  return { kind, groups }
})

const resultTitle = computed(() => {
  if (evaluation.value.kind === 'ready') return labels.value.ready
  if (evaluation.value.kind === 'notReady') return labels.value.notReady
  return labels.value.conditional
})

const resultText = computed(() => {
  if (evaluation.value.kind === 'ready') return labels.value.readyText
  if (evaluation.value.kind === 'notReady') return labels.value.notReadyText
  return labels.value.conditionalText
})

const summaryText = computed(() => {
  const lines = [
    labels.value.summaryTitle,
    '',
    `${isEnglish.value ? 'Result' : '结论'}: ${resultTitle.value}`,
    resultText.value,
    '',
    labels.value.groupSummary
  ]
  for (const group of evaluation.value.groups) {
    lines.push(
      `${group.title}: ${labels.value.yes} ${group.counts.yes} / ${labels.value.no} ${group.counts.no} / ${labels.value.unknown} ${group.counts.unknown}`
    )
  }
  lines.push('', labels.value.boundaries)
  return lines.join('\n')
})

const emailHref = computed(() => {
  const subject = isEnglish.value
    ? 'WheelOS scenario fit assessment'
    : 'WheelOS 场景适配评估'
  return `mailto:support@wheelos.cn?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(summaryText.value)}`
})

function setAnswer(id, value) {
  answers[id] = value
  showResult.value = false
}

function next() {
  if (!currentComplete.value) return
  if (currentIndex.value < steps.value.length - 1) {
    currentIndex.value += 1
  } else if (allComplete.value) {
    showResult.value = true
  }
}

function previous() {
  if (currentIndex.value > 0) currentIndex.value -= 1
}

function reset() {
  for (const step of steps.value) {
    for (const [id] of step.questions) delete answers[id]
  }
  currentIndex.value = 0
  showResult.value = false
  copyState.value = ''
}

async function copySummary() {
  try {
    await navigator.clipboard.writeText(summaryText.value)
    copyState.value = isEnglish.value ? 'Copied' : '已复制'
  } catch {
    copyState.value = isEnglish.value ? 'Copy failed' : '复制失败'
  }
}

function printSummary() {
  window.print()
}
</script>

<template>
  <section class="fit-assessment" :aria-label="labels.title">
    <div class="fit-assessment__header">
      <div>
        <p class="fit-assessment__eyebrow">{{ labels.title }}</p>
        <h2>{{ currentStep.title }}</h2>
        <p>{{ currentStep.description }}</p>
      </div>
      <div class="fit-assessment__count">
        {{ labels.step }} {{ currentIndex + 1 }} {{ labels.of }} {{ steps.length }}
      </div>
    </div>

    <div class="fit-assessment__progress" role="navigation" :aria-label="labels.title">
      <button
        v-for="(step, index) in steps"
        :key="step.id"
        type="button"
        :class="{ active: index === currentIndex, complete: step.questions.every(([id]) => answers[id]) }"
        :aria-label="`${labels.step} ${index + 1}: ${step.title}`"
        @click="currentIndex = index"
      >
        {{ index + 1 }}
      </button>
    </div>

    <div class="fit-assessment__note">
      {{ labels.intro }}
    </div>

    <ol class="fit-assessment__questions">
      <li v-for="([id, text]) in currentStep.questions" :key="id">
        <p>{{ text }}</p>
        <div class="fit-assessment__choices" role="group" :aria-label="text">
          <button
            v-for="choice in ['yes', 'no', 'unknown']"
            :key="choice"
            type="button"
            :class="{ selected: answers[id] === choice }"
            :aria-pressed="answers[id] === choice"
            @click="setAnswer(id, choice)"
          >
            {{ labels[choice] }}
          </button>
        </div>
      </li>
    </ol>

    <div class="fit-assessment__controls">
      <button type="button" class="secondary" :disabled="currentIndex === 0" @click="previous">
        {{ labels.previous }}
      </button>
      <span>{{ answeredCount }} / {{ totalQuestions }} {{ labels.answered }}</span>
      <button
        type="button"
        class="primary"
        :disabled="!currentComplete"
        @click="next"
      >
        {{ currentIndex === steps.length - 1 ? labels.result : labels.next }}
      </button>
    </div>

    <div v-if="showResult && allComplete" class="fit-assessment__result" aria-live="polite">
      <p class="fit-assessment__result-label">{{ resultTitle }}</p>
      <p>{{ resultText }}</p>

      <h3>{{ labels.groupSummary }}</h3>
      <div class="fit-assessment__summary-grid">
        <div v-for="group in evaluation.groups" :key="group.id">
          <strong>{{ group.title }}</strong>
          <span>{{ labels.yes }} {{ group.counts.yes }} · {{ labels.no }} {{ group.counts.no }} · {{ labels.unknown }} {{ group.counts.unknown }}</span>
        </div>
      </div>

      <p class="fit-assessment__boundary">{{ labels.boundaries }}</p>

      <div class="fit-assessment__actions">
        <button type="button" class="primary" @click="printSummary">{{ labels.print }}</button>
        <button type="button" @click="copySummary">{{ labels.copy }}</button>
        <a :href="emailHref">{{ labels.email }}</a>
        <button type="button" class="secondary" @click="reset">{{ labels.restart }}</button>
      </div>
      <p v-if="copyState" class="fit-assessment__copy-state" role="status">{{ copyState }}</p>
    </div>
  </section>

  <section v-if="showResult && allComplete" class="fit-print-summary">
    <p class="fit-print-summary__eyebrow">{{ labels.generated }}</p>
    <h1>{{ labels.summaryTitle }}</h1>
    <h2>{{ resultTitle }}</h2>
    <p>{{ resultText }}</p>
    <h2>{{ labels.groupSummary }}</h2>
    <ul>
      <li v-for="group in evaluation.groups" :key="group.id">
        <strong>{{ group.title }}</strong>:
        {{ labels.yes }} {{ group.counts.yes }} /
        {{ labels.no }} {{ group.counts.no }} /
        {{ labels.unknown }} {{ group.counts.unknown }}
      </li>
    </ul>
    <h2>{{ labels.nextAction }}</h2>
    <p>support@wheelos.cn</p>
    <p>{{ labels.boundaries }}</p>
  </section>
</template>
