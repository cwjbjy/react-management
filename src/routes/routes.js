import {lazy} from "react";


const Login = lazy(()=>import(/* webpackChunkName: "Login" */ '../pages/login/index.jsx'))
const AppHome = lazy(()=>import(/* webpackChunkName: "AppHome" */ '../layout/AppHome.jsx'))
const HomePage = lazy(()=>import(/* webpackChunkName: "homePage" */'../pages/homePage/index.jsx'))
const Chart = lazy(()=>import(/* webpackChunkName: "Chart" */'../pages/chart/index.jsx'))

const routes=[
    {
        path:'/',
        redirect: '/login'
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/home',
        component:AppHome,
        children:[
            {
                path:'/home/homePage',
                component:HomePage
            },
            {
                path:'/home/chart',
                component:Chart
            }
        ]
    }
]

export default routes