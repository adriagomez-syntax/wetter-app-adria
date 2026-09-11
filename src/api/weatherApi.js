const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const GEO = "/geo/1.0"
const DATA = "/data/2.5"
const IMG = "/img/wn"

function getBase(api = true) {
	const url = `https://${api ? "api." : ""}openweathermap.org`

	return url
}

export async function getRequest(url, errorMsg) {
	const res = await fetch(url)
		.then((res) => {
			if (!res.ok) { throw new Error(`${errorMsg} (${res.status})`) }

			return res.json()
		})

	return res
}

export async function getCoords(city) {
	const url = `${getBase()}${GEO}/direct?q=${encodeURIComponent(city)}&limit=1&appid=${API_KEY}`

	const resp = await getRequest(url, "Geolokalisierung nicht gefunden")
	const data = resp[0]
	const { lon, lat, state } = data

	return { lon, lat, state }
}

export async function getCurrentWeather(lat, lon) {
	const url = `${getBase()}${DATA}/weather?lat=${lat}&lon=${lon}&units=metric&lang=de&appid=${API_KEY}`
	
	return await getRequest(url, "Wetter nicht gefunden")
}

export async function getForecast(city) {
	const url = `${getBase()}${DATA}/forecast?q=${encodeURIComponent(city)}&units=metric&lang=de&appid=${API_KEY}`

	return await getRequest(url, "Vorhersage nicht gefunden")
}

export async function getAirQuality(lat, lon) {
	const url = `${getBase()}${DATA}/air_pollution?lat=${lat}&lon=${lon}&units=metric&lang=de&appid=${API_KEY}`

	return await getRequest(url, "Luftqualität nicht gefunden")
}

export function getIcon(icon) {
	const url = `${getBase(false)}${IMG}/${icon}@2x.png`

	return url
}
