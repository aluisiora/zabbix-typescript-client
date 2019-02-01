export interface IHistory {
    id?: string;
    clock?: string;
    itemid?: string;
    ns?: number;
    value?: number | string;
    logeventid?: number;
    severity?: number;
    source?: string;
    timestamp?: string;
}
