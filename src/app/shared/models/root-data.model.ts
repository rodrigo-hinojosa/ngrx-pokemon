/** interface representing app data structure.
 * @interface
 * @property {IProfile} profile
 * @property {object} sitePreferences
 */
export interface IRootData {
    profile?: IProfile;
    sitePreferences?: {
        name?: string;
        prefix?: string;
    };
}

/** interface representing profile data structure.
 * @interface
 * @property {string} username
 * @property {string} name
 * @property {string} lastname
 * @property {string} img
 * @property {string} email
 */
export interface IProfile {
    username?: string;
    name?: string;
    lastname?: string;
    img?: string;
    email?: string;
}
