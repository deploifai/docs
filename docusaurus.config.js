/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Deploifai",
  tagline: "Ship AI Models. Faster.",
  url: "https://docs.deploif.ai",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "deploifai", // Usually your GitHub org/user name.
  projectName: "deploifai", // Usually your repo name.
  themeConfig: {
    gtag: {
      trackingID: "G-C51CVBWDD5",
    },
    navbar: {
      title: "Deploifai",
      logo: {
        alt: "Deploifai Logo",
        src: "img/logo.svg",
        href: "https://deploif.ai",
        target: "_self",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://github.com/deploifai/",
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
              label: "Home",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/",
            },
            {
              label: "Discord",
              href: "https://discord.gg/DQFtwCqP",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/deploifai",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/deploifai/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Deploifai Limited`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/deploifai/docs/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
