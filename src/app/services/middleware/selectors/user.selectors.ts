import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserModel } from '../../../models';

export const getAuthUser = createFeatureSelector<UserModel>('AuthUser');
export const getLogginStatus = createFeatureSelector<boolean>('LogginStatus');

export const getAuthUserCharacter = createSelector(getAuthUser, (authUser: UserModel) => authUser.character);
export const getAuthUserDisplayName = createSelector(getAuthUser, (authUser: UserModel) => authUser.displayName);

export const UserQuery = {
    getAuthUser,
    getLogginStatus,
    getAuthUserCharacter,
    getAuthUserDisplayName,
};
