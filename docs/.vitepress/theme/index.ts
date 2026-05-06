// AI 素养训练营 - 自定义主题入口
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import LessonCard from './components/LessonCard.vue'
import ProgressTracker from './components/ProgressTracker.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // 注册全局组件
    app.component('LessonCard', LessonCard)
    app.component('ProgressTracker', ProgressTracker)
  }
}
