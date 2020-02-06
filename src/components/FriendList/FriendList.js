import React from 'react'
import Friend from './Friend'

class FriendList extends React.Component {

	render () {
		let friends = this.props.friends || []
		return (
			friends.map((friend) => (
				<Friend data={friend}/>
			))
		)
	}
}

export default FriendList