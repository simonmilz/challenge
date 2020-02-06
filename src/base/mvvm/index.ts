export * from './interfaces/index'

export {EventEmitter} from './EventEmitter'
export {ViewModelLocator} from './ViewModelLocator'
export {createComponent} from './createComponent'
export {input, output} from './decorators';

export interface OnPropsChange {
	onPropsChange(nextProps: any);

}
export interface OnComponentInit{
	onComponentInit(initProps: any);
}

export interface OnAfterMount{
	onAfterMount();
}

export interface IFormValidator{
	get?:Function
}