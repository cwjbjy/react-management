import {lazy} from "react";
const PdfPreview = lazy(()=>import(/* webpackChunkName: "PdfPreview" */ '@/pages/pdfPreview/index.jsx'))

const pdf = [
    {
        path:'/pdf',
        Component:PdfPreview,
        auth:true,
        meta:{
            title:'pdf'
        }
    },
]

export default pdf