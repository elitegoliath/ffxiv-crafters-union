import { Action } from '@ngrx/store';

export enum LogginStatusActionTypes {
    SET_LOGGIN_STATUS = 'SET_LOGGED_IN',
}

export class SetLogginStatus implements Action {
    readonly type = LogginStatusActionTypes.SET_LOGGIN_STATUS;
    constructor(public payload: boolean) {}
}

export type LogginStatusActions = SetLogginStatus;
