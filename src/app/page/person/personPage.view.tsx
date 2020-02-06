import * as React from 'react';
import PersonListComponent from '../../component/personList';
import {IView} from '../../../base/mvvm/interfaces';
import PersonPageModel from './personPage.model';
import classes from './personPage.module.css';

const personPageView: IView<PersonPageModel> = () =>
	<div className={classes.personPage}>
		<h1>List of persons</h1>
		<PersonListComponent/>
	</div>

export default personPageView;