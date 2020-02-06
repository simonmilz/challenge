import React, { Component } from 'react'
import { Image, Header } from 'semantic-ui-react'

class Profile extends Component {
	render = () => (
		<Header as='h4' image>
			<Image src={this.props.data.image} rounded size='mini'/>
			<Header.Content>
				{this.props.data.firstname} {this.props.data.lastname}
				<Header.Subheader>{this.props.data.email}</Header.Subheader>
			</Header.Content>
		</Header>
	)
}

export default Profile