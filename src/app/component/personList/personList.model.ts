import PersonService from '../../domain/person.service';
import {observable} from 'mobx';
import {friendsCell, personCell, statusCell} from './cellRender.util';
import PersonDto from '../../domain/person.dto';

export default class PersonListModel {

	servicePerson = PersonService;
	columns = [{
		title: 'Person',
		key: 'name',
		render: personCell

	}, {
		title: 'Status',
		key: 'status',
		dataIndex: 'isActive',
		render: statusCell

	}, {
		title: 'Phone',
		key: 'phone',
		dataIndex: 'isActive',
		render: statusCell

	}, {
		title: 'Company',
		key: 'company',
		dataIndex: 'company'
	}, {
		title: 'Address',
		key: 'address',
		dataIndex: 'address'
	}, {
		title: 'Friends',
		key: 'friends',
		dataIndex: 'friends',
		render: friendsCell
	}];
	@observable data: PersonDto[] = [];

	constructor() {
		this.loadData();
	}

	async loadData() {
		this.data = await this.servicePerson.getPersonList();
	}

}