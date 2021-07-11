import {removeCookie} from './cookie'

const clearInfo = ()=>{
    removeCookie('token')
    localStorage.removeItem('imgUrl')
} 

export default clearInfo