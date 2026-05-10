// AI Literacy Bootcamp - Custom theme entry
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import LessonCard from './components/LessonCard.vue'
import ProgressTracker from './components/ProgressTracker.vue'
import AdContainer from './components/AdContainer.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // Register global components
    app.component('LessonCard', LessonCard)
    app.component('ProgressTracker', ProgressTracker)
    app.component('AdContainer', AdContainer)
  }
}
