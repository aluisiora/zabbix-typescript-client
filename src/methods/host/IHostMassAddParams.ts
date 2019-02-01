import { IHost } from './IHost';
import { IHostInterface } from './IHostInterface';

export interface IHostMassAddParams extends IHost {
    hosts: { hosts: string }[];
    groups?: { groupid: string }[];
    interfaces?: IHostInterface;
    templates?: { templateid: string }[];
    macros?: { [propName: string]: any }[];
}
