import React from 'react';
import {Popup, Icon} from 'semantic-ui-react'
import './Tags.css';

const Tags = (props) => {
	const tags = props.tags || [];

	const getColor = function () {
		const tagColor = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'];
		let index = Math.floor(Math.random() * ((tagColor.length - 1) - (0)) + (0));
		return tagColor[index];
	};

	return tags.map((tag, key) => {
		return (
			<Popup content={tag} trigger={<div className='tag' key={key}>
				<Icon name='tag' color={getColor()}/>
			</div>}/>
		);
	});
};
export default Tags;
