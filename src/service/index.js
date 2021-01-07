const files = require.context('.', false, /\.js$/)
const API = {}

files.keys().forEach(key => {
  if (key === './index.js') return
  const item = files(key).default
  Object.assign(API,{...item})
})

export default API