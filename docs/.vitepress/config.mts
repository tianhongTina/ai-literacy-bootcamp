import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'AI Literacy Bootcamp',
  description: 'AI capability training for non-developers - Learn prompt engineering, AI tools, and workflow automation',
  lang: 'en-US',
  titleTemplate: ':title | AI Literacy Bootcamp',

  // Clean URLs for custom domain
  cleanUrls: true,

  // Dev server config
  vite: {
    server: {
      host: '127.0.0.1',
      port: 5173
    }
  },

  head: [
    // Favicon
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],

    // Theme color
    ['meta', { name: 'theme-color', content: '#667eea' }],

    // Open Graph / Facebook
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'AI Literacy Bootcamp' }],
    ['meta', { property: 'og:description', content: 'AI capability training for non-developers - Learn prompt engineering, AI tools, and workflow automation' }],
    ['meta', { property: 'og:image', content: '/og-image.png' }],
    ['meta', { property: 'og:url', content: 'https://ailiteracy.ai' }],
    ['meta', { property: 'og:site_name', content: 'AI Literacy Bootcamp' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],

    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'AI Literacy Bootcamp' }],
    ['meta', { name: 'twitter:description', content: 'AI capability training for non-developers - Learn prompt engineering, AI tools, and workflow automation' }],
    ['meta', { name: 'twitter:image', content: '/og-image.png' }],

    // SEO
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'googlebot', content: 'index, follow' }],
    ['meta', { name: 'author', content: 'AI Literacy Bootcamp Team' }],
    ['meta', { name: 'keywords', content: 'AI, artificial intelligence, machine learning, prompt engineering, AI tools, AI training, AI literacy, non-developers, workflow automation' }],

    // Fonts
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],

    // Canonical URL
    ['link', { rel: 'canonical', href: 'https://ailiteracy.ai/' }]
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'AI Literacy Bootcamp',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Courses', link: '/courses' },
      { text: 'Full Outline', link: '/outline' },
      { text: 'Tool List', link: '/tools' },
      { text: 'GitHub', link: 'https://github.com/AICode-Nexus/ai-literacy-bootcamp' }
    ],

    sidebar: [
      {
        text: 'Course Introduction',
        items: [
          { text: 'Course Overview', link: '/' },
          { text: 'Course List', link: '/courses' },
          { text: 'Full Outline', link: '/outline' },
          { text: 'Course Design', link: '/design' },
          { text: 'Tool List', link: '/tools' }
        ]
      },
      {
        text: 'Phase 1: Awareness & Basics',
        items: [
          { text: 'Lesson 0: AI Cognitive Restructuring', link: '/lessons/lesson-0' },
          { text: 'Lesson 1: Prompt Engineering', link: '/lessons/lesson-1' }
        ]
      },
      {
        text: 'Phase 2: Scenario-Based Applications',
        items: [
          { text: 'Lesson 2: AI Writing Assistant', link: '/lessons/lesson-2' },
          { text: 'Lesson 3: AI Data Analysis', link: '/lessons/lesson-3' },
          { text: 'Lesson 4: AI Product Design', link: '/lessons/lesson-4' }
        ]
      },
      {
        text: 'Phase 3: Advanced & Ecosystem',
        items: [
          { text: 'Lesson 5: AI Workflow Automation', link: '/lessons/lesson-5' },
          { text: 'Lesson 6: AI Tool Ecosystem', link: '/lessons/lesson-6' }
        ]
      },
      {
        text: 'Phase 4: Security & Governance',
        items: [
          { text: 'Lesson 7: AI Collaboration & Security', link: '/lessons/lesson-7' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AICode-Nexus/ai-literacy-bootcamp' }
    ],

    footer: {
      message: 'Licensed under CC BY-NC-SA 4.0',
      copyright: 'Copyright © 2026 AI Literacy Bootcamp'
    },

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3],
      label: 'Table of Contents'
    },

    // Edit link for GitHub
    editLink: {
      pattern: 'https://github.com/AICode-Nexus/ai-literacy-bootcamp/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  },

  // Ignore dead links in internal planning documents
  ignoreDeadLinks: true,

  // Sitemap generation
  sitemap: {
    hostname: 'https://ailiteracy.ai',
    lastmodDateOnly: false
  }
})
