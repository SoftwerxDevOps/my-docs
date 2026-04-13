secure365-sentinel-pricing-estimator-v3.html
 
sentinel-estimator-final (2).html
 
 
sentinel-estimator-final (3).html
 
sentinel-estimator-final (5).html
 
name: Deploy to GitHub Pages
 
on:

  push:

    branches: [main]
 
permissions:

  contents: read

  pages: write

  id-token: write
 
jobs:

  deploy:

    environment:

      name: github-pages

      url: ${{ steps.deployment.outputs.page_url }}

    runs-on: ubuntu-latest

    steps:

      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4

        with:

          node-version: 20

      - run: npm ci

      - run: npm run build

      - uses: actions/configure-pages@v4

      - uses: actions/upload-pages-artifact@v3

        with:

          path: build

      - uses: actions/deploy-pages@v4

        id: deployment
 
Visual identity: colour

Colour palette

Core Colours

Secondary Colours

Gradient Neutral Colours


Softwerx Orange

R:255 G:85 B:0 K:0

HEX: #FF5500

C:0 M:87 Y:100 K:0

Softwerx Orange

R:255 G:85 B:0 K:0

HEX: #FF5500

C:0 M:87 Y:100 K:0

Midnight Blue

R:3 G:18 B:58 K:56

HEX: #00123A

C:100 M:91 Y:38 K:56

System Blue

R:32 G:0 B:255 K:0

HEX: #2000FF

C:86 M:76 Y:0 K:0

Pale Blue K:0

R:0 G:203 B:255

HEX: #00CBFF

C:73 M:0 Y:1 K:0

Screen Green

R:0 G:124 B:0 K;13 

HEX: #007C00

C:98 M:22 Y:100 K:13

Light Orange

R:255 G:133 B:0 K:0

HEX: #FF8500

C:0 M:63 Y:100 K:0

White

R:255 G:255 B:255 K:0

HEX: #FFFFFF

C:0 M:0 Y:0 K:0 

Light Orange

R:255 G:133 B:0 K:0

HEX: #FF8500

C:0 M:63 Y:100 K:0

Black

R:0 G:0 B:0 K;100

HEX: #000000

C:0 M:0 Y:0 K:100

Colour is a vital part of our brand. Our colour palette 

is used to provide consistency across all areas of the 

brand and symbolise what we represent. Our colours 

have been carefully selected and work together to 

create a dynamic and engaging palette. 

Our two core brand colours are orange and blue. They 

are the foundation of our colour palette. These are 

the colours we use for our logo, and we should always 

use at least one of them when creating materials.

Our secondary colour palette compliments the core 

colours adds a sense of modernity and can be used 

to add variety to brand communications (hyperlinks, 

buttons, background elements, icons, etc.).

The gradient can be used to add depth, detail and 

help create eye-catching visuals, and is reserved for 

background and large graphic elements.

Neutral colours

While both neutral colours can be used for 

typography (see page 9), white can be used as a 

background colour and black should not be used 

as a background colour.

23

Softwerx: Brand Guidelines V1.0

COPYRIGHT © 2025

Typography

ABCDEFGHIJKLMNOPQRSTUVWXYZ

abcdefghijklmnopqrstuvwxyz1234567890

ABCDEFGHIJKLMNOPQRSTUVWXYZ

abcdefghijklmnopqrstuvwxyz1234567890

ABCDEFGHIJKLMNOPQRSTUVWXYZ

abcdefghijklmnopqrstuvwxyz1234567890

ABCDEFGHIJKLMNOPQRSTUVWXYZ

abcdefghijklmnopqrstuvwxyz1234567890

Figtree regular - Body copy, presentations, web

Figtree Semibold - hyperlinks

Sora Bold - Headings, buttons, quotes and stats

Sora Extrabold - Stats and graphic elements (quotation marks etc.)

Sora is a sans-serif font that shows Softwerx in 

a modern, clean and approachable light. It shows 

the professional and personable side to Softwerx. 

Combined with Figtree for copy at small sizes, its 

balanced letterforms and subtle warmth convey trust 

and expertise without feeling overly corporate or rigid. 

Sora is exclusively used for titles, quotes and stats, 

whilst Figtree is used for body copy, presentations 

and on web. Through these four typeface weights you 

can create hierarchy and visual interest.

Both Sora and Figtree are licensed under the Google 

Font License (this allows the font to be used and 

redistributed freely as long as they are not sold 

by themselves).

Sora may be downloaded here.

Figtree may be downloaded here.

Where either typeface is not available to download, for 

example on Microsoft applications (Powerpoint, Word 

etc.) we replace them with Arial. If either typeface is 

not supported by your local language, use Noto Sans.

Visual identity: typography

24

Softwerx: Brand Guidelines V1.
 
// @ts-check

// `@type` JSDoc annotations allow editor autocompletion and type checking

// (when paired with `@ts-check`).

// There are various equivalent ways to declare your Docusaurus config.

// See: https://docusaurus.io/docs/api/docusaurus-config
 
import {themes as prismThemes} from 'prism-react-renderer';
 
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
 
/** @type {import('@docusaurus/types').Config} */

const config = {

  title: 'My Site',

  tagline: 'Dinosaurs are cool',

  favicon: 'img/favicon.ico',
 
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future

  future: {

    v4: true, // Improve compatibility with the upcoming Docusaurus v4

  },
 
  // Set the production url of your site here

  url: 'https://your-docusaurus-site.example.com',

  // Set the /<baseUrl>/ pathname under which your site is served

  // For GitHub pages deployment, it is often '/<projectName>/'

  baseUrl: '/',
 
  // GitHub pages deployment config.

  // If you aren't using GitHub pages, you don't need these.

  organizationName: 'facebook', // Usually your GitHub org/user name.

  projectName: 'docusaurus', // Usually your repo name.
 
  onBrokenLinks: 'throw',
 
  // Even if you don't use internationalization, you can use this field to set

  // useful metadata like html lang. For example, if your site is Chinese, you

  // may want to replace "en" with "zh-Hans".

  i18n: {

    defaultLocale: 'en',

    locales: ['en'],

  },
 
  presets: [

    [

      'classic',

      /** @type {import('@docusaurus/preset-classic').Options} */

      ({

        docs: {

          sidebarPath: './sidebars.js',

          // Please change this to your repo.

          // Remove this to remove the "edit this page" links.

          editUrl:

            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',

        },

        blog: {

          showReadingTime: true,

          feedOptions: {

            type: ['rss', 'atom'],

            xslt: true,

          },

          // Please change this to your repo.

          // Remove this to remove the "edit this page" links.

          editUrl:

            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',

          // Useful options to enforce blogging best practices

          onInlineTags: 'warn',

          onInlineAuthors: 'warn',

          onUntruncatedBlogPosts: 'warn',

        },

        theme: {

          customCss: './src/css/custom.css',

        },

      }),

    ],

  ],
 
  themeConfig:

    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

    ({

      // Replace with your project's social card

      image: 'img/docusaurus-social-card.jpg',

      colorMode: {

        respectPrefersColorScheme: true,

      },

      navbar: {

        title: 'My Site',

        logo: {

          alt: 'My Site Logo',

          src: 'img/logo.svg',

        },

        items: [

          {

            type: 'docSidebar',

            sidebarId: 'tutorialSidebar',

            position: 'left',

            label: 'Tutorial',

          },

          {to: '/blog', label: 'Blog', position: 'left'},

          {

            href: 'https://github.com/facebook/docusaurus',

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

                label: 'Tutorial',

                to: '/docs/intro',

              },

            ],

          },

          {

            title: 'Community',

            items: [

              {

                label: 'Stack Overflow',

                href: 'https://stackoverflow.com/questions/tagged/docusaurus',

              },

              {

                label: 'Discord',

                href: 'https://discordapp.com/invite/docusaurus',

              },

              {

                label: 'X',

                href: 'https://x.com/docusaurus',

              },

            ],

          },

          {

            title: 'More',

            items: [

              {

                label: 'Blog',

                to: '/blog',

              },

              {

                label: 'GitHub',

                href: 'https://github.com/facebook/docusaurus',

              },

            ],

          },

        ],

        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,

      },

      prism: {

        theme: prismThemes.github,

        darkTheme: prismThemes.dracula,

      },

    }),

};
 
export default config;
docusaurus.config.js | Docusaurus
API reference for Docusaurus configuration file.
 
// @ts-check

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
 
  // Load Sora + Figtree from Google Fonts

  headTags: [

    {

      tagName: 'link',

      attributes: {

        rel: 'preconnect',

        href: 'https://fonts.googleapis.com',

      },

    },

    {

      tagName: 'link',

      attributes: {

        rel: 'stylesheet',

        href: 'https://fonts.googleapis.com/css2?family=Figtree:wght@400;600&family=Sora:wght@700;800&display=swap',

      },

    },

  ],
 
  presets: [

    [

      'classic',

      /** @type {import('@docusaurus/preset-classic').Options} */

      ({

        docs: {

          sidebarPath: './sidebars.js',

          editUrl: 'https://github.com/SoftwerxDevOps/my-docs/tree/main/',

        },

        blog: false, // Disabled - docs only

        theme: {

          customCss: './src/css/custom.css',

        },

      }),

    ],

  ],
 
  themeConfig:

    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

    ({

      image: 'img/softwerx-social-card.jpg',

      colorMode: {

        respectPrefersColorScheme: true,

      },

      navbar: {

        title: 'Softwerx',

        logo: {

          alt: 'Softwerx Logo',

          src: 'img/logo.svg',

          srcDark: 'img/logo-dark.svg', // optional dark mode logo

        },

        items: [

          {

            type: 'docSidebar',

            sidebarId: 'tutorialSidebar',

            position: 'left',

            label: 'Documentation',

          },

        ],

        style: 'dark', // uses your dark navy navbar

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

                href: 'https://www.softwerx.co.uk',

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
 
/* Softwerx Brand Colours */

:root {

  /* Primary: Softwerx Orange */

  --ifm-color-primary: #FF5500;

  --ifm-color-primary-dark: #E64D00;

  --ifm-color-primary-darker: #D94900;

  --ifm-color-primary-darkest: #B33C00;

  --ifm-color-primary-light: #FF6A1A;

  --ifm-color-primary-lighter: #FF7733;

  --ifm-color-primary-lightest: #FF8500;
 
  /* Fonts */

  --ifm-font-family-base: 'Figtree', sans-serif;

  --ifm-heading-font-family: 'Sora', sans-serif;
 
  --ifm-code-font-size: 95%;

  --docusaurus-highlighted-code-line-bg: rgba(255, 85, 0, 0.1);

}
 
/* Dark mode overrides */

[data-theme='dark'] {

  --ifm-color-primary: #FF6A1A;

  --ifm-color-primary-dark: #FF5500;

  --ifm-color-primary-darker: #E64D00;

  --ifm-color-primary-darkest: #B33C00;

  --ifm-color-primary-light: #FF8500;

  --ifm-color-primary-lighter: #FF9933;

  --ifm-color-primary-lightest: #FFAD66;
 
  --ifm-background-color: #00123A; /* Midnight Blue */

  --ifm-navbar-background-color: #00123A;

  --ifm-footer-background-color: #000D28;
 
  --docusaurus-highlighted-code-line-bg: rgba(255, 106, 26, 0.15);

}
 
/* Navbar dark style */

.navbar {

  background-color: #00123A;

}
 
.navbar__title {

  font-family: 'Sora', sans-serif;

  font-weight: 700;

  color: #FF5500;

}
 
/* Headings use Sora */

h1, h2, h3, h4, h5, h6 {

  font-family: 'Sora', sans-serif;

  font-weight: 700;

}
 
/* Links use Pale Blue as per brand secondary colours */

a {

  color: #00CBFF;

}
 
a:hover {

  color: #FF5500;

}
 
/* Footer */

.footer {

  background-color: #000D28;

}
 
// @ts-check

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
 
  headTags: [

    {

      tagName: 'link',

      attributes: {

        rel: 'preconnect',

        href: 'https://fonts.googleapis.com',

      },

    },

    {

      tagName: 'link',

      attributes: {

        rel: 'stylesheet',

        href: 'https://fonts.googleapis.com/css2?family=Figtree:wght@400;600&family=Sora:wght@700;800&display=swap',

      },

    },

  ],
 
  i18n: {

    defaultLocale: 'en',

    locales: ['en'],

  },
 
  presets: [

    [

      'classic',

      /** @type {import('@docusaurus/preset-classic').Options} */

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

    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

    ({

      image: 'img/softwerx-social-card.jpg',

      colorMode: {

        defaultMode: 'light',

        respectPrefersColorScheme: true,

      },

      navbar: {

        title: 'Softwerx',

        logo: {

          alt: 'Softwerx Logo',

          src: 'img/logo.svg',

          srcDark: 'img/logo-dark.svg',

        },

        items: [

          {

            type: 'docSidebar',

            sidebarId: 'tutorialSidebar',

            position: 'left',

            label: 'Documentation',

          },

        ],

        style: 'primary',

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
 
/* Softwerx Brand - matching softwerx.com aesthetic */
 
/* Import Sora + Figtree */

@import url('https://fonts.googleapis.com/css2?family=Figtree:wght@400;600&family=Sora:wght@700;800&display=swap%27);
 
:root {

  /* Primary: Softwerx Orange */

  --ifm-color-primary: #FF5500;

  --ifm-color-primary-dark: #E64D00;

  --ifm-color-primary-darker: #D94900;

  --ifm-color-primary-darkest: #B33C00;

  --ifm-color-primary-light: #FF6A1A;

  --ifm-color-primary-lighter: #FF7733;

  --ifm-color-primary-lightest: #FF8500;
 
  /* Fonts */

  --ifm-font-family-base: 'Figtree', sans-serif;

  --ifm-heading-font-family: 'Sora', sans-serif;

  --ifm-font-size-base: 16px;
 
  /* Light background */

  --ifm-background-color: #FFFFFF;

  --ifm-background-surface-color: #F7F7F7;
 
  /* Text colours */

  --ifm-font-color-base: #00123A;

  --ifm-heading-color: #00123A;
 
  /* Navbar */

  --ifm-navbar-background-color: #FFFFFF;

  --ifm-navbar-shadow: 0 1px 4px rgba(0, 18, 58, 0.12);

  --ifm-navbar-link-color: #00123A;

  --ifm-navbar-link-hover-color: #FF5500;
 
  /* Sidebar */

  --ifm-sidebar-background-color: #F7F7F7;
 
  /* Links */

  --ifm-link-color: #FF5500;

  --ifm-link-hover-color: #E64D00;
 
  /* Code */

  --ifm-code-font-size: 95%;

  --docusaurus-highlighted-code-line-bg: rgba(255, 85, 0, 0.08);

}
 
/* Dark mode */

[data-theme='dark'] {

  --ifm-color-primary: #FF6A1A;

  --ifm-color-primary-dark: #FF5500;

  --ifm-color-primary-darker: #E64D00;

  --ifm-color-primary-darkest: #B33C00;

  --ifm-color-primary-light: #FF8500;

  --ifm-color-primary-lighter: #FF9933;

  --ifm-color-primary-lightest: #FFAD66;
 
  --ifm-background-color: #00123A;

  --ifm-background-surface-color: #001850;

  --ifm-navbar-background-color: #000D28;

  --ifm-footer-background-color: #000D28;

  --ifm-font-color-base: #FFFFFF;

  --ifm-heading-color: #FFFFFF;

  --ifm-navbar-link-color: #FFFFFF;

  --ifm-link-color: #FF6A1A;

}
 
/* ── NAVBAR ── */

.navbar {

  border-bottom: 2px solid #FF5500;

  padding: 0.6rem 1.5rem;

}
 
.navbar__title {

  font-family: 'Sora', sans-serif;

  font-weight: 700;

  color: #FF5500;

  font-size: 1.3rem;

  letter-spacing: -0.02em;

}
 
.navbar__link {

  font-family: 'Figtree', sans-serif;

  font-weight: 600;

  font-size: 0.95rem;

  color: #00123A;

}
 
.navbar__link:hover,

.navbar__link--active {

  color: #FF5500;

}
 
/* ── HEADINGS ── */

h1 {

  font-family: 'Sora', sans-serif;

  font-weight: 800;

  color: #00123A;

  font-size: 2.2rem;

  line-height: 1.2;

}
 
h2 {

  font-family: 'Sora', sans-serif;

  font-weight: 700;

  color: #FF5500;

  font-size: 1.6rem;

}
 
h3, h4, h5, h6 {

  font-family: 'Sora', sans-serif;

  font-weight: 700;

  color: #00123A;

}
 
/* ── SIDEBAR ── */

.menu__link {

  font-family: 'Figtree', sans-serif;

  font-weight: 400;

  color: #00123A;

  border-radius: 4px;

}
 
.menu__link:hover,

.menu__link--active {

  color: #FF5500;

  background-color: rgba(255, 85, 0, 0.06);

}
 
.menu__link--sublist-caret::after,

.menu__caret::before {

  filter: invert(30%) sepia(80%) saturate(600%) hue-rotate(0deg);

}
 
/* ── BUTTONS ── */

.button--primary {

  background-color: #FF5500;

  border-color: #FF5500;

  font-family: 'Sora', sans-serif;

  font-weight: 700;

  border-radius: 4px;

  letter-spacing: 0.01em;

}
 
.button--primary:hover {

  background-color: #E64D00;

  border-color: #E64D00;

}
 
/* ── FOOTER ── */

.footer {

  background-color: #00123A;

  color: #FFFFFF;

}
 
.footer__title {

  font-family: 'Sora', sans-serif;

  font-weight: 700;

  color: #FF5500;

}
 
.footer__link-item {

  color: rgba(255,255,255,0.75);

  font-family: 'Figtree', sans-serif;

}
 
.footer__link-item:hover {

  color: #FF5500;

}
 
.footer__copyright {

  color: rgba(255,255,255,0.5);

  font-family: 'Figtree', sans-serif;

  font-size: 0.85rem;

}
 
/* ── DOC CONTENT AREA ── */

.markdown p,

.markdown li {

  font-family: 'Figtree', sans-serif;

  color: #00123A;

  line-height: 1.75;

}
 
article a {

  color: #FF5500;

  font-weight: 600;

  text-decoration: none;

}
 
article a:hover {

  text-decoration: underline;

}
 
/* ── PAGINATION BUTTONS ── */

.pagination-nav__link {

  border: 1px solid #FF5500;

  border-radius: 4px;

}
 
.pagination-nav__label {

  color: #FF5500;

  font-family: 'Sora', sans-serif;

  font-weight: 700;

}
 
5s
Run npm run build
  
 
> my-website@0.0.0 build
> docusaurus build
 
Warning: The `siteConfig.onBrokenMarkdownLinks` config option is deprecated and will be removed in Docusaurus v4.
Please migrate and move this option to `siteConfig.markdown.hooks.onBrokenMarkdownLinks` instead.
[INFO] [en] Creating an optimized production build...
Warning: The `siteConfig.onBrokenMarkdownLinks` config option is deprecated and will be removed in Docusaurus v4.
Please migrate and move this option to `siteConfig.markdown.hooks.onBrokenMarkdownLinks` instead.
Error: Client bundle compiled with errors therefore further build is impossible.
│     at /home/runner/work/my-docs/my-docs/node_modules/@rspack/core/dist/index.js:3331:107
 
--------------------------
 
╰─▶   ×
        │ SyntaxError
        │
        │ (333:21) /home/runner/work/my-docs/my-docs/src/css/custom.css Unclosed string
        │
        │   331 |   color: #FF5500;
        │   332 |
        │ > 333 |   font-family: 'Sora', sans-serif;
        │       |                     ^
        │   334 |
        │   335 |   font-weight: 700;
        │
Error: Process completed with exit code 1.
 
/* Softwerx Brand - matching softwerx.com aesthetic */
 
@import url("https://fonts.googleapis.com/css2?family=Figtree:wght@400;600&family=Sora:wght@700;800&display=swap%27);
 
:root {

  --ifm-color-primary: #FF5500;

  --ifm-color-primary-dark: #E64D00;

  --ifm-color-primary-darker: #D94900;

  --ifm-color-primary-darkest: #B33C00;

  --ifm-color-primary-light: #FF6A1A;

  --ifm-color-primary-lighter: #FF7733;

  --ifm-color-primary-lightest: #FF8500;
 
  --ifm-font-family-base: "Figtree", sans-serif;

  --ifm-heading-font-family: "Sora", sans-serif;

  --ifm-font-size-base: 16px;
 
  --ifm-background-color: #FFFFFF;

  --ifm-background-surface-color: #F7F7F7;
 
  --ifm-font-color-base: #00123A;

  --ifm-heading-color: #00123A;
 
  --ifm-navbar-background-color: #FFFFFF;

  --ifm-navbar-shadow: 0 1px 4px rgba(0, 18, 58, 0.12);

  --ifm-navbar-link-color: #00123A;

  --ifm-navbar-link-hover-color: #FF5500;
 
  --ifm-sidebar-background-color: #F7F7F7;
 
  --ifm-link-color: #FF5500;

  --ifm-link-hover-color: #E64D00;
 
  --ifm-code-font-size: 95%;

  --docusaurus-highlighted-code-line-bg: rgba(255, 85, 0, 0.08);

}
 
[data-theme="dark"] {

  --ifm-color-primary: #FF6A1A;

  --ifm-color-primary-dark: #FF5500;

  --ifm-color-primary-darker: #E64D00;

  --ifm-color-primary-darkest: #B33C00;

  --ifm-color-primary-light: #FF8500;

  --ifm-color-primary-lighter: #FF9933;

  --ifm-color-primary-lightest: #FFAD66;
 
  --ifm-background-color: #00123A;

  --ifm-background-surface-color: #001850;

  --ifm-navbar-background-color: #000D28;

  --ifm-footer-background-color: #000D28;

  --ifm-font-color-base: #FFFFFF;

  --ifm-heading-color: #FFFFFF;

  --ifm-navbar-link-color: #FFFFFF;

  --ifm-link-color: #FF6A1A;

}
 
/* ── NAVBAR ── */

.navbar {

  border-bottom: 2px solid #FF5500;

  padding: 0.6rem 1.5rem;

}
 
.navbar__title {

  font-family: "Sora", sans-serif;

  font-weight: 700;

  color: #FF5500;

  font-size: 1.3rem;

  letter-spacing: -0.02em;

}
 
.navbar__link {

  font-family: "Figtree", sans-serif;

  font-weight: 600;

  font-size: 0.95rem;

  color: #00123A;

}
 
.navbar__link:hover,

.navbar__link--active {

  color: #FF5500;

}
 
/* ── HEADINGS ── */

h1 {

  font-family: "Sora", sans-serif;

  font-weight: 800;

  color: #00123A;

  font-size: 2.2rem;

  line-height: 1.2;

}
 
h2 {

  font-family: "Sora", sans-serif;

  font-weight: 700;

  color: #FF5500;

  font-size: 1.6rem;

}
 
h3, h4, h5, h6 {

  font-family: "Sora", sans-serif;

  font-weight: 700;

  color: #00123A;

}
 
/* ── SIDEBAR ── */

.menu__link {

  font-family: "Figtree", sans-serif;

  font-weight: 400;

  color: #00123A;

  border-radius: 4px;

}
 
.menu__link:hover,

.menu__link--active {

  color: #FF5500;

  background-color: rgba(255, 85, 0, 0.06);

}
 
.menu__link--sublist-caret::after,

.menu__caret::before {

  filter: invert(30%) sepia(80%) saturate(600%) hue-rotate(0deg);

}
 
/* ── BUTTONS ── */

.button--primary {

  background-color: #FF5500;

  border-color: #FF5500;

  font-family: "Sora", sans-serif;

  font-weight: 700;

  border-radius: 4px;

  letter-spacing: 0.01em;

}
 
.button--primary:hover {

  background-color: #E64D00;

  border-color: #E64D00;

}
 
/* ── FOOTER ── */

.footer {

  background-color: #00123A;

  color: #FFFFFF;

}
 
.footer__title {

  font-family: "Sora", sans-serif;

  font-weight: 700;

  color: #FF5500;

}
 
.footer__link-item {

  color: rgba(255,255,255,0.75);

  font-family: "Figtree", sans-serif;

}
 
.footer__link-item:hover {

  color: #FF5500;

}
 
.footer__copyright {

  color: rgba(255,255,255,0.5);

  font-family: "Figtree", sans-serif;

  font-size: 0.85rem;

}
 
/* ── DOC CONTENT AREA ── */

.markdown p,

.markdown li {

  font-family: "Figtree", sans-serif;

  color: #00123A;

  line-height: 1.75;

}
 
article a {

  color: #FF5500;

  font-weight: 600;

  text-decoration: none;

}
 
article a:hover {

  text-decoration: underline;

}
 
/* ── PAGINATION BUTTONS ── */

.pagination-nav__link {

  border: 1px solid #FF5500;

  border-radius: 4px;

}
 
.pagination-nav__label {

  color: #FF5500;

  font-family: "Sora", sans-serif;

  font-weight: 700;

}
 
5s
Run npm run build
> my-website@0.0.0 build
> docusaurus build
Warning: The `siteConfig.onBrokenMarkdownLinks` config option is deprecated and will be removed in Docusaurus v4.
Please migrate and move this option to `siteConfig.markdown.hooks.onBrokenMarkdownLinks` instead.
[INFO] [en] Creating an optimized production build...
Warning: The `siteConfig.onBrokenMarkdownLinks` config option is deprecated and will be removed in Docusaurus v4.
Please migrate and move this option to `siteConfig.markdown.hooks.onBrokenMarkdownLinks` instead.
Error: Client bundle compiled with errors therefore further build is impossible.
│     at /home/runner/work/my-docs/my-docs/node_modules/@rspack/core/dist/index.js:3331:107
--------------------------
╰─▶   ×
        │ SyntaxError
        │
        │ (316:21) /home/runner/work/my-docs/my-docs/src/css/custom.css Unclosed string
        │
        │   314 |   color: #FF5500;
        │   315 |
        │ > 316 |   font-family: "Sora", sans-serif;
        │       |                     ^
        │   317 |
        │   318 |   font-weight: 700;
        │
Error: Process completed with exit code 1.
0s
0s
0s
0s
0s
Post job cleanup.
/usr/bin/git version
git version 2.53.0
Temporarily overriding HOME='/home/runner/work/_temp/21ce5f05-c7c6-45ba-b5f5-b2be1adeb58e' before making global git config changes
Adding repository directory to the temporary git global config as a safe directory
/usr/bin/git config --global --add safe.directory /home/runner/work/my-docs/my-docs
/usr/bin/git config --local --name-only --get-regexp core\.sshCommand
/usr/bin/git submodule foreach --recursive sh -c "git config --local --name-only --get-regexp 'core\.sshCommand' && git config --local --unset-all 'core.sshCommand' || :"
/usr/bin/git config --local --name-only --get-regexp http\.https\:\/\/github\.com\/\.extraheader
http.https://github.com/.extraheader
/usr/bin/git config --local --unset-all http.https://github.com/.extraheader
/usr/bin/git submodule foreach --recursive sh -c "git config --local --name-only --get-regexp 'http\.https\:\/\/github\.com\/\.extraheader' && git config --local --unset-all 'http.https://github.com/.extraheader' || :"
/usr/bin/git config --local --name-only --get-regexp ^includeIf\.gitdir:
/usr/bin/git submodule foreach --recursive git config --local --show-origin --name-only --get-regexp remote.origin.url
0s
Footer
© 2026 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Community
Docs
Contact
Manage cookies
Do not share my personal information


 
:root {

  --ifm-color-primary: #FF5500;

  --ifm-color-primary-dark: #E64D00;

  --ifm-color-primary-darker: #D94900;

  --ifm-color-primary-darkest: #B33C00;

  --ifm-color-primary-light: #FF6A1A;

  --ifm-color-primary-lighter: #FF7733;

  --ifm-color-primary-lightest: #FF8500;
 
  --ifm-background-color: #FFFFFF;

  --ifm-background-surface-color: #F7F7F7;

  --ifm-font-color-base: #00123A;

  --ifm-heading-color: #00123A;

  --ifm-navbar-background-color: #FFFFFF;

  --ifm-navbar-shadow: 0 1px 4px rgba(0, 18, 58, 0.12);

  --ifm-navbar-link-color: #00123A;

  --ifm-navbar-link-hover-color: #FF5500;

  --ifm-sidebar-background-color: #F7F7F7;

  --ifm-link-color: #FF5500;

  --ifm-link-hover-color: #E64D00;

  --ifm-code-font-size: 95%;

  --docusaurus-highlighted-code-line-bg: rgba(255, 85, 0, 0.08);

}
 
[data-theme=dark] {

  --ifm-color-primary: #FF6A1A;

  --ifm-color-primary-dark: #FF5500;

  --ifm-color-primary-darker: #E64D00;

  --ifm-color-primary-darkest: #B33C00;

  --ifm-color-primary-light: #FF8500;

  --ifm-color-primary-lighter: #FF9933;

  --ifm-color-primary-lightest: #FFAD66;

  --ifm-background-color: #00123A;

  --ifm-background-surface-color: #001850;

  --ifm-navbar-background-color: #000D28;

  --ifm-footer-background-color: #000D28;

  --ifm-font-color-base: #FFFFFF;

  --ifm-heading-color: #FFFFFF;

  --ifm-navbar-link-color: #FFFFFF;

  --ifm-link-color: #FF6A1A;

}
 
.navbar {

  border-bottom: 2px solid #FF5500;

  padding: 0.6rem 1.5rem;

}
 
.navbar__title {

  font-weight: 700;

  color: #FF5500;

  font-size: 1.3rem;

  letter-spacing: -0.02em;

}
 
.navbar__link {

  font-weight: 600;

  font-size: 0.95rem;

  color: #00123A;

}
 
.navbar__link:hover,

.navbar__link--active {

  color: #FF5500;

}
 
h1 {

  font-weight: 800;

  color: #00123A;

  font-size: 2.2rem;

  line-height: 1.2;

}
 
h2 {

  font-weight: 700;

  color: #FF5500;

  font-size: 1.6rem;

}
 
h3, h4, h5, h6 {

  font-weight: 700;

  color: #00123A;

}
 
.menu__link {

  font-weight: 400;

  color: #00123A;

  border-radius: 4px;

}
 
.menu__link:hover,

.menu__link--active {

  color: #FF5500;

  background-color: rgba(255, 85, 0, 0.06);

}
 
.button--primary {

  background-color: #FF5500;

  border-color: #FF5500;

  font-weight: 700;

  border-radius: 4px;

}
 
.button--primary:hover {

  background-color: #E64D00;

  border-color: #E64D00;

}
 
.footer {

  background-color: #00123A;

  color: #FFFFFF;

}
 
.footer__title {

  font-weight: 700;

  color: #FF5500;

}
 
.footer__link-item {

  color: rgba(255,255,255,0.75);

}
 
.footer__link-item:hover {

  color: #FF5500;

}
 
.footer__copyright {

  color: rgba(255,255,255,0.5);

  font-size: 0.85rem;

}
 
.markdown p,

.markdown li {

  color: #00123A;

  line-height: 1.75;

}
 
article a {

  color: #FF5500;

  font-weight: 600;

  text-decoration: none;

}
 
article a:hover {

  text-decoration: underline;

}
 
.pagination-nav__link {

  border: 1px solid #FF5500;

  border-radius: 4px;

}
 
.pagination-nav__label {

  color: #FF5500;

  font-weight: 700;

}
 
Softwerx-Logo_Without-Lockup_RGB_Full-Colour.png (635×228)
 
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
 
.navbar {

  background-color: #FFFFFF;

  border-bottom: 3px solid #FF5500;

  padding: 0.6rem 1.5rem;

  box-shadow: 0 1px 4px rgba(0, 18, 58, 0.10);

}
 
.navbar__title {

  font-weight: 700;

  color: #FF5500;

  font-size: 1.3rem;

  letter-spacing: -0.02em;

}
 
.navbar__link {

  font-weight: 600;

  font-size: 0.95rem;

  color: #00123A;

}
 
.navbar__link:hover,

.navbar__link--active {

  color: #FF5500;

}
 
[data-theme=dark] .navbar {

  background-color: #000D28;

  border-bottom: 3px solid #FF5500;

}
 
[data-theme=dark] .navbar__link {

  color: #FFFFFF;

}
 
[data-theme=dark] .navbar__title {

  color: #FF5500;

}
 
this error: 
 
1s
Run npm run build
> my-website@0.0.0 build
> docusaurus build
Error: Error: Docusaurus could not load module at path "/home/runner/work/my-docs/my-docs/docusaurus.config.js"
    at loadFreshModule (/home/runner/work/my-docs/my-docs/node_modules/@docusaurus/utils/lib/moduleUtils.js:36:15)
    at loadSiteConfig (/home/runner/work/my-docs/my-docs/node_modules/@docusaurus/core/lib/server/config.js:36:62)
    ... 4 lines matching cause stack trace ...
    at async file:///home/runner/work/my-docs/my-docs/node_modules/@docusaurus/core/bin/docusaurus.mjs:44:3 {
  [cause]: Error: ParseError: Unexpected token, expected ","  
   /home/runner/work/my-docs/my-docs/docusaurus.config.js:73:12
      at loadFreshModule (/home/runner/work/my-docs/my-docs/node_modules/@docusaurus/utils/lib/moduleUtils.js:33:16)
      at loadSiteConfig (/home/runner/work/my-docs/my-docs/node_modules/@docusaurus/core/lib/server/config.js:36:62)
      at async getLocalesToBuild (/home/runner/work/my-docs/my-docs/node_modules/@docusaurus/core/lib/commands/build/build.js:52:28)
      at async Command.build (/home/runner/work/my-docs/my-docs/node_modules/@docusaurus/core/lib/commands/build/build.js:29:21)
      at async Promise.all (index 0)
      at async runCLI (/home/runner/work/my-docs/my-docs/node_modules/@docusaurus/core/lib/commands/cli.js:56:5)
      at async file:///home/runner/work/my-docs/my-docs/node_modules/@docusaurus/core/bin/docusaurus.mjs:44:3
}
[INFO] Docusaurus version: 3.10.0
Node version: v20.20.2
Error: Process completed with exit code 1.
 
:root {

  --ifm-color-primary: #FF5500;

  --ifm-color-primary-dark: #E64D00;

  --ifm-color-primary-darker: #D94900;

  --ifm-color-primary-darkest: #B33C00;

  --ifm-color-primary-light: #FF6A1A;

  --ifm-color-primary-lighter: #FF7733;

  --ifm-color-primary-lightest: #FF8500;

  --ifm-background-color: #FFFFFF;

  --ifm-background-surface-color: #F7F7F7;

  --ifm-font-color-base: #00123A;

  --ifm-heading-color: #00123A;

  --ifm-navbar-background-color: #FFFFFF;

  --ifm-navbar-shadow: 0 1px 4px rgba(0, 18, 58, 0.12);

  --ifm-navbar-link-color: #00123A;

  --ifm-navbar-link-hover-color: #FF5500;

  --ifm-sidebar-background-color: #F7F7F7;

  --ifm-link-color: #FF5500;

  --ifm-link-hover-color: #E64D00;

  --ifm-code-font-size: 95%;

  --docusaurus-highlighted-code-line-bg: rgba(255, 85, 0, 0.08);

}

[data-theme=dark] {

  --ifm-color-primary: #FF6A1A;

  --ifm-color-primary-dark: #FF5500;

  --ifm-color-primary-darker: #E64D00;

  --ifm-color-primary-darkest: #B33C00;

  --ifm-color-primary-light: #FF8500;

  --ifm-color-primary-lighter: #FF9933;

  --ifm-color-primary-lightest: #FFAD66;

  --ifm-background-color: #00123A;

  --ifm-background-surface-color: #001850;

  --ifm-navbar-background-color: #000D28;

  --ifm-footer-background-color: #000D28;

  --ifm-font-color-base: #FFFFFF;

  --ifm-heading-color: #FFFFFF;

  --ifm-navbar-link-color: #FFFFFF;

  --ifm-link-color: #FF6A1A;

}

.navbar {

  background-color: #FFFFFF;

  border-bottom: 3px solid #FF5500;

  padding: 0.6rem 1.5rem;

  box-shadow: 0 1px 4px rgba(0, 18, 58, 0.10);

}

.navbar__title {

  font-weight: 700;

  color: #FF5500;

  font-size: 1.3rem;

  letter-spacing: -0.02em;

}

.navbar__link {

  font-weight: 600;

  font-size: 0.95rem;

  color: #00123A;

}

.navbar__link:hover,

.navbar__link--active {

  color: #FF5500;

}

[data-theme=dark] .navbar {

  background-color: #000D28;

  border-bottom: 3px solid #FF5500;

}

[data-theme=dark] .navbar__link {

  color: #FFFFFF;

}

[data-theme=dark] .navbar__title {

  color: #FF5500;

}

h1 {

  font-weight: 800;

  color: #00123A;

  font-size: 2.2rem;

  line-height: 1.2;

}

h2 {

  font-weight: 700;

  color: #FF5500;

  font-size: 1.6rem;

}

h3, h4, h5, h6 {

  font-weight: 700;

  color: #00123A;

}

.menu__link {

  font-weight: 400;

  color: #00123A;

  border-radius: 4px;

}

.menu__link:hover,

.menu__link--active {

  color: #FF5500;

  background-color: rgba(255, 85, 0, 0.06);

}

.button--primary {

  background-color: #FF5500;

  border-color: #FF5500;

  font-weight: 700;

  border-radius: 4px;

}

.button--primary:hover {

  background-color: #E64D00;

  border-color: #E64D00;

}

.footer {

  background-color: #00123A;

  color: #FFFFFF;

}

.footer__title {

  font-weight: 700;

  color: #FF5500;

}

.footer__link-item {

  color: rgba(255,255,255,0.75);

}

.footer__link-item:hover {

  color: #FF5500;

}

.footer__copyright {

  color: rgba(255,255,255,0.5);

  font-size: 0.85rem;

}

.markdown p,

.markdown li {

  color: #00123A;

  line-height: 1.75;

}

article a {

  color: #FF5500;

  font-weight: 600;

  text-decoration: none;

}

article a:hover {

  text-decoration: underline;

}

.pagination-nav__link {

  border: 1px solid #FF5500;

  border-radius: 4px;

}

.pagination-nav__label {

  color: #FF5500;

  font-weight: 700;

}
 
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

  presets: [

    [

      'classic',

      /** @type {import('@docusaurus/preset-classic').Options} */

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

    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

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

        items: [

          {

            type: 'docSidebar',

            sidebarId: 'tutorialSidebar',

            position: 'left',

            label: 'Documentation',

          },

        ],

        style: 'primary',

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
 
:root {

  --ifm-color-primary: #FF5500;

  --ifm-color-primary-dark: #E64D00;

  --ifm-color-primary-darker: #D94900;

  --ifm-color-primary-darkest: #B33C00;

  --ifm-color-primary-light: #FF6A1A;

  --ifm-color-primary-lighter: #FF7733;

  --ifm-color-primary-lightest: #FF8500;
 
  --ifm-background-color: #FFFFFF;

  --ifm-background-surface-color: #F7F7F7;

  --ifm-font-color-base: #00123A;

  --ifm-heading-color: #00123A;

  --ifm-navbar-background-color: #FFFFFF;

  --ifm-navbar-shadow: 0 1px 4px rgba(0, 18, 58, 0.12);

  --ifm-navbar-link-color: #00123A;

  --ifm-navbar-link-hover-color: #FF5500;

  --ifm-sidebar-background-color: #F7F7F7;

  --ifm-link-color: #FF5500;

  --ifm-link-hover-color: #E64D00;

  --ifm-code-font-size: 95%;

  --docusaurus-highlighted-code-line-bg: rgba(255, 85, 0, 0.08);

}
 
[data-theme=dark] {

  --ifm-color-primary: #FF6A1A;

  --ifm-color-primary-dark: #FF5500;

  --ifm-color-primary-darker: #E64D00;

  --ifm-color-primary-darkest: #B33C00;

  --ifm-color-primary-light: #FF8500;

  --ifm-color-primary-lighter: #FF9933;

  --ifm-color-primary-lightest: #FFAD66;

  --ifm-background-color: #00123A;

  --ifm-background-surface-color: #001850;

  --ifm-navbar-background-color: #000D28;

  --ifm-footer-background-color: #000D28;

  --ifm-font-color-base: #FFFFFF;

  --ifm-heading-color: #FFFFFF;

  --ifm-navbar-link-color: #FFFFFF;

  --ifm-link-color: #FF6A1A;

}
 
[data-theme=dark] h2 {

  color: #FF8500;

}
 
[data-theme=dark] h3,

[data-theme=dark] h4,

[data-theme=dark] h5,

[data-theme=dark] h6 {

  color: #FFFFFF;

}
 
.navbar {

  background-color: #FFFFFF;

  border-bottom: 3px solid #FF5500;

  padding: 0.6rem 1.5rem;

  box-shadow: 0 1px 4px rgba(0, 18, 58, 0.10);

}
 
.navbar__title {

  font-weight: 700;

  color: #FF5500;

  font-size: 1.3rem;

  letter-spacing: -0.02em;

}
 
.navbar__link {

  font-weight: 600;

  font-size: 0.95rem;

  color: #00123A;

}
 
.navbar__link:hover,

.navbar__link--active {

  color: #FF5500;

}
 
[data-theme=dark] .navbar {

  background-color: #000D28;

  border-bottom: 3px solid #FF5500;

}
 
[data-theme=dark] .navbar__link {

  color: #FFFFFF;

}
 
[data-theme=dark] .navbar__title {

  color: #FF5500;

}
 
h1 {

  font-weight: 800;

  color: #00123A;

  font-size: 2.2rem;

  line-height: 1.2;

}
 
h2 {

  font-weight: 700;

  color: #FF5500;

  font-size: 1.6rem;

}
 
h3, h4, h5, h6 {

  font-weight: 700;

  color: #00123A;

}
 
.menu__link {

  font-weight: 400;

  color: #00123A;

  border-radius: 4px;

}
 
.menu__link:hover,

.menu__link--active {

  color: #FF5500;

  background-color: rgba(255, 85, 0, 0.06);

}
 
.button--primary {

  background-color: #FF5500;

  border-color: #FF5500;

  font-weight: 700;

  border-radius: 4px;

}
 
.button--primary:hover {

  background-color: #E64D00;

  border-color: #E64D00;

}
 
.footer {

  background-color: #00123A;

  color: #FFFFFF;

}
 
.footer__title {

  font-weight: 700;

  color: #FF5500;

}
 
.footer__link-item {

  color: rgba(255,255,255,0.75);

}
 
.footer__link-item:hover {

  color: #FF5500;

}
 
.footer__copyright {

  color: rgba(255,255,255,0.5);

  font-size: 0.85rem;

}
 
.markdown p,

.markdown li {

  color: #00123A;

  line-height: 1.75;

}
 
[data-theme=dark] .markdown p,

[data-theme=dark] .markdown li {

  color: #FFFFFF;

}
 
article a {

  color: #FF5500;

  font-weight: 600;

  text-decoration: none;

}
 
article a:hover {

  text-decoration: underline;

}
 
.pagination-nav__link {

  border: 1px solid #FF5500;

  border-radius: 4px;

}
 
.pagination-nav__label {

  color: #FF5500;

  font-weight: 700;

}
 
import React from 'react';

import Link from '@docusaurus/Link';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Layout from '@theme/Layout';

import styles from './index.module.css';
 
const features = [

  {

    icon: '🛡️',

    title: 'Threat Detection & Response',

    description:

      'Criminals operate 24x7 — and so do we. Our security operations provide continuous monitoring to detect and respond to threats before they cause damage.',

  },

  {

    icon: '☁️',

    title: 'Microsoft Security Specialists',

    description:

      'As a leading Microsoft Security Practice, we help mid-market organisations get the most out of Microsoft Sentinel, Defender, and the full Microsoft security stack.',

  },

  {

    icon: '📋',

    title: 'Product Documentation',

    description:

      'Everything you need to understand our products, onboarding processes, and service expectations — all in one place.',

  },

];
 
function HomepageHeader() {

  const {siteConfig} = useDocusaurusContext();

  return (
<header className={styles.heroBanner}>
<div className={styles.heroInner}>
<h1 className={styles.heroTitle}>{siteConfig.title}</h1>
<p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
<Link className={styles.heroButton} to="/docs/intro">

          View Documentation
</Link>
</div>
</header>

  );

}
 
function FeatureCard({icon, title, description}) {

  return (
<div className={styles.card}>
<div className={styles.cardIcon}>{icon}</div>
<h3 className={styles.cardTitle}>{title}</h3>
<p className={styles.cardDescription}>{description}</p>
</div>

  );

}
 
export default function Home() {

  return (
<Layout description="Softwerx product documentation and guides">
<HomepageHeader />
<main>
<section className={styles.featuresSection}>
<div className={styles.featuresGrid}>

            {features.map((f, i) => (
<FeatureCard key={i} {...f} />

            ))}
</div>
</section>
</main>
</Layout>

  );

}
 
