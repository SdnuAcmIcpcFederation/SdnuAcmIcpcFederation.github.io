import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SDNU ACM",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '算法',
        items:[
          {
            text: '语法基础',
            link: '/1语法基础/变量',
          }
        ]
      },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      '/1语法基础/':
      [
        {
        text: '语法基础',
        items:[
          
          {text:'helloworld',link:'/1语法基础/helloworld'},
          {text:'IDE',link:'/1语法基础/IDE'},
          {text:'变量',link:'/1语法基础/变量'},
          {text:'分支',link:'/1语法基础/分支'},
          {text:'基础',link:'/1语法基础/基础'},
          {text:'循环',link:'/1语法基础/循环'},
          {text:'运算符',link:'/1语法基础/运算符'}

        ]
        },

      ]
    },
    // [
    //   {

    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown:{
    math:true
  }
})
