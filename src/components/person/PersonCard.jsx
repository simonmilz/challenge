import React from 'react';
import moment from 'moment';
import {Icon, Card, Image, Container} from 'semantic-ui-react'

import Status from '../status/Status.jsx'
import Tags from '../tag/Tags.jsx'
import Friends from '../friend/Friends.jsx';

import './PersonCard.css';

const PersonCard = (props) => {
	const person = props.person;

	return (
		<div className='personContainer'>
			<Card>
				<Card.Content>
					<Image
						floated='right'
						size='medium'
						src='/no-photo.png'
					/>
					<Card.Header>{`${person.firstname} ${person.lastname}`}</Card.Header>
					<Card.Meta> <strong>Created At: </strong>
						{moment(person.createdAt).format('MMM Do YYYY HH:MM:SS')}
					</Card.Meta>
					<Card.Meta> <strong>Status: </strong><Status active={person.isActive}/> </Card.Meta>
					<Friends friends={person.friends}/>
					<Tags tags={person.tags}/>
				</Card.Content>

				<Card.Content>
					<div className='atrr'>
						<Icon name='phone'/>{person.phone}
					</div>

					<div className='atrr'>
						<Icon name='mail' link={true}/>
						<a href={`mailto:${person.email}`}>{person.email}</a>
					</div>

					<div className='atrr'>
						<Icon name='map marker alternate' link={true}/>
						<a href={`http://maps.google.com/maps?q=${person.latitude},${person.longitude}`}>{person.address}</a>
					</div>
				</Card.Content>

				<Card.Content>
					<Card.Description>
						<div className='atrr'>
							<strong>Company: </strong>
							{person.company}
						</div>
					</Card.Description>

					<Card.Description>
						<div className='atrr'>
							<Container textAlign='justified'/>
							<strong>About: </strong>
							<p>{person.about}</p>
						</div>
					</Card.Description>
				</Card.Content>
			</Card>
		</div>
	);

};
export default PersonCard;
