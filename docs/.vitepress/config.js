// .vitepress/config.js

const base = "/blog_1/";
export default {
  base,
  // 站点级选项
  title: "杜梦飞的博客",
  description: "杜梦飞用来写博客的地方",
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    ["link", { rel: "icon", href: `${base}favicon.ico` }],
  ],
  themeConfig: {
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    nav: [
      {
        text: "大前端",
        items: [
          { text: "html", link: "/dmf/html/" },
          { text: "css", link: "/dmf/css/" },
          { text: "js", link: "/dmf/js/" },
        ],
      },
      { text: "关于", link: "/about" },
    ],
    sidebar: {
      "/dmf/html/": {
        text: "html",
        items: [
          { text: "html", link: "/dmf/html/" },
          { text: "html1", link: "/dmf/html/html1" },
          { text: "html2", link: "dmf/html/html2" },
        ],
      },
      "/dmf/java/": {
        text: "java",
        items: [
          { text: "css1", link: "/dmf/css/css1" },
          { text: "css2", link: "/dmf/css/css2" },
        ],
      },
      "/dmf/js/": {
        text: "js",
        items: [
          { text: "基本语法", link: "/dmf/js/grammer" },
          { text: "学习教程", link: "/dmf/js/tutorial" },
        ],
      },
    },
  },
};
