import * as types from '../types';

export const setState = (value) => {
    return {
        type: types.SET_STATE,
        value
    }
}

