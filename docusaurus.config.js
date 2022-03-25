// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docu{CISA}saurus',
  tagline: 'A framework for a CISA bug bounty program playbook.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/CISA_Logo.png',
  organizationName: 'brycepedroza', // Usually your GitHub org/user name.
  projectName: 'docucisaurus', // Usually your repo name.


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Docu{CISA}saurus',
        logo: {
          alt: 'My Site Logo',
          src: 'img/CISA_Logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'BBP Playbook',
          },
          {
            href: 'https://github.com/brycepedroza/docucisaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Bug Bounty Program Playbook',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'CISA',
            items: [
              {
                label: 'Homepage',
                href: 'https://www.cisa.gov/',
              },
              {
                label: 'DHS',
                href: 'https://www.dhs.gov/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/CISAgov?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/brycepedroza/docucisaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Aspen Tech Policy Hub. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en"],
      },
    ],
  ]
};

module.exports = config;
