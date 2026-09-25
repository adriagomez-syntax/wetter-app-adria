import { useContext, useEffect, useState } from "react"
import { getAirQuality, getCoords, getCurrentWeather, getForecast } from "../api/weatherApi"
import ErrorContext from "../context/ErrorContext"
import TemperatureContext from "../context/TemperatureContext"

export function useWeather({ city, position }) {
	
	const { tempUnit } = useContext(TemperatureContext)
	const { setError } = useContext(ErrorContext)
	
	const [loading, setLoading] = useState(false)
	const [weather, setWeather] = useState(null)
	const [forescast, setForecast] = useState([])
	const [airQuality, setAirQuality] = useState([])
	const [state, setState] = useState("")

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
					setState(resp.name)
				}

				const [weatherData, forecastData, airQualityData] = await Promise.all([
					getCurrentWeather(lat, lon, controller.signal, tempUnit),
					getForecast(lat, lon, controller.signal, tempUnit),
					getAirQuality(lat, lon, controller.signal, tempUnit)
				])

				setWeather(weatherData)
				setForecast(forecastData.list.filter((item) => item.dt_txt.includes("12:00:00")))
				setAirQuality(airQualityData.list[0])

				if (position) {
					setState(weatherData.name)
				}
			} catch(e) {
				if (e.name !== "AbortError") { setError(e.message) }
			} finally {
				setLoading(false)
			}
		}

		load()

		return () => controller.abort()

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [city, position, tempUnit])

	return { weather, forescast, airQuality, state, loading }
}