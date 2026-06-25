import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'CRM PM Handbook',
  description: 'ChinaDivision 产品经理面试手册：CRM、增长、履约、Portal、AI 与数据体系',
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '学习路线', link: '/guide/learning-path' },
      { text: '面试题库', link: '/interview/questions' },
      { text: '项目映射', link: '/resume/project-mapping' }
    ],
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 4],
      label: '本页目录'
    },
    sidebar: [
      {
        text: '开始阅读',
        items: [
          { text: '手册介绍', link: '/' },
          { text: '学习路线', link: '/guide/learning-path' },
          { text: '如何使用本手册', link: '/guide/how-to-use' }
        ]
      },
      {
        text: '第一篇：业务全景',
        collapsed: false,
        items: [
          { text: '01｜ChinaDivision 业务全景', link: '/business/chinadivision-business-model' }
        ]
      },
      {
        text: '第二篇：CRM 与增长体系',
        collapsed: false,
        items: [
          { text: '04｜CRM 的本质', link: '/crm/what-is-crm' },
          { text: '05｜Lead 到 MQL/SQL/商机', link: '/crm/lead-mql-sql-opportunity' },
          { text: '06｜客户标签、分层与评分', link: '/crm/segmentation-scoring' },
          { text: '07｜销售漏斗与销售效率', link: '/crm/sales-funnel-efficiency' }
        ]
      },
      {
        text: '第三篇：Portal、AI 与数据',
        collapsed: false,
        items: [
          { text: '08｜User Portal 用户中心', link: '/portal/user-portal' },
          { text: '09｜AI CRM 能力设计', link: '/ai/ai-crm' },
          { text: '10｜数据指标体系', link: '/data/metrics-system' }
        ]
      },
      {
        text: '第四篇：项目映射与面试',
        collapsed: false,
        items: [
          { text: '11｜经历如何匹配 JD', link: '/resume/project-mapping' },
          { text: '14｜高频面试题总览', link: '/interview/questions' },
          { text: '15｜角色视角追问', link: '/interview/role-based-questions' },
          { text: '16｜业务沙盘推演', link: '/interview/business-simulation' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/JiChaoSong/CRMPM' }
    ],
    footer: {
      message: 'CRM PM Handbook',
      copyright: 'Copyright © 2026'
    }
  }
})
