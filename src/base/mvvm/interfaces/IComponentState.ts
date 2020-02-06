import {IViewModel} from './IViewModel'

type Nullable<T> = T | null;

export interface IComponentState {
	model: Nullable<IViewModel>;
	shouldDispose: boolean;
}