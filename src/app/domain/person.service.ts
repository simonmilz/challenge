import {Challenge} from '../config/api.constants';
import PersonDto from './person.dto';

const defaultFechOptions = {
	method: 'GET',
	headers: {'Content-Type': 'application/json'}
}

interface Response {
	status: number;
	json: Function;
}

const processApiResponse = async (apiResponse: Response) => {
	if (![200, 201].includes(apiResponse.status)) {
		return false;
	}
	const fullResponse = await apiResponse.json();
	const data = fullResponse.data.map(json => new PersonDto(json))
	return data;
}

export default class PersonService {
	static async getPersonList() {
		const apiResponse = await fetch(`${Challenge.API}/persons`, defaultFechOptions);
		return await processApiResponse(apiResponse);
	};
}