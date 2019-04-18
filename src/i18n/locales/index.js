/* eslint-disable global-require */

const localeData = [
  ...require('react-intl/locale-data/zh'),
  ...require('react-intl/locale-data/en'),
]

module.exports = {
  localeData,
  defaultLocale: 'zh-Hant-TW',
  languages: [
    { value: 'zh-Hant-TW', text: '繁體中文' },
    { value: 'en-US', text: 'English' },
  ],
}
