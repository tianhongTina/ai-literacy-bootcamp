<template>
  <div class="progress-tracker">
    <div class="progress-header">
      <h3>学习进度</h3>
      <div class="progress-stats">
        <span class="stat">{{ completedCount }}/{{ totalCount }} 已完成</span>
        <span class="stat-percentage">{{ progressPercentage }}%</span>
      </div>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" :style="{ width: progressPercentage + '%' }"></div>
    </div>
    <div class="lessons-list">
      <div
        v-for="lesson in lessons"
        :key="lesson.id"
        class="lesson-item"
        :class="{ completed: lesson.completed }"
        @click="toggleLesson(lesson.id)"
      >
        <div class="lesson-checkbox">
          <svg v-if="lesson.completed" class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <div class="lesson-info">
          <span class="lesson-name">{{ lesson.name }}</span>
          <span class="lesson-duration">{{ lesson.duration }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const lessons = ref([
  { id: 0, name: '第 0 课：AI 认知重构', duration: '2小时', completed: false },
  { id: 1, name: '第 1 课：提示词工程', duration: '2小时', completed: false },
  { id: 2, name: '第 2 课：AI 写作助手', duration: '2小时', completed: false },
  { id: 3, name: '第 3 课：AI 数据分析', duration: '2小时', completed: false },
  { id: 4, name: '第 4 课：AI 产品设计', duration: '2小时', completed: false },
  { id: 5, name: '第 5 课：AI 工作流自动化', duration: '2小时', completed: false },
  { id: 6, name: '第 6 课：AI 工具生态', duration: '2小时', completed: false },
  { id: 7, name: '第 7 课：AI 协作与安全', duration: '2小时', completed: false }
])

const totalCount = computed(() => lessons.value.length)
const completedCount = computed(() => lessons.value.filter(l => l.completed).length)
const progressPercentage = computed(() =>
  Math.round((completedCount.value / totalCount.value) * 100)
)

const toggleLesson = (id) => {
  const lesson = lessons.value.find(l => l.id === id)
  if (lesson) {
    lesson.completed = !lesson.completed
    saveProgress()
  }
}

const saveProgress = () => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('ai-bootcamp-progress', JSON.stringify(lessons.value))
  }
}

const loadProgress = () => {
  if (typeof localStorage !== 'undefined') {
    const saved = localStorage.getItem('ai-bootcamp-progress')
    if (saved) {
      const savedLessons = JSON.parse(saved)
      lessons.value.forEach((lesson, index) => {
        if (savedLessons[index]) {
          lesson.completed = savedLessons[index].completed
        }
      })
    }
  }
}

onMounted(() => {
  loadProgress()
})
</script>

<style scoped>
.progress-tracker {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 2rem 0;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.progress-header h3 {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.progress-stats {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.stat {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.stat-percentage {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--vp-c-brand-1);
}

.progress-bar {
  height: 8px;
  background: var(--vp-c-bg-mute);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 1.5rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #6366f1, #a855f7);
  border-radius: 4px;
  transition: width 0.5s ease;
}

.lessons-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.lesson-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;
}

.lesson-item:hover {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-divider);
}

.lesson-item.completed {
  opacity: 0.7;
}

.lesson-checkbox {
  width: 20px;
  height: 20px;
  border: 2px solid var(--vp-c-divider);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.lesson-item.completed .lesson-checkbox {
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}

.check-icon {
  width: 14px;
  height: 14px;
  stroke-width: 3;
  color: white;
}

.lesson-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
}

.lesson-name {
  font-size: 0.9375rem;
  color: var(--vp-c-text-1);
}

.lesson-item.completed .lesson-name {
  text-decoration: line-through;
}

.lesson-duration {
  font-size: 0.8125rem;
  color: var(--vp-c-text-2);
}

@media (max-width: 768px) {
  .progress-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .lesson-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
}
</style>
