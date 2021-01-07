import API from '../../service/index'

export const signup = (params) => {
    return dispatch => {
        return API.signup(params)
    }
}

export const getContactList = () => {
    return dispatch => {
        return API.getContactList()
    }
}