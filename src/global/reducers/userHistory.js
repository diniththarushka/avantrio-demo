/**
 * Reducer for Redux - User History action related.
 */
const userHistoryReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_USER_HISTORY': {
            if (action.id >= 0) {
                return state = action.payload;
            }
            break;
        }
        case 'CLEAR_USER_HISTORY': {
            return {};
        }
        default: {
            return {};
        }
    }
}

export default userHistoryReducer;
