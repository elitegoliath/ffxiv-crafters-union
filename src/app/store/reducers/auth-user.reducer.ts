import { UserModel } from '../../models/user.model';
import { AuthUserActionTypes, AuthUserActions } from '../actions';

export function AuthUserReducer(state: UserModel = new UserModel(), action: AuthUserActions) {
    switch (action.type) {
        case AuthUserActionTypes.SET_AUTH_USER:
            return state.with(action.payload);
        default:
            return state;
    }
}
