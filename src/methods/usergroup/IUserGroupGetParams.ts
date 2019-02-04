import { IGenericGetParams } from '../../methods/IGenericGetParams';

export interface IUserGroupGetParams extends IGenericGetParams {
    status?: number;
    userids?: string[];
    usrgrpids?: string[];
    with_gui_access?: number;
    selectUsers?: any;
    selectRights?: any;
    limitSelects?: number;
    sortfield?: string[];
}
