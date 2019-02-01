import { ITemplate } from './ITemplate';

export interface ITemplateCreateParams extends ITemplate {
    groups: { groupid: string | number }[];
    hosts?: { hostid: string | number }[];
    templates?: { templateid: string | number }[];
    macros?: any;
}
