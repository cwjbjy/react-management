/* 鉴权模块 */
const auth = {
    'Level01': Symbol(), //需要token（后端传的token）
    'Level02': Symbol(), //前端固定 Token
    'Level03': Symbol(), //不需要Token
}

export default auth