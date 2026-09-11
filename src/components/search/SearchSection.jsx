import { FaCrosshairs, FaSearch } from "react-icons/fa";
import Card from "../utils/Card";
import Input from "../utils/Input";
import Button from "../utils/Button";
import { useEffect, useState } from "react";
import { getAirQuality, getCoords, getCurrentWeather, getForecast } from "../../api/weatherApi";

export default function SearchSection({ setState, setWeather, setForecast, setAirQuality, setLoading, setError }) {
	
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
			if (!city) {
				setWeather(null)
				setForecast([])
				setAirQuality(null)
				return
			}

			setLoading(true)
			setError(null)
			try
			{
				const { lat, lon, state } = await getCoords(city, controller.signal)
				const weatherData = await getCurrentWeather(lat, lon, controller.signal)
				const forecastData = await getForecast(lat, lon, controller.signal)
				const airQualityData = await getAirQuality(lat, lon, controller.signal)
			
				setState(state)
				setWeather(weatherData)
				setForecast(forecastData.list.filter((item) => item.dt_txt.includes("12:00:00")))
				setAirQuality(airQualityData.list[0])
			} catch(e) {
				if (e.name !== "AbortError") { setError(e.message) }
			} finally {
				setLoading(false)
			}
		}

		load()

		return () => controller.abort()

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [city])

	return (
		<section className="flex w-full">
			<Card className="w-full max-w-full">
				<form onSubmit={handleSubmit} className="flex gap-2 items-center">
					<Input className="flex-1" placeholder="Stadt suchen..." icon={ FaSearch } value={ query } onChange={ setQuery } hasDelete={ true } />
					<Button type="submit" className="flex justify-center items-center rounded-full bg-primary text-background p-2">
						<FaCrosshairs />
					</Button>
				</form>
			</Card>
		</section>
	)
}