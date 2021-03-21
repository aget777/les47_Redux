import {CHANGE_USER_FIRSTNAME} from './user.actions';


const initialState = {
    loggedIn: false,
    username: '',
    firstName: 'Ivan',
    lastName: 'Ivanov',
}

function userReducer(state = initialState, action){
    switch(action.type){
        case CHANGE_USER_FIRSTNAME:
            return {
                ...state,
                firstName: action.payload,
            }
    }
    return state;
}

export default userReducer