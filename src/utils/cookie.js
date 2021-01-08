import cookie from 'react-cookies'

// 用户登录，保存cookie
export const saveCookie = (key, value) => {
    const expires = new Date()
    expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 14)
    cookie.save(key, value, {
        path: '/',
        expires
    })
}

// 获取当前用户cookie
export const readCookie = (key) => {
    return cookie.load(key)
}

// 用户登出，删除cookie
export const removeCookie = (key) => {
    cookie.remove(key, {
        path: '/'
    })
    window.location.href = '/login'
}