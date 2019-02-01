export interface ITrigger {
    triggerid?: string;
    description: string;
    expression: string;
    comments?: string;
    error?: string;
    flags?: number;
    lastchange?: string;
    priority?: number;
    state?: number;
    status?: number;
    templateid?: string;
    type?: number;
    url?: string;
    value?: number;
}
