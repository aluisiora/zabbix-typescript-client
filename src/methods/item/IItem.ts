export interface IItem {
    itemid?: string;
    delay: number;
    hostid: string;
    interfaceid: string;
    key_: string;
    name: string;
    type: number;
    value_type: number;
    authtype?: number;
    data_type?: number;
    delay_flex?: string;
    delta?: number;
    description?: string;
    error?: string;
    flags?: number;
    formula?: number;
    history?: number;
    inventory_link?: number;
    ipmi_sensor?: string;
    lastclock?: string;
    lastns?: number;
    lastvalue?: string;
    logtimefmt?: string;
    mtime?: string;
    multiplier?: number;
    params?: string;
    password?: string;
    port?: string;
    prevvalue?: string;
    privatekey?: string;
    publickey?: string;
    snmp_community?: string;
    snmp_oid?: string;
    snmpv3_authpassphrase?: string;
    snmpv3_authprotocol?: number;
    snmpv3_contextname?: string;
    snmpv3_privpassphrase?: string;
    snmpv3_privprotocol?: number;
    snmpv3_securitylevel?: number;
    snmpv3_securityname?: string;
    state?: number;
    status?: number;
    templateid?: string;
    trapper_hosts?: string;
    trends?: number;
    units?: string;
    username?: string;
    valuemapid?: string;
    [propName: string]: any;
}