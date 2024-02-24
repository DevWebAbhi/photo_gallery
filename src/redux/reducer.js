import { BERGER_MENU, SET_DATA } from "./actionType"

const initialstate={
    data:[],
    bgrmenu:false
}

export const reducer=(state=initialstate,{type,payload})=>{
    switch(type){
        case SET_DATA:{return {...state,data:payload}};
        case BERGER_MENU:{return {...state,bgrmenu:payload}};
        default:{return state};
    }
}