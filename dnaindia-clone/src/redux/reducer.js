import {actionTypes} from "./actions"


const initState={
    home:[],
    photo:[],
    latest:[],
    sports:[],
    explain:[],
    loading:false,
    success:false,
    enter:[],
    india:[],
    viral:[],
    life:[],
    business:[],
    world:[]
}

export const NewsReducer=(state = initState,{type,payload}) =>{
    switch(type){
        case actionTypes.LOADING:{
            return {
                ...state,
                loading: true,
                success: false
            }
        }
        case actionTypes.ADD_DATA_HOME:{
            return {
                ...state,
                loading: false,
                success: true,
                home: payload
            }
        }
        case actionTypes.ADD_DATA_PHOTOS:{
            return {
                ...state,
                loading: false,
                success: true,
                photo: payload
            }
        }
        case actionTypes.ADD_DATA_LATEST:{
            // console.log("payload",payload)
            return {
                ...state,
                loading: false,
                success: true,
                latest: payload
            }
        }
        case actionTypes.ADD_DATA_SPORTS:{
            // console.log("payload",payload)
            return {
                ...state,
                loading: false,
                success: true,
                sports: payload
            }
        }
        case actionTypes.ADD_DATA_ENTERTAINMENT:{
            // console.log("payload",payload)
            return {
                ...state,
                loading: false,
                success: true,
                enter: payload
            }
        }
        case actionTypes.ADD_DATA_EXPKAINERS:{
            // console.log("payload",payload)
            return {
                ...state,
                loading: false,
                success: true,
                explain: payload
            }
        }
        case actionTypes.ADD_DATA_INDIA:{
            // console.log("payload",payload)
            return {
                ...state,
                loading: false,
                success: true,
                india: payload
            }
        }
        case actionTypes.ADD_DATA_VIRAL:{
            // console.log("payload",payload)
            return {
                ...state,
                loading: false,
                success: true,
                viral: payload
            }
        }
        case actionTypes.ADD_DATA_LIFESTYLE:{
            // console.log("payload",payload)
            return {
                ...state,
                loading: false,
                success: true,
                life: payload
            }
        }
        case actionTypes.ADD_DATA_BUSINESS:{
            // console.log("payload",payload)
            return {
                ...state,
                loading: false,
                success: true,
                business: payload
            }
        }
        case actionTypes.ADD_DATA_WORLD:{
            // console.log("payload",payload)
            return {
                ...state,
                loading: false,
                success: true,
                world: payload
            }
        }
        default:
            return state
    }
}