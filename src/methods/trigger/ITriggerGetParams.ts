import { IGenericGetParams } from '../../methods/IGenericGetParams';

export interface ITriggerGetParams extends IGenericGetParams {
    triggerids?: string | string[];
    groupids?: string | string[];
    templateids?: string | string[];
    hostids?: string | string[];
    itemids?: string | string[];
    applicationids?: string | string[];
    functions?: string | string[];
    group?: string;
    host?: string;
    inherited?: boolean;
    templated?: boolean;
    monitored?: boolean;
    active?: boolean;
    maintenance?: boolean;
    withUnacknowledgedEvents?: boolean;
    withAcknowledgedEvents?: boolean;
    withLastEventUnacknowledged?: boolean;
    skipDependent?: boolean;
    lastChangeSince?: string;
    lastChangeTill?: string;
    only_true?: boolean;
    min_severity?: number;
    expandComment?: boolean;
    expandDescription?: boolean;
    expandExpression?: boolean;
    selectGroups?: any;
    selectHosts?: any;
    selectItems?: any;
    selectFunctions?: any;
    selectDependencies?: any;
    selectDiscoveryRule?: any;
    selectLastEvent?: any;
    filter?: any;
    limitSelects?: number;
    sortfield?: string | string[];
}
