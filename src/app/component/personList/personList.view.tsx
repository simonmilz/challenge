import * as React from 'react';
import {Table} from 'antd';
import {IView} from '../../../base/mvvm/interfaces';
import PersonListModel from './personList.model';


const view: IView<PersonListModel> = ({model}) =>
	<div>
		<Table columns={model.columns} dataSource={model.data}/>
	</div>

export default view;