import { Injectable } from '@angular/core';
import { UserState } from './middleware';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserModel } from '../models/user.model';
import { auth, User } from 'firebase';
import { UserInterface } from '../models/interfaces';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    /**
     * Creates an instance of AuthService.
     *
     * @param {UserState} _userState
     * @param {AngularFireAuth} _afAuth
     * @param {AngularFirestore} _afStore
     * @memberof AuthService
     */
    constructor(
        private _userState: UserState,
        private _afAuth: AngularFireAuth,
        private _afStore: AngularFirestore,
    ) {
        this._afAuth.authState.pipe(switchMap((user) => {
            if (user) {
                this._userState.setUserLogginStatus(true);
                return this._afStore.doc<User>(`users/${user.uid}`).valueChanges();
            } else {
                this._userState.setUserLogginStatus(false);
                return of(null);
            }
        })).subscribe((u) => {
            this._userState.setAuthUser(new UserModel(u));
        });
    }

    /**
     * Logs in using Firebase's Google Auth Provider.
     *
     * @returns
     * @memberof AuthService
     */
    public googleLogin() {
        const provider = new auth.GoogleAuthProvider();
        return this._oAuthLogin(provider);
    }

    // public facebookLogin() {
    //     const provider = new auth.FacebookAuthProvider();
    //     return this._oAuthLogin(provider);
    // }

    /**
     * Takes the provided provider and executes the login and user update functions.
     *
     * @private
     * @param {*} provider
     * @returns
     * @memberof AuthService
     */
    private _oAuthLogin(provider) {
        return this._afAuth.auth.signInWithPopup(provider)
            .then((credential) => {
                this._updateUserData(credential.user);
            });
    }

    /**
     * Get the current reference of the user from the database, then update or create it with new information.
     *
     * @private
     * @param {User} user
     * @returns
     * @memberof AuthService
     */
    private _updateUserData(user: User) {
        // Get the current user reference from the database.
        const userRef: AngularFirestoreDocument<any> = this._afStore.doc(`users/${user.uid}`);

        // Casting the retrieved user data to an object.
        const data: UserInterface = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
        };

        // Return the updated user while simultaniously updating it in the database.
        return userRef.set(data, { merge: true });
    }

    /**
     * Signs the current user out of the application.
     *
     * @memberof AuthService
     */
    public signOut(): void {
        this._afAuth.auth.signOut();
    }
}
