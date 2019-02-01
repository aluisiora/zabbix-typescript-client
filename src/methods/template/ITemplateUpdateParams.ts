import { ITemplateCreateParams } from './ITemplateCreateParams';

export interface ITemplateUpdateParams extends ITemplateCreateParams {
    templates_clear: { templateid: string[] | number[] };
}
