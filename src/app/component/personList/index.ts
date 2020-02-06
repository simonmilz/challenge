import PersonListModel from './personList.model';
import view from './personList.view';
import {createComponent, IView} from '../../../base/mvvm';


const PersonListComponent = createComponent({
	displayName: 'PersonListComponent',
	view
})(PersonListModel);
export default PersonListComponent;