import { ITrigger } from './ITrigger';

export interface ITriggerCreateParams extends ITrigger {
    dependencies: { triggerid: string }[];
}
