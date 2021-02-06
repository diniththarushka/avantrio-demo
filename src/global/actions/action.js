/**
 * List of action definition for Redux Convention
 */

export const getUsers = () => {
    return {
        type: 'LOAD_USERS'
    };
}

export const clearUsers = () => {
    return {
        type: 'CLEAR_USERS'
    };
}

export const getUserHistory = (id, payload) => {
    return {
        type: 'LOAD_USER_HISTORY',
        id,
        payload
    }
}

export const clearUserHistory = () => {
    return {
        type: 'CLEAR_USER_HISTORY'
    };
}
