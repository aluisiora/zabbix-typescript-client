export interface ITemplateMassaddParams {
    templates: { templateid: string | number }[];
    groups?: { groupsid: string | number }[];
    hosts?: { hostid: string | number }[];
    macros?: any;
    templates_link?: { templateid: string | number }[];
}
