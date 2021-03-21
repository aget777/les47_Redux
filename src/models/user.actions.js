export const CHANGE_USER_FIRSTNAME = 'CHANGE_USER_FIRSTNAME';

export function changeUserFirstName(firstName){
    return {
        type: CHANGE_USER_FIRSTNAME,
        payload: firstName,
    }
}