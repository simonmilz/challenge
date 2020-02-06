const apiUrl = process.env.API_URL || 'http://localhost:1337/api'
const md5 = require('md5')

class PersonService {
	static async getPersonList () {
		return fetch(`${apiUrl}/persons`, {
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(async response => {
			if (response.ok) {
				let json = await response.json()
				let withGravatar = (json.data || []).map((item) => {
					item.image = PersonService.getGravatarForEmail(item.email)
					return item;
				})
				console.log(withGravatar);
				return withGravatar;
			}
			throw new Error('Invalid response')
		})
	}

	static getGravatarForEmail (email) {
		const hash = md5(email.trim())
		return `https://www.gravatar.com/avatar/${hash}?s=80&d=monsterid`
	}
}

export default PersonService