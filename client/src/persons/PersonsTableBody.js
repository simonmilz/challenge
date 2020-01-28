import _ from 'lodash';


import {Table} from 'semantic-ui-react';
import React from 'react';
import PersonsTableRow from "./PersonsTableRow";

export default function PersonsTableBody(props) {
	const persons = props.persons;
	const personsTableRows = _.map(persons, (person) => <PersonsTableRow person={person}/>);

	return (
		<Table.Body>
			{personsTableRows}
		</Table.Body>
	);
}