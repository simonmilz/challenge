import _ from 'lodash';
import moment from 'moment';
import uuidv4 from "uuid/v4";
import React, {Component} from 'react';
import './Persons.css';

import 'fomantic-ui-css/semantic.css';
import {Icon, Table} from 'semantic-ui-react';

const API = process.env.REACT_APP_API_PATH;

const MyTableHeader = (props) => {
	const cells = _.map(props.headers, (header) => {
		return header === 'About' ?
			<Table.HeaderCell width='16' key={uuidv4()}>{header}</Table.HeaderCell> :
			<Table.HeaderCell width='1' key={uuidv4()}>{header}</Table.HeaderCell>
	});
	return (
		<Table.Header>
			<Table.Row>
				{cells}
			</Table.Row>
		</Table.Header>
	)
};

const MyTableBody = (props) => {
	console.log('persons', props.persons);

	const rows = _.map(props.persons, (person) => {
		let friends = _.map(person.friends, (friend) => friend.name);
		friends = _.map(friends, (friend) => <p key={uuidv4()}>{friend}</p>);

		const tags = _.map(person.tags, (tag) => <p key={uuidv4()}>{tag}</p>);

		const icon = person.isActive ?
			<Icon.Group size='large'>
				<Icon size='big' color='red' name='dont'/>
				<Icon color='black' name='user'/>
			</Icon.Group> :
			<Icon.Group size='large'>
				<Icon loading size='big' name='circle notch'/>
				<Icon name='user'/>
			</Icon.Group>;

		const createdAt = <div>
			<p>{moment(person.createdAt).format('MMMM Do YYYY')}</p>
			<p>{moment(person.createdAt).format('h:mm:ss a')}</p>
		</div>;

		let address = _.split(person.address, ',');
		address = _.map(address, _.trim);
		address = _.map(address, (part) => <p key={uuidv4()}>{part}</p>);

		return (
			<Table.Row key={uuidv4()} verticalAlign='top'>
				<Table.Cell>{icon}</Table.Cell>
				<Table.Cell singleLine>{createdAt}</Table.Cell>
				<Table.Cell>{person.firstname}</Table.Cell>
				<Table.Cell>{person.lastname}</Table.Cell>
				<Table.Cell>{person.company}</Table.Cell>
				<Table.Cell>{person.email}</Table.Cell>
				<Table.Cell singleLine>{person.phone}</Table.Cell>
				<Table.Cell singleLine>{address}</Table.Cell>
				<Table.Cell>{person.about}</Table.Cell>
				<Table.Cell>{person.latitude}</Table.Cell>
				<Table.Cell>{person.longitude}</Table.Cell>
				<Table.Cell>{tags}</Table.Cell>
				<Table.Cell singleLine>{friends}</Table.Cell>
			</Table.Row>
		)
	});

	return (
		<Table.Body>
			{rows}
		</Table.Body>
	)
};

class Persons extends Component {
	state = {
		persons: [],
		headers: []
	};

	load = async () => {
		const response = await fetch(API + '/api/persons', {
			method: 'GET',
			headers: {'Content-Type': 'application/json'}
		});
		const body = await response.json();

		const persons = body.data;
		this.setState({persons: persons});

		if (!_.isEmpty(persons)) {
			let headers = _.keys(_.omit(_.first(persons), ['_id', 'id']));

			headers = _.join(headers, ' ');
			headers = _.replace(headers, 'isActive', 'Active');
			headers = _.split(headers, ' ');

			headers = _.map(headers, _.upperFirst);
			headers = _.map(headers, _.words);
			headers = _.map(headers, (header) => _.join(header, ' '));

			this.setState({headers: headers});
		}
	};

	componentDidMount() {
		this.load();
	}

	render() {
		console.log(this.state);
		return (
			<Table celled padded>
				<MyTableHeader headers={this.state.headers}/>
				<MyTableBody persons={this.state.persons}/>
			</Table>
		);
	}
}

export default Persons;
