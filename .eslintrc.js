module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
    ecmaVersion: 2018
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'plugin:nuxt/recommended',
    'plugin:tailwindcss/recommended'
  ],
  plugins: ['tailwindcss'],
  rules: {
    'tailwindcss/classnames-order': 'error',
    'tailwindcss/no-contradicting-classname': 'error',
    'tailwindcss/no-custom-classname': [
      'warn',
      {
        whitelist: [
          'animation\\-([0-z]+(\\-[0-z]+)*)',
          'custom\\-([0-z]+(\\-[0-z]+)*)'
        ]
      }
    ]
  }
}
