/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('./node_modules/tb-ds-library/config/tailwind.config.js')
  ],
  content: [
    './components/**/*.vue',
    './pages/**/*.vue',
    './layouts/**/*.vue',
    './nuxt.config.js',
    './node_modules/tb-ds-library/components/**/*.vue',
    './node_modules/tb-ds-library/pages/**/*.vue',
    './node_modules/tb-ds-library/config/plugins/**/*.js',
    './node_modules/tb-ds-library/config/nuxt.config.js'
  ]
}
