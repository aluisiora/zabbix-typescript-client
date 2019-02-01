import { IHost } from './IHost';
import { IHostInterface } from './IHostInterface';

export interface IHostUpdateParams extends IHost {
    groups: { groupid: string }[];
    interfaces: IHostInterface;
    templates?: { templateid: string }[];
    templates_clear?: { templateid: string }[];
    macros?: { [propName: string]: any }[];
    inventory?: { [propName: string]: any };
}
