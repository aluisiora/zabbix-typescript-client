import { IHost } from './IHost';
import { IHostInterface } from './IHostInterface';

export interface IHostMassRemoveParams extends IHost {
    hostids: string[];
    groupids?: string[];
    interfaces?: IHostInterface;
    macros?: string[];
    templateids: string[];
    templateids_clear: string[];
}
