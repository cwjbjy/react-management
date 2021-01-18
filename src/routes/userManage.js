

import {lazy} from "react";
const UserManage = lazy(()=>import(/* webpackChunkName: "userManage" */'@/pages/userManage/index.jsx'))

const userManage = [
    {
        path:'/home/manage',
        Component:UserManage,
        auth:true,
        meta:{
            title:'后台管理'
        }
    },
]

export default userManage