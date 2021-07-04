import loadable from "@/utils/loadable"
const Login = loadable(()=>import(/* webpackChunkName: "Login" */ '@/pages/login/index.jsx'))

const login = [
    {
        path:'/login',
        Component:Login,
        auth:false,
        layout:'NONE',
    },
]

export default login