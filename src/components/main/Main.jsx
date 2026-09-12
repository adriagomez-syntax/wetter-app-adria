import { useContext } from "react"
import { useWeather } from "../../hooks/useWeather"
import SearchSection from "../search/SearchSection"
import LoadingSection from "../loading/LoadingSection"
import ErrorSection from "../error/ErrorSection"
import ResultSection from "../result/ResultSection"
import TelemetrySection from "../telemetry/TelemetrySection"
import ForecastSection from "../forecast/ForecastSection"
import InfoBlock from "../utils/InfoBlock"
import ErrorContext from "../../context/ErrorContext"
import { useLocalStorage } from "../../hooks/useLocalStorage"
import { useCity } from "../../hooks/useCity"
import MapSection from "../map/MapSection"

export default function Main() {
	
	const { error } = useContext(ErrorContext)
	const [position, setPosition] = useLocalStorage("lastPosition", null)
	const [query, setQuery] = useLocalStorage("")
	const city = useCity(query)
	const { weather, forescast, airQuality, state, loading } = useWeather({city: city, position: position})
	
	return (
		<main className="flex-1 flex bg-background-mid p-4 md:justify-center">
			<div className="min-w-0 flex-1 flex flex-col gap-4 md:max-w-[60vw]">
				<SearchSection 
					query={ query }
					setQuery={ setQuery } 
					setPosition={ setPosition }
				/>
				{ loading
					? <LoadingSection />
					: error
						? <ErrorSection message={ error } />
						: (weather && forescast && airQuality)
							? <div className="flex flex-col gap-4 md:flex-row md:justify-between">
								<div className="flex flex-col gap-4 md:w-1/2">
									<ResultSection {...weather} state={ state } />
									<TelemetrySection {...weather} airQuality={ airQuality } />
								</div>
								<div className="flex flex-col gap-4 md:w-1/2">
									<ForecastSection forecast={ forescast } />
									{
									//	<MapSection />
									}
								</div>
									
							</div>
							: <InfoBlock text="Beginne mit der Suche nach einer Stadt…" />
				}
			</div>
		</main>
	)
}