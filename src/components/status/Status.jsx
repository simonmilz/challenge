import React from 'react';
import {Icon, Label} from 'semantic-ui-react';

const Status = (props) => {

	return (props.active ? <Label color='green' size='medium' content='online'/> :
		<Label color='red' size='medium' content='offline'/>);
};
export default Status;
