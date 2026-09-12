export const temperatureUnits = [
	{ id: "metric", rep: "°C", velocity: "km/h" },
	{ id: "imperial", rep: "°F", velocity: "mph" }
]

const directions = [
	"N",
	"NNE",
	"NE",
	"ENE",
	"E",
	"ESE",
	"SE",
	"SSE",
	"S",
	"SSW",
	"SW",
	"WSW",
	"W",
	"WNW",
	"NW",
	"NNW"
]

export function getDirection(deg) {
	const index = Math.round(deg / 22.5) % 16

	return directions[index]
}

const pressureRang = [
	{ val: 999, text: "Niedrig", color: "text-secondary" },
	{ val: 1025, text: "Normal", color: "text-primary" },
	{ val: Infinity, text: "Hoch", color: "text-accent-1" }
]

export function getPressure(pressure) {
	const { text, color } = pressureRang.find(item => item.val <= pressure) || {}

	return { text, color }
}

const cloudinessRang = [
	{ val: 10, text: "Klar", color: "text-primary" },
	{ val: 30, text: "Leicht bewölkt", color: "text-secondary" },
	{ val: 60, text: "Teilweise bewölkt", color: "text-secondary" },
	{ val: 80, text: "Stark bewölkt", color: "text-accent-1" },
	{ val: Infinity, text: "Bedeckt", color: "text-accent-1" }
]

export function getCloudiness(percent) {
	const { text, color } = cloudinessRang.find(item => percent <= item.val) || {}

	return { text, color }
}

const visibilityRang = [
	{ val: 2, text: "Schlechte Sicht", color: "text-accent-1" },
	{ val: 6, text: "Mäßige Sicht", color: "text-secondary" },
	{ val: Infinity, text: "Gute Sicht", color: "text-primary" }
]

export function getVisibility(visibility) {
	const { text, color } = visibilityRang.find(item => item.val >= visibility) || {}

	return { text, color }
}

const airQualityRang = [
	{ val: 1, text: "Gut", color: "text-primary" },
	{ val: 2, text: "Ausreichend", color: "text-secondary" },
	{ val: 3, text: "Mäßig", color: "text-secondary" },
	{ val: 4, text: "Schlecht", color: "text-accent-1" },
	{ val: 5, text: "Sehr schlecht", color: "text-accent-1" }
]

export function getAirQualityDesc(index) {
	const { text, color } = airQualityRang.find(item => item.val === index) || {}

	return { text, color }
}

export function formatTime(unixTime) {
	return new Date(unixTime * 1000).toLocaleTimeString("de-De", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: false
	}) + " Uhr"
}