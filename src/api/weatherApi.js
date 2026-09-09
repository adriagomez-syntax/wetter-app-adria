const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE = 'https://api.openweathermap.org/data/2.5';

export async function getCurrentWeather(city) {
	const url = `${BASE}/weather?q=${encodeURIComponent(city)}&units=metric&lang=de&appid=${API_KEY}`

	const res = await fetch(url)
		.then((res) => {
			if (!res.ok) { throw new Error(`Wetter nicht gefunden (${res.status})`) }
			return res.json()
		})

	return res
}

export async function getForecast(city) {
	const url = `${BASE}/forecast?q=${encodeURIComponent(city)}&units=metric&lang=de&appid=${API_KEY}`

	const res = await fetch(url)
		.then((res) => {
			if (!res.ok) { throw new Error(`Vorhersage nicht gefunden (${res.status})`) }
			return res.json()
		})

	return res
}