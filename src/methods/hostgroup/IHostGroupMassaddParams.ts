export interface IHostGroupMassaddParams {
    groups: { groupid: string[] | number[] }[];
    hosts?: { hostid: string[] | number[] }[];
    templates: { templateid: string[] | number[] }[];
}
