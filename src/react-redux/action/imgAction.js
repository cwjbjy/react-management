import API from '@/service/index'
import {SETIMAGE} from '../constant'
import { img_url } from "@/service/lib/baseUrl.js";

const getImage = (params) => {
    return dispatch => {
        return API.getImage(params).then(res => {
            let fileName = res.Data[0].photo;
            let imgURL = `${img_url}${fileName}`;
            dispatch({
                type:SETIMAGE,
                value:imgURL
            })
        })
    }
}

export {getImage}