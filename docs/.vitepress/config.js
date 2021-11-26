module.exports = {
  title: "Orange Books", // 网站标题
  description: "books complement.", //网站描述
  base: "/", //  部署时的路径 默认 /  可以使用二级地址 /base/
  // lang: 'en-US', //语言
  repo: "vuejs/vitepress",
  head: [],
  // 主题配置
  themeConfig: {
    //   头部导航
    nav: [
      { text: "首页", link: "/" },
      {
        text: "红宝书",
        items: [
          { text: "红宝书介绍", link: "/guide/JavaScript高级程序设计/书籍介绍" },
        ],
      },
      {
        text: "计算机网络自顶向下",
        items: [
          { text: "自顶向下介绍", link: "/guide/计算机网络自顶向下/书籍介绍" },
        ],
      },
      {
        text: "深入理解计算机系统",
        items: [
          { text: "深入理解计算机系统介绍", link: "/guide/深入理解计算机系统/书籍介绍" },
        ],
      },
      {
        text: "软件工程",
        items: [
          { text: "软件工程介绍", link: "/guide/软件工程/书籍介绍" },
        ],
      },
      {
        text: "人月神话",
        items: [
          { text: "人月神话介绍", link: "/guide/人月神话/书籍介绍" },
        ],
      },
      {
        text: "SpringBoot实战派",
        items: [
          { text: "SpringBoot实战派介绍", link: "/guide/SpringBoot实战派/书籍介绍" },
        ],
      },
      {
        text: "算法4",
        items: [
          { text: "算法4介绍", link: "/guide/算法4/书籍介绍" },
        ],
      },
      {
        text: "鸟哥的Linux私房菜",
        items: [
          { text: "鸟哥的Linux私房菜介绍", link: "/guide/鸟哥的Linux私房菜/书籍介绍" },
        ],
      },
    ],
    //   侧边导航
    sidebar: {},
  },
};
