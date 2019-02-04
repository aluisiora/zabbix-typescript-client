import { IUserGroup } from './IUserGroup';
import { IPermission } from './IPermission';

export interface IUserGroupMassUpdateParams extends IUserGroup {
    usrgrpids: string | string[] | number | number[];
    rights?: IPermission | IPermission[];
    userids?: { userid: string | number }[];
}
