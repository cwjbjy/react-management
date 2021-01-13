const files = require.context('.', false, /\.js$/)
const routes = []

files.keys().forEach(key => {
  if (key === './index.js') return
  const item = files(key).default
  routes.push(...item)
})

export default routes