import {FETCH_WEARHER} from '../actions/index'
export default function (state = [], action) {
    switch(action.type)
    {
        case FETCH_WEARHER:
            return [action.payload.data, ...state];
    }
    return state;
}