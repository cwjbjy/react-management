import {ACCESS_TOKEN} from '@/config/constant'

export const clearAuthAndRedirect = () =>{
    localStorage.removeItem(ACCESS_TOKEN)
    /* 用改方式跳转，无法触发react销毁钩子，可能会导致内存泄漏问题，
    这里是临时解决方案 */
    window.location.href = '/login'
}