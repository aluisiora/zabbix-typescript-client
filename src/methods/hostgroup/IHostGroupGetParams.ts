import { IGenericGetParams } from '../../methods/IGenericGetParams';

export interface IHostGroupGetParams extends IGenericGetParams {
    graphids?: string | string[];
    groupids?: string | string[];
    hostids?: string | string[];
    maintenanceids?: string | string[];
    monitored_hosts?: boolean;
    real_hosts?: boolean;
    templated_hosts?: boolean;
    templateids?: string | string[];
    triggerids?: string | string[];
    with_applications?: boolean;
    with_graphs?: boolean;
    with_hosts_and_templates?: boolean;
    with_httptests?: boolean;
    with_items?: boolean;
    with_monitored_httptests?: boolean;
    with_monitored_items?: boolean;
    with_monitored_triggers?: boolean;
    with_simple_graph_items?: boolean;
    with_triggers?: boolean;
    selectDiscoveryRule?: any;
    selectGroupDiscovery?: any;
    selectHosts?: any;
    selectTemplates?: any;
    limitSelects?: number;
    sortfield?: string | string[];
}
