import { Record } from 'immutable';
import { UserInterface } from './interfaces';
import { CharacterModel } from './character.model';

const UserDefaults = Record({
    uid: null,
    email: '',
    photoURL: '../assets/images/anon-prof-pic.jpg',
    displayName: 'Not Logged In',
    character: new CharacterModel(),
}, 'UserModel');

/**
 * Immutable User Model.
 *
 * @export
 * @class UserModel
 * @extends {UserDefaults}
 * @implements {UserInterface}
 */
export class UserModel extends UserDefaults implements UserInterface {
    public uid: string | null;
    public email: string | null;
    public photoURL: string | null;
    public displayName: string | null;
    public character: CharacterModel | null;

    /**
     * Creates an instance of UserModel.
     *
     * @param {UserInterface} [params]
     * @memberof UserModel
     */
    constructor(params?: UserInterface) {
        if (params) {
            super(params);
        } else {
            super();
        }
    }

    /**
     * Returns a new model with the old and new properties merged.
     *
     * @param {UserInterface} params
     * @returns
     * @memberof UserModel
     */
    public with(params: UserInterface) {
        return this.merge(params) as this;
    }
}
