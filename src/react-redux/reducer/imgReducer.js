const initState = {
    imageUrl:''
}

/* 数据持久化 */
if(sessionStorage.getItem('imageUrl')){
    initState.imageUrl = sessionStorage.getItem('imageUrl')
}

const img = (state=initState,action)=>{
    switch(action.type){
        default:
            return state
    }
}

export default img