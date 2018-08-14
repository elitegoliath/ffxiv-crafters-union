import { LogginStatusActions, LogginStatusActionTypes } from '../actions';

export function LogginStatusReducer(state: boolean = false, action: LogginStatusActions) {
    switch (action.type) {
        case LogginStatusActionTypes.SET_LOGGIN_STATUS:
            return action.payload;
        default:
            return state;
    }
}
