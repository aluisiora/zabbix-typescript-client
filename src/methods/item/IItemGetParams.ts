import { IGenericGetParams } from '../../methods/IGenericGetParams';

export interface IItemGetParams extends IGenericGetParams {
    itemids?: string | string[];
    groupids?: string | string[];
    templateids?: string | string[];
    hostids?: string | string[];
    proxyids?: string | string[];
    interfaceids?: string | string[];
    graphids?: string | string[];
    triggerids?: string | string[];
    applicationids?: string | string[];
    webitems?: boolean;
    inherited?: boolean;
    templated?: boolean;
    monitored?: boolean;
    group?: string;
    host?: string;
    application?: string;
    with_triggers?: boolean;
    selectHosts?: any;
    selectInterfaces?: any;
    selectTriggers?: any;
    selectGraphs?: any;
    selectApplications?: any;
    selectDiscoveryRule?: any;
    selectItemDiscovery?: any;
    filter?: any;
    limitSelects?: number;
    sortfield?: string | string[];
}
