import React from 'react';
import PersonCard from './PersonCard.jsx'
import {Card} from 'semantic-ui-react'

const PersonContainer = (props) => {
	const data = props.data;

	return (<Card.Group centered={true}>
		{data.map((person, key) => {
			return <PersonCard key={key} person={person}/>
		})}
	</Card.Group>);
};
export default PersonContainer;
