import { UserModel } from '../../models/user.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { SetAuthUser, SetLogginStatus } from '../../store/actions';
import { CharacterModel } from '../../models';
import { UserQuery } from './selectors';

@Injectable({
  providedIn: 'root'
})
export class UserState {

    public authUser: Observable<UserModel> = this._store.pipe(select(UserQuery.getAuthUser));

    public logginStatus: Observable<boolean> = this._store.pipe(select(UserQuery.getLogginStatus));

    public authUserDisplayName: Observable<string> = this._store.pipe(select(UserQuery.getAuthUserDisplayName));

    public authUserCharacter: Observable<CharacterModel> = this._store.pipe(select(UserQuery.getAuthUserCharacter));

    constructor(private _store: Store<any>) {}

    /**
     * Set the Auth User.
     *
     * @param {UserModel} user
     * @memberof UserState
     */
    public setAuthUser(user: UserModel): void {
        this._store.dispatch(new SetAuthUser(user));
    }

    /**
     * Sets whether the user has logged in.
     *
     * @param {boolean} loggedIn
     * @memberof UserState
     */
    public setUserLogginStatus(loggedIn: boolean): void {
        this._store.dispatch(new SetLogginStatus(loggedIn));
    }
}
