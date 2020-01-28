import _ from 'lodash';
import uuidv4 from "uuid/v4";

import {Icon, Table} from 'semantic-ui-react';
import React from 'react';
import moment from "moment";

const activeIcon = () => (
	<Icon.Group size='large'>
		<Icon size='big' color='red' name='dont'/>
		<Icon color='black' name='user'/>
	</Icon.Group>
);

const inactiveIcon = () => (
	<Icon.Group size='large'>
		<Icon loading size='big' name='circle notch'/>
		<Icon name='user'/>
	</Icon.Group>
);

const createdAtFormat = (createdAt) => (
	<div>
		<p>{moment(createdAt).format('MMMM Do YYYY')}</p>
		<p>{moment(createdAt).format('h:mm:ss a')}</p>
	</div>
);

export default function PersonsTableRow(props) {
	const person = props.person;

	let friends = _.map(person.friends, (friend) => friend.name);
	friends = _.map(friends, (friend) => <p key={uuidv4()}>{friend}</p>);

	const tags = _.map(person.tags, (tag) => <p key={uuidv4()}>{tag}</p>);

	const icon = person.isActive ? activeIcon() : inactiveIcon();

	const createdAt = createdAtFormat(person.createdAt);

	let address = _.split(person.address, ',');
	address = _.map(address, _.trim);
	address = _.map(address, (part) => <p key={uuidv4()}>{part}</p>);

	let url = `http://maps.google.com/maps?q=${person.latitude},${person.longitude}`;

	return (
		<Table.Row key={uuidv4()} verticalAlign='top'>
			<Table.Cell>{icon}</Table.Cell>
			<Table.Cell singleLine>{createdAt}</Table.Cell>
			<Table.Cell singleLine>{person.firstname} {person.lastname}</Table.Cell>
			<Table.Cell>{person.company}</Table.Cell>
			<Table.Cell>{person.email}</Table.Cell>
			<Table.Cell singleLine>{person.phone}</Table.Cell>
			<Table.Cell singleLine>{address}</Table.Cell>
			<Table.Cell>{person.about}</Table.Cell>
			<Table.Cell singleLine>
				<p>{person.latitude},</p>
				<p>{person.latitude}</p>
				<a href={url} target="_blank" rel="noopener noreferrer">map</a>
			</Table.Cell>
			<Table.Cell>{tags}</Table.Cell>
			<Table.Cell singleLine>{friends}</Table.Cell>
		</Table.Row>
	)
}