import React, { Component } from 'react'
import Profile from '../Profile/Profile'
import { Table, Icon } from 'semantic-ui-react'
import FriendList from '../FriendList/FriendList'

class PersonList extends Component {
	render () {
		let persons = this.props.persons || []
		return (
			<Table basic='very' celled collapsing>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell width='three'>Person</Table.HeaderCell>
						<Table.HeaderCell>Active</Table.HeaderCell>
						<Table.HeaderCell>Phone</Table.HeaderCell>
						<Table.HeaderCell>Company</Table.HeaderCell>
						<Table.HeaderCell>CreatedAt</Table.HeaderCell>
						<Table.HeaderCell>Address</Table.HeaderCell>
						<Table.HeaderCell width='six'>About</Table.HeaderCell>
						<Table.HeaderCell>Friends</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{persons.map((person) => {
							return (
								<Table.Row key={person._id}>
									<Table.Cell>
										<Profile data={person}/>
									</Table.Cell>
									<Table.Cell>
										{person.isActive ? (
										<Icon color='green' name='checkmark' size='large' />
										) : ""}
									</Table.Cell>
									<Table.Cell>{person.phone}</Table.Cell>
									<Table.Cell>{person.company}</Table.Cell>
									<Table.Cell>
										{Intl.DateTimeFormat('en-US', {
											year: 'numeric',
											month: 'short',
											day: '2-digit'
										}).format(new Date(person.createdAt))}
									</Table.Cell>
									<Table.Cell>{person.address}</Table.Cell>
									<Table.Cell>{person.about}</Table.Cell>
									<Table.Cell><FriendList friends={person.friends}/></Table.Cell>
								</Table.Row>
							)
						}
					)}
				</Table.Body>
			</Table>
		)
	}
}

export default PersonList
