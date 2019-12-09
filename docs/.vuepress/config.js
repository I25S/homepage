const webpack = require("webpack");
const markdownLinkPlugin = require("./theme/plugins/markdown/link");

let config = {
  title: "I25S ApS",
  description:
    "I25S ApS offers Management and IT consulting services to some of the largest enterprises in Denmark. Our consultants assist with services such as IT Management Consulting, IT Strategy, Systems- and Partner Tendering, GDPR, Enterprise Architecture and Infrastructure and Application Transitions.",
  base: "/",
  themeConfig: {
    activeHeaderLinks: true,
    nav: [],
    sidebar: {},
    docsRepo: "i25s/homepage/blob/release/docs"
  },
  head: [
    [
      "meta",
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1,maximum-scale=6,maximum-scale=1"
      }
    ],
    ["link", { rel: "icon", type: "image/png", href: "/favicon.ico" }],
  ],
  markdown: {
    anchor: { permalink: true, permalinkBefore: true, permalinkSymbol: "" },
    externalLinks: { target: "_blank", rel: "noopener noreferrer nofollow" },
    extendMarkdown: md => {
      md.use(require("markdown-it-footnote"));
      md.use(require("markdown-it-abbr"));
    },
    chainMarkdown(config) {
      // Replace default link converted, to have more control over which links are
      // considered external
      config.plugins.delete("convert-router-link");

      config
        .plugin("convert-router-link")
        .use(markdownLinkPlugin, [
          { target: "_blank", rel: "noopener noreferrer nofollow" }
        ])
        .end();
    }
  },
  chainWebpack(config, isServer) {
    const inlineLimit = 10000;
    config.module
      .rule("images")
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use("url-loader")
      .loader("url-loader")
      .options({
        limit: inlineLimit,
        name: `assets/img/[name].[hash:8].[ext]`
      });
  },
  configureWebpack: (config, isServer) => {
    config.output.globalObject = "this";
    config.plugins.push(new webpack.EnvironmentPlugin(["NODE_ENV", "APP_ENV"]));
  }
};

module.exports = config;
