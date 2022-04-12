/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "react-ts-tradingview-widgets",
  tagline: "This is a React component library for TradingView Widgets.",
  url: "https://jorrinkievit.github.io",
  baseUrl: "/react-ts-tradingview-widgets/",
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
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/jorrinkievit/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} react-ts-tradingview-widgets, Inc.`,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: "8UVCPM1TIP",

      // Public API key: it is safe to commit it
      apiKey: "7f37b9c8d380be34758062e1bfb7d7ad",

      indexName: "react-ts-tradingview-widgets",

      // Optional: see doc section below
      // contextualSearch: false,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Algolia search parameters
      // searchParameters: {},
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
