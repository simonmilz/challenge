import React, {Component} from 'react';
import axios from 'axios';
import ListHeader from '../header/ListHeader.jsx'
import PersonContainer from "./PersonContainer.jsx";

class Person extends Component {

	state = {
		persons: []
	};

	componentDidMount() {
		axios.get('http://localhost:1337/api/persons')
			.then(res => {
				this.setState({persons: res.data.data});
			});
	};

	render() {
		const data = this.state.persons;

		return (
			<div className="Person">
				<ListHeader/>
				<PersonContainer data={data}/>
			</div>
		);
	}
}

export default Person;
