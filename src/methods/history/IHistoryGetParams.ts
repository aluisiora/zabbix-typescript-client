import { IGenericGetParams } from '../../methods/IGenericGetParams';

export interface IHistoryGetParams extends IGenericGetParams {
    history?: number;
    hostids?: string | string[] | number | number[];
    itemids?: string | string[] | number | number[];
    time_from?: string;
    time_till?: string;
    sortfield: string[];
}
