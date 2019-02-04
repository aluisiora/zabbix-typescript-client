import { IUserGroup } from './IUserGroup';
import { IPermission } from './IPermission';

export interface IUserGroupCreateParams extends IUserGroup {
    rights?: IPermission | IPermission[];
    userids?: string | string[] | number | number[];
}
