export const addToFav=(item)=>{
    console.log("in action",item)
    return{
        type:'ADD_TO_FAV',
        payload:item
    }
}

export const RemoveFromFav=(item)=>{
    return{
        type:'REMOVE_FROM_FAV',
        payload:item
    }
}