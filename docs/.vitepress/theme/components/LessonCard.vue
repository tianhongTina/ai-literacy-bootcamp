<template>
  <div class="lesson-card" :class="{ completed: isCompleted }">
    <div class="lesson-header">
      <div class="lesson-number">{{ lessonNumber }}</div>
      <div class="lesson-status">
        <span v-if="isCompleted" class="status-badge completed">✓ Completed</span>
        <span v-else class="status-badge">Not Started</span>
      </div>
    </div>
    <h3 class="lesson-title">{{ title }}</h3>
    <p class="lesson-description">{{ description }}</p>
    <div class="lesson-meta">
      <span class="meta-item">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
        {{ duration }}
      </span>
      <span class="meta-item">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
        {{ difficulty }}
      </span>
    </div>
    <a :href="link" class="lesson-link">
      Start Learning →
    </a>
  </div>
</template>

<script setup>
defineProps({
  lessonNumber: String,
  title: String,
  description: String,
  duration: String,
  difficulty: String,
  link: String,
  isCompleted: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.lesson-card {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.lesson-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #6366f1, #a855f7);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.lesson-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px -8px rgba(99, 102, 241, 0.2);
  border-color: var(--vp-c-brand-1);
}

.lesson-card:hover::before {
  opacity: 1;
}

.lesson-card.completed {
  background: var(--vp-c-bg-soft);
}

.lesson-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.lesson-number {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
}

.status-badge {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background: var(--vp-c-bg-mute);
  color: var(--vp-c-text-2);
}

.status-badge.completed {
  background: #dcfce7;
  color: #16a34a;
}

.dark .status-badge.completed {
  background: rgba(22, 163, 74, 0.2);
  color: #4ade80;
}

.lesson-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.75rem 0;
  color: var(--vp-c-text-1);
}

.lesson-description {
  font-size: 0.9375rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0 0 1rem 0;
}

.lesson-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-divider);
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.icon {
  width: 1rem;
  height: 1rem;
  stroke-width: 2;
}

.lesson-link {
  display: inline-flex;
  align-items: center;
  color: var(--vp-c-brand-1);
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
}

.lesson-link:hover {
  color: var(--vp-c-brand-2);
  transform: translateX(4px);
}
</style>
