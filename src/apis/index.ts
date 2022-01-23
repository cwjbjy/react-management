const files = require.context('.', false, /\.js$/)
const API:any = {}

files.keys().forEach((key:string) => {
  if (key === './index.js') return
  const item = files(key).default
  Object.assign(API,{...item})
})

export default API