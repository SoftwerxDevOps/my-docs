import {themes as prismThemes} from 'prism-react-renderer';
 
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Softwerx',
  tagline: 'Documentation & Product Guides',
  favicon: 'img/favicon.ico',
 
  future: {
    v4: true,
  },
 
  url: 'https://SoftwerxDevOps.github.io',
  baseUrl: '/my-docs/',
 
  organizationName: 'SoftwerxDevOps',
  projectName: 'my-docs',
 
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
 
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
 
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/SoftwerxDevOps/my-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
 
  themeConfig:
    ({
      image: 'img/softwerx-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Softwerx',
        logo: {
          alt: 'Softwerx Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'Softwerx Website',
                href: 'https://www.softwerx.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Softwerx. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};
 
export default config;
