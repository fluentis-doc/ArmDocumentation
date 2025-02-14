import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fluentis ARM Documentation',
  tagline: 'La guida progettata per supportarti nell’uso dell’Application Resource Manager',
  url: 'https://docs.fluentis.com',
  baseUrl: '/Arm/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/fluentis-32x32px.png',
  organizationName: 'Fluentis srl', 
  projectName: 'ARM', 
  i18n: {
    defaultLocale: 'it-IT',
    locales: ['en-US', 'it-IT'],
    localeConfigs: {
      "en-US": {
        label: 'English',
      },
      "it-IT": {
        label: 'Italiano',
      },
    },
  },
  themeConfig: {
    navbar: {
      title: 'Arm',
      logo: {
        alt: 'Logo',
        src: 'img/fluentis.svg',
        className: 'logo'
      },
      items: [
        {
          label: 'Home',
          position: 'left',
          items: [
            { label: 'License', to: 'docs/arm/home/license1' },
            { label: 'Company', to: 'docs/arm/home/company' },
            { label: 'Connections', to: 'docs/arm/home/connections'},
            { label: 'Applications', to: 'docs/arm/home/Applications/dictionary' },
            { label: 'Database Management', to: 'docs/arm/home/Database Management/database'},
            { label: 'Custom Data Management', to: 'docs/arm/home/custom/snapshots' },
            { label: 'Context', to: 'docs/arm/home/context' },
            { label: 'Themes', to: 'docs/arm/home/Themes' },
          ]
        },
        {
          label: 'Platform',
          position: 'left',
          items: [
            { label: 'Users', to: 'docs/arm/platform/users/' },
            { label: 'Ribbon', to: 'docs/arm/platform/ribbon' },
            { label: 'Wizards', to: 'docs/specifications/Fluentis%20Web/specifications' },
            { label: 'WebApi', to: 'docs/specifications/FluentisMobile/specification' },
            { label: 'Objects Repository', to: 'docs/specifications/FluentisMobile/specification' },
            { label: 'Business Processes', to: 'docs/specifications/FluentisMobile/specification' },
            { label: 'Auti Trail', to: 'docs/specifications/FluentisMobile/specification' },
            { label: 'Chat Bot Options', to: 'docs/specifications/FluentisMobile/specification' },
          ]
        },

        {
          to: 'docs/FAQ/WINDOWSFAQ',
          label: 'FAQ',
          position: 'right',
        },
        {
          to: '#',
          label: 'Release Notes',
          position: 'right',
          items: [
            {
              label: '1.2.71',
              href: '#'
            },
            {
              label: '1.2.70',
              href: '#',
            },
          ],
        },
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {

          title: 'Fluentis Documentation',
          items: [
            {
              label: 'Fluentis Academy',
              href: 'https://docs.fluentis.com/FluentisErp/',
            },
            {
              label: 'ARM',
              href: 'https://docs.fluentis.com/Arm/',
            },
            {
              label: 'Fluentis Live Update',
              href: 'https://docs.fluentis.com/FluentisLiveUpdate/',
            },
          ],
        },
        {
          title: 'Fluentis Advanced',
          items: [
            {
              label: 'Integration',
              href: 'https://docs.fluentis.com/Integration/',
            },
            {
              label: 'Installation',
              href: 'https://docs.fluentis.com/Advanced/FluentisLiveUpdate/',
            },
            {
              label: 'Migration',
              href: 'https://internal-docs.fluentis.com/Partners/Customization/',
            },
          ],
        },

        {
          title: 'Fluentis Training',
          items: [
            {
              label: 'Training',
              href: 'https://training.fluentis.com/',
            },
          ],
        },
        {
          title: 'About Fluentis',
          items: [
            {
              label: ' Web Site',
              href: 'https://www.fluentis.com/it/',
              className: 'icon bi bi-arrow-up-right-circle-fill',
            },
            {
              label: ' Instagram',
              href: 'https://www.instagram.com/fluentis.erp/',
              className: 'icon bi bi-instagram',
            },
            {
              label: ' Facebook',
              href: 'https://www.facebook.com/FluentisSrl',
              className: 'icon bi bi-facebook',
            },
            {
              label: ' Youtube',
              href: 'https://www.youtube.com/@formazionefluentis',
              className: 'icon bi bi-youtube',
            },
          ],
        },
      ],
      copyright: `FLUENTIS SRL ${new Date().getFullYear()} | C.F. e P.IVA IT01720550936`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          showLastUpdateTime: false,
        },
        /* blog: {
          showReadingTime: true,
          // Please change this to your repo.
        }, */
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // whether to index docs pages
        indexDocs: true,

        // Whether to also index the titles of the parent categories in the sidebar of a doc page.
        // 0 disables this feature.
        // 1 indexes the direct parent category in the sidebar of a doc page
        // 2 indexes up to two nested parent categories of a doc page
        // 3...
        //
        // Do _not_ use Infinity, the value must be a JSON-serializable integer.
        indexDocSidebarParentCategories: 0,

        // whether to index blog pages
        indexBlog: true,

        // whether to index static pages
        // /404.html is never indexed
        indexPages: false,

        // language of your documentation, see next section
        language: ['en', 'it', 'pt', 'ro'],

        // setting this to "none" will prevent the default CSS to be included. The default CSS
        // comes from autocomplete-theme-classic, which you can read more about here:
        // https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-theme-classic/
        // When you want to overwrite CSS variables defined by the default theme, make sure to suffix your
        // overwrites with `!important`, because they might otherwise not be applied as expected. See the
        // following comment for more information: https://github.com/cmfcmf/docusaurus-search-local/issues/107#issuecomment-1119831938.
        style: undefined,

        // The maximum number of search results shown to the user. This does _not_ affect performance of
        // searches, but simply does not display additional search results that have been found.
        maxSearchResults: 64,

        // lunr.js-specific settings
        lunr: {
          // When indexing your documents, their content is split into "tokens".
          // Text entered into the search box is also tokenized.
          // This setting configures the separator used to determine where to split the text into tokens.
          // By default, it splits the text at whitespace and dashes.
          //
          // Note: Does not work for "ja" and "th" languages, since these use a different tokenizer.
          tokenizerSeparator: /[\s\-]+/,
          // https://lunrjs.com/guides/customising.html#similarity-tuning
          //
          // This parameter controls the importance given to the length of a document and its fields. This
          // value must be between 0 and 1, and by default it has a value of 0.75. Reducing this value
          // reduces the effect of different length documents on a term’s importance to that document.
          b: 0.75,
          // This controls how quickly the boost given by a common word reaches saturation. Increasing it
          // will slow down the rate of saturation and lower values result in quicker saturation. The
          // default value is 1.2. If the collection of documents being indexed have high occurrences
          // of words that are not covered by a stop word filter, these words can quickly dominate any
          // similarity calculation. In these cases, this value can be reduced to get more balanced results.
          k1: 1.2,
          // By default, we rank pages where the search term appears in the title higher than pages where
          // the search term appears in just the text. This is done by "boosting" title matches with a
          // higher value than content matches. The concrete boosting behavior can be controlled by changing
          // the following settings.
          titleBoost: 5,
          contentBoost: 1,
          tagsBoost: 3,
          parentCategoriesBoost: 2, // Only used when indexDocSidebarParentCategories > 0
        }
      },
    ],
  ],
};


export default config