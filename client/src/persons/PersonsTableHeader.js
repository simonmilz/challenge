import _ from 'lodash';
import uuidv4 from "uuid/v4";


import {Table} from 'semantic-ui-react';
import React from 'react';

const _about = (header) => <Table.HeaderCell width='16' key={uuidv4()}>{header}</Table.HeaderCell>;
const _header = (header) => <Table.HeaderCell width='1' key={uuidv4()}>{header}</Table.HeaderCell>;

export default function PersonsTableHeader(props) {
	const headers = props.headers;
	const tableHeaderCells = _.map(headers, (h) => h === 'About' ? _about(h) : _header(h));

	return (
		<Table.Header>
			<Table.Row>
				{tableHeaderCells}
			</Table.Row>
		</Table.Header>
	);
}