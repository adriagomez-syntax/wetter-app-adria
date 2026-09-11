import { FaCrosshairs, FaSearch } from "react-icons/fa";
import Card from "../utils/Card";
import Input from "../utils/Input";
import Button from "../utils/Button";
import { useEffect, useState } from "react";
import { getAirQuality, getCoords, getCurrentWeather, getForecast } from "../../api/weatherApi";

export default function SearchSection({ setWeather, setForecast, setAirQuality, setLoading, setError }) {
	
	const [position, setPosition] = useState(null)
	const [query, setQuery] = useState("")
	const [city, setCity] = useState("")

	function handleSubmit(event) {

		event.preventDefault()

		if (query.trim() === "") { return }

		setCity(query.trim())
	}

	useEffect(() => {
		const controller = new AbortController()

		async function load() {
			
			if (!position && !city) {
				setWeather(null)
				setForecast([])
				setAirQuality(null)
				return
			}

			setLoading(true)
			setError(null)
			
			try
			{
				let lat = position ? position.lat : ""
				let lon = position ? position.lon : ""

				if (!position) {
					const resp = await getCoords(city, controller.signal)
					lat = resp.lat
					lon = resp.lon
				}

				let weatherData = null
				let forecastData = null
				let airQualityData = null

				Promise.all([
					getCurrentWeather(lat, lon, controller.signal),
					getForecast(lat, lon, controller.signal),
					getAirQuality(lat, lon, controller.signal)
				])
					.then((values) => {
						weatherData = values[0]
						forecastData = values[1]
						airQualityData = values[2]

						setWeather(weatherData)
						setForecast(forecastData.list.filter((item) => item.dt_txt.includes("12:00:00")))
						setAirQuality(airQualityData.list[0])
					})
			} catch(e) {
				if (e.name !== "AbortError") { setError(e.message) }
			} finally {
				setLoading(false)
			}
		}

		load()

		return () => controller.abort()

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [position, city])

	function getCurrentLocation() {
		navigator.geolocation.getCurrentPosition(
			(res) => {
				setCity("")
				setPosition({
					lat: res.coords.latitude,
					lon: res.coords.longitude
				})
			},
			(error) => setError(`Fehler bei der Geolokalisierung: ${error.message}`)
		)
	}

	return (
		<section className="flex w-full">
			<Card className="w-full max-w-full">
				<form onSubmit={handleSubmit} className="flex gap-2 items-center">
					<Input className="flex-1" placeholder="Stadt suchen..." icon={ FaSearch } value={ query } onChange={ setQuery } hasDelete={ true } />
					{ navigator.geolocation &&
						<Button className="flex justify-center items-center rounded-full bg-primary text-background p-2" onClick={ getCurrentLocation }>
							<FaCrosshairs />
						</Button>
					}
				</form>
			</Card>
		</section>
	)
}