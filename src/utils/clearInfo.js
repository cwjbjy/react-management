import {removeCookie} from './cookie'
import ls from 'local-storage'

const clearInfo = ()=>{
    removeCookie('token')
    ls.remove('menu')
} 

export default clearInfo