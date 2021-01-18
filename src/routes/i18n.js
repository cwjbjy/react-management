import {lazy} from "react";

const I18n = lazy(()=>import(/* webpackChunkName: "I18n" */'@/pages/I18n/index.jsx'))


const i18n = [
    {
        path:'/home/I18n',
        Component:I18n,
        auth:true,
        meta:{
            title:'语言转换'
        }
    },
]

export default i18n