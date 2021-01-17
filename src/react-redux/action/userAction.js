import API from '../../service'


const getUser = (params)=>{
    return dispatch=>{
        return API.getUser(params)
    }
}

const getUsers = ()=>{
    return dispatch=>{
        return API.getUsers()
    }
}

const deleteUser = (params)=>{
    return dispatch=>{
        return API.deleteUser(params)
    }
}

const updateUser = (params)=>{
    return dispatch=>{
        return API.updateUser(params)
    }
}

export {getUser,getUsers,deleteUser,updateUser}