import _ from 'lodash';
import React, {Component} from 'react';

import {Table} from 'semantic-ui-react';
import PersonsTableBody from "./PersonsTableBody";
import PersonsTableHeader from "./PersonsTableHeader";

const API = process.env.REACT_APP_API_PATH;

class PersonsTable extends Component {
	state = {
		persons: [],
		headers: []
	};

	loadPersons = async () => {
		const response = await fetch(API + '/api/persons', {
			method: 'GET',
			headers: {'Content-Type': 'application/json'}
		});
		const body = await response.json();
		this.setState({persons: body.data});

		if (!_.isEmpty(body.data)) {
			let headers = _.keys(_.omit(_.first(body.data), ['_id', 'id']));

			headers = _.join(headers, ' ');
			headers = _.replace(headers, 'isActive', 'Active');
			headers = _.replace(headers, 'firstname lastname', 'name');
			headers = _.replace(headers, 'latitude longitude', 'map');
			headers = _.split(headers, ' ');

			headers = _.map(headers, _.upperFirst);
			headers = _.map(headers, _.words);
			headers = _.map(headers, (header) => _.join(header, ' '));

			this.setState({headers: headers});
		}
	};

	componentDidMount() {
		this.loadPersons();
	}

	render() {
		return (
			<Table celled padded>
				<PersonsTableHeader headers={this.state.headers}/>
				<PersonsTableBody persons={this.state.persons}/>
			</Table>
		);
	}
}

export default PersonsTable;
