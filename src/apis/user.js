
import {GET_DATA} from '@/config/apiMap'
import {auth_url} from '@/config/urlMap.js'
import instance from '@/service/axios/index.js'

export const getData = ()=>{
    return instance.get(`${auth_url}${GET_DATA}`)
}