import http from './httpService';
import { baseUrl } from '../Config.json';

export const addSuggestion = async (payload) => {
	let { data } = await http.post(`${baseUrl}/suggestion/`, payload);
	return data;
};

export const getSuggestions = async (q) => {
	let { data } = await http.get(`${baseUrl}/suggestion?text=` + q);
	return data;
};
