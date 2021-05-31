/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "react-ts-tradingview-widgets",
  tagline: "This is a React component library for TradingView Widgets.",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "JorrinKievit", // Usually your GitHub org/user name.
  projectName: "react-ts-tradingview-widgets", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "react-ts-tradingview-widgets",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Components",
        },
        {
          href: "https://github.com/JorrinKievit/react-ts-tradingview-widgets",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Components",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord - ItsHypnotix#6401",
              href: "https://discord.com",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/ItsHypnotix",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/JorrinKievit/react-ts-tradingview-widgets",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} react-ts-tradingview-widgets, Inc.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/JorrinKievit/react-ts-tradingview-widgets/edit/master/docs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
