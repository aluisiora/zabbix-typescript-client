import { IItem } from './IItem';

export interface IItemCreateParams extends IItem {
    applications?: string[];
}
