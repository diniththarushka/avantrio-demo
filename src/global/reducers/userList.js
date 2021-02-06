import axios from "axios";

/**
 * Reducer for Redux - Users action related.
 */
const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_USERS': {
            if (action.id >= 0) {
                axios.get(`http://apps.avantrio.xyz:8010/api/users`)
                    .then((res) => {
                        return res.data;
                    }).catch((err) => {
                    alert(err);
                    return {};
                });
            } else
                return {};
            break;
        }
        case 'CLEAR_USERS': {
            return {};
        }
        default: {
            return {};
        }
    }
}

export default userReducer;
