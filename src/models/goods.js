import {LOAD_GOOD_LIST} from "./goods.actions"
const initialState = {
    items: [],
    topGoods: [],
}

export function goodsReducer(state = initialState, action){
    switch (action.type){
        case LOAD_GOOD_LIST:
            return {
                ...state,
                items: action.payload,
            }
    }
    return state;
}