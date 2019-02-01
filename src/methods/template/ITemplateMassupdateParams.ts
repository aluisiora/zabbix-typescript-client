import { ITemplate } from './ITemplate';

export interface ITemplateMassupdateParams extends ITemplate {
    templates: { templateid: string[] | number[] }[];
    groups?: { groupid: string[] | number[] }[];
    hosts?: { hostid: string[] | number[] }[];
    macros?: any;
    templates_clear?: { templateid: string[] | number[] }[];
    templates_link?: { templateid: string[] | number[] }[];
}
