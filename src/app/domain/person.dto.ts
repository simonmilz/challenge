interface IFriend {
	id: number
	name: string;
}

export default class PersonDto {
	_id: string;
	isActive: boolean;
	createdAt: Date;
	firstname: string;
	lastname: string;
	company: string;
	email: string;
	phone: string;
	address: string;
	about: string;
	latitude: string
	longitude: string;
	tags: string[];
	friends: IFriend[]

	constructor(json) {
		Object.assign(this, json)
	}

	getFullName() {
		return `${this.firstname} ${this.lastname}`
	}
}