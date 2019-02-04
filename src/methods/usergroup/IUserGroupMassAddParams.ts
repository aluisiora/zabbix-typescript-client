import { IPermission } from './IPermission';

export interface IUserGroupMassAddParams {
    usrgrpids: string[];
    rights?: IPermission | IPermission[];
    userids?: string | string[];
}
