import {createComponent} from '../../../base/mvvm';
import personPageView from './personPage.view';
import PersonPageModel from './personPage.model';

const PersonPage = createComponent<{}>({
	displayName: 'DefaultDateComponent',
	view: personPageView
})(PersonPageModel);
export default PersonPage;