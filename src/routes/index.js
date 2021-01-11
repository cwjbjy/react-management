/*
 * @description: 
 */
import {lazy} from "react";

const Login = lazy(()=>import(/* webpackChunkName: "Login" */ '../pages/login/index.jsx'))
const AppHome = lazy(()=>import(/* webpackChunkName: "AppHome" */ '../layout/AppHome.jsx'))
const HomePage = lazy(()=>import(/* webpackChunkName: "homePage" */'../pages/homePage/index.jsx'))
const Chart = lazy(()=>import(/* webpackChunkName: "Chart" */'../pages/chart/index.jsx'))
const NotFound = lazy(()=>import(/* webpackChunkName: "NotFound" */ '../components/notFound/index.jsx'))

const routes=[
    {
        path:'/',
        exact:true,
        auth:false,
        redirect: '/login',
    },
    {
        path:'/login',
        component:Login,
        exact:true,
        auth:false,
        meta:{
            title:'登录'
        }
    },
    {
        path:'/home',
        component:AppHome,
        exact:false,
        auth:true,
        meta:{
            title:'主页'
        },
        children:[
            {
                path:'/home/homePage',
                component:HomePage,
                exact:true,
                auth:true,
                meta:{
                    title:'主页'
                }
            },
            {
                path:'/home/chart',
                component:Chart,
                exact:true,
                auth:true,
                meta:{
                    title:'图形页'
                }
            }
        ]
    },
    {
        path:'*',
        component:NotFound,
        exact:false,
        auth:false,
        meta:{
            title:'404页面'
        }
    }
]

export default routes