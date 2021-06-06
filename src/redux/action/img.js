import API from '@/service/index'
import {SETIMAGE} from '../../constant/store'
import { img_url } from "@/service/lib/baseUrl.js";

export const SET_IMAGE = (params) => {
    return dispatch => {
        return API.getImage(params).then(res => {
            let fileName = res.Data[0]?.photo;
            let imgURL = `${img_url}${fileName}`;
            dispatch({
                type:SETIMAGE,
                value:imgURL
            })
        })
    }
}