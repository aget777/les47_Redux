export const LOAD_GOOD_LIST = 'LOAD_GOOD_LIST';


export function loadGoodList(goods){
    return {
        type: LOAD_GOOD_LIST,
        payload: goods,
    }
}