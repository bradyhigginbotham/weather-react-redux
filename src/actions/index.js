import axios from 'axios';

const API_KEY = '205943f95f72a65c37257bb55003d6a2';
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	let url = `${API_URL}&q=${city},us`;

	return {
		type: FETCH_WEATHER,
		payload: axios.get(url)
	};
}