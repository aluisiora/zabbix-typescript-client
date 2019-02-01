import { IHost } from './IHost';
import { IHostInterface } from './IHostInterface';

export interface IHostCreateParams extends IHost {
    groups: { groupid: string }[];
    interfaces: IHostInterface;
    templates?: { templateid: string }[];
    macros?: { [propName: string]: any }[];
    inventory?: { [propName: string]: any };
}
