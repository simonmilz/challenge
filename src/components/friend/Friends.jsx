import React from 'react';
import {Modal, Icon, Label} from 'semantic-ui-react'

import './Friends.css'

const Friends = (props) => {
	const friends = props.friends || [];
	return (
		<Modal trigger={<div className='friendLink' size='mini'><a href='#'>
			<Icon name='user'/>
			{friends.length} Friends
		</a></div>} closeIcon={true}>
			<Modal.Header>Friends</Modal.Header>
			<Modal.Content>
				{friends.map((friend, key) => {
					return (<ul key={key}>
						<Label size='large'>
							<Icon name='user' color='blue'/> {friend.name}
						</Label>
					</ul>);
				})}
			</Modal.Content>
		</Modal>);
};
export default Friends;
