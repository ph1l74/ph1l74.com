import * as types from "../types";
import * as constants from '../../constants';

const initState = constants.INIT_STATE;

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case types.SET_STATE:
            return { ...state, ...action.value }
        default:
            return state
    }
}

export default rootReducer;