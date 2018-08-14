import { CharacterModel } from '../character.model';

export interface UserInterface {
    uid?: string;
    email?: string;
    photoURL?: string;
    displayName?: string;
    character?: CharacterModel;
}
