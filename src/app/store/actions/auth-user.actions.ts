import { UserModel } from '../../models/user.model';
import { Action } from '@ngrx/store';

export enum AuthUserActionTypes {
    SET_AUTH_USER = 'SET_AUTH_USER',
}

export class SetAuthUser implements Action {
    readonly type = AuthUserActionTypes.SET_AUTH_USER;
    constructor(public payload: UserModel) {}
}

export type AuthUserActions = SetAuthUser;
