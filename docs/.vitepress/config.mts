import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/learn-ios-development/',
  title: "Big Yellow iOS Development",
  description: "Here are some articles about iOS development.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/big-yellow.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: 'https://arnosolo.github.io/blog/' },
    ],
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //     ]
    //   }
    // ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/arnosolo' },
    ],
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: "Big Yellow iOS Development",
    },
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh-CN/',
      title: '大黄 iOS 开发',
    }
  },
})
