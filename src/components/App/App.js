import 'semantic-ui-css/semantic.min.css'
import React, { Component } from 'react'
import PersonList from '../PersonList/PersonList'
import PersonService from '../../services/PersonService'

class App extends Component {
	constructor (props) {
		super(props)
		this.state = {
			persons: []
		}
	}

	async componentDidMount () {
		await this.loadPersons()
	}

	async loadPersons () {
		var persons = await PersonService.getPersonList()
		this.setState({
			persons: persons
		})
	}

	render () {
		return (
			<div className="App" style={{padding: 20}}>
				<PersonList
					persons={this.state.persons}
				/>
			</div>
		)
	}
}

export default App
