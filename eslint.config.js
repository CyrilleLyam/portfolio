import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  vue: true,
  ignores: [
    '**/nuxt.config.*',
    '**/uno.config.*',
    '.nuxt',
    '.output',
    'dist',
    'node_modules',
  ],
})
