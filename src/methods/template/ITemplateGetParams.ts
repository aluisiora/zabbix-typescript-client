import { IGenericGetParams } from '../../methods/IGenericGetParams';

export interface ITemplateGetParams extends IGenericGetParams {
    templateids?: string | string[];
    groupids?: string | string[];
    parentTemplateids?: string | string[];
    hostids?: string | string[];
    graphids?: string | string[];
    itemids?: string | string[];
    triggerids?: string | string[];
    with_items?: boolean;
    with_triggers?: boolean;
    with_graphs?: boolean;
    with_httptests?: boolean;
    selectGroups?: any;
    selectHosts?: any;
    selectTemplates?: any;
    selectParentTemplates?: any;
    selectHttpTests?: any;
    selectItems?: any;
    selectDiscoveries?: any;
    selectTriggers?: any;
    selectGraphs?: any;
    selectApplications?: any;
    selectMacros?: any;
    selectScreens?: any;
    limitSelects?: number;
    sortfield?: string | string[];
}
