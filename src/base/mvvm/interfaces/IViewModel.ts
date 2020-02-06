/**
 * ViewModels should implement this interface.
 * Basically, a ViewModel has properties,
 * does its things and could be disposed.
 */
export interface IViewModel extends Object {
	onPropsChange?: Function;
	onComponentInit?:Function;
	onAfterMount?:Function;

	/**
	 * Disposes the ViewModel, here you should cleanup listeners.
	 * If created internally, any internal reference to the ViewModel
	 * will be removed.
	 */
	dispose?()
}