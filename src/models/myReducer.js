import {INCREMENT_ACTION, DECREMENT_ACTION} from "./my-reducer.actions"

const initialState = {
    name: 'The best offerj',
    value: 0,
}


function myReducer(state = initialState, action){
    switch(action.type){
        case INCREMENT_ACTION:
            return {
                ...state,
                value: state.value + 1,
            }
        case DECREMENT_ACTION:
            return {
                ...state,
                value: state.value - 1,
            }
    }
    return state;
}

export default myReducer;