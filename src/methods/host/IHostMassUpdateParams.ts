import { IHostMassAddParams } from './IHostMassAddParams';

export interface IHostMassUpdateParams extends IHostMassAddParams {
    inventory?: { [propName: string]: any };
    inventory_mode?: number;
}
