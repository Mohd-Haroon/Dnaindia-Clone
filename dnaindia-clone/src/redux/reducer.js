import {actionTypes} from "./actions"


const initState={
    home:[],
    photo:[]
}

export const NewsReducer=(state = initState,{type,payload}) =>{
    switch(type){
        case actionTypes.ADD_DATA_HOME:{
            return {
                home: payload
            }
        }
        case actionTypes.ADD_DATA_PHOTOS:{
            return {
                photo: payload
            }
        }
        default:
            return state
    }
}