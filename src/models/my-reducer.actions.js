export const INCREMENT_ACTION = 'INCREMENT_ACTION';
export const DECREMENT_ACTION = 'DECREMENT_ACTION';

export function increment () {
    return {
        type: 'INCREMENT_ACTION',
    }
}

export function decrement (){
    return {
        type: 'DECREMENT_ACTION',
    }   
}


// export const addPayloadAction = {
//     type: 'ADD_PAYLOAD',
//     payload: 5,
// }