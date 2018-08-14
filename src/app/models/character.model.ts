import { Record } from 'immutable';
import { CharacterInterface } from './interfaces';

const CharacterDefaults = Record({
    lodestone_id: null,
    name: 'Find Your Character',
    title: null,
    server: null,
    avatar: '../../assets/images/anon-prof-pic.jpg',
    portrait: '../../assets/images/anon-prof-pic.jpg',
    last_synced: null,
    deleted: false,
    last_active: null,
    url_api: null,
}, 'CharacterModel');

export class CharacterModel extends CharacterDefaults implements CharacterInterface {
    public lodestone_id: number | null;
    public name: string | null;
    public title: string | null;
    public server: string | null;
    public avatar: string | null;
    public portrait: string | null;
    public last_synced: string | null;
    public deleted: string | null;
    public last_active: string | null;
    public url_api: string | null;

    constructor(params?: CharacterInterface) {
        if (params) {
            super(params);
        } else {
            super();
        }
    }

    public with(params: CharacterInterface) {
        return this.merge(params) as this;
    }
}
