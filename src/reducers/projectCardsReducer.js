

import { SET_PROJECT_CARDS } from '../actions/types';

const INITIAL_STATE = {
    projectCards: []
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_PROJECT_CARDS: 
            return {
                ...state,
                projectCards: action.payload
            }
        default: return state
    }
}