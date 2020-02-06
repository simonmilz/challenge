import React from 'react'
import { Label } from 'semantic-ui-react'
import PersonService from '../../services/PersonService'

class Friend extends React.Component {
	render () {
		let gravatar = PersonService.getGravatarForEmail(this.props.data.email || this.props.data.name)
		return (
			<Label as='a' image>
				<img src={gravatar}/>
				{this.props.data.name}
			</Label>
		)
	}
}

export default Friend