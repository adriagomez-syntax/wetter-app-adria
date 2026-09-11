import { env } from "cloudflare:workers";

const API_KEY = env.API_KEY;
const GEO = "/geo/1.0"
const DATA = "/data/2.5"
const IMG = "/img/wn"

function getBase(api = true) {
	const url = `https://${api ? "api." : ""}openweathermap.org`

	return url
}

export async function getRequest(url, signal, errorMsg) {
	const res = await fetch(url, { signal })
		.then((res) => {
			if (!res.ok) { throw new Error(`${errorMsg} (${res.status})`) }
			return res.json()
		})

	return res
}

export async function getCoords(city, signal) {
	const url = `${getBase()}${GEO}/direct?q=${encodeURIComponent(city)}&limit=1&appid=${API_KEY}`
	const resp = await getRequest(url, signal, "Geolokalisierung nicht gefunden")
	if (resp.length < 1) { throw new Error("Geolokalisierung nicht gefunden") }

	return resp[0]
}

export async function getCurrentWeather(lat, lon, signal) {
	const url = `${getBase()}${DATA}/weather?lat=${lat}&lon=${lon}&units=metric&lang=de&appid=${API_KEY}`
	return await getRequest(url, signal, "Wetter nicht gefunden")
}

export async function getForecast(lat, lon, signal) {
	const url = `${getBase()}${DATA}/forecast?lat=${lat}&lon=${lon}&units=metric&lang=de&appid=${API_KEY}`
	return await getRequest(url, signal, "Vorhersage nicht gefunden")
}

export async function getAirQuality(lat, lon, signal) {
	const url = `${getBase()}${DATA}/air_pollution?lat=${lat}&lon=${lon}&units=metric&lang=de&appid=${API_KEY}`
	return await getRequest(url, signal, "Luftqualität nicht gefunden")
}

export function getIcon(icon) {
	const url = `${getBase(false)}${IMG}/${icon}@2x.png`
	return url
}
