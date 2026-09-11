import { useState } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ResultSection from "./components/result/ResultSection";
import SearchSection from "./components/search/SearchSection";
import TelemetrySection from "./components/telemetry/TelemetrySection";
import ForecastSection from "./components/forecast/ForecastSection";
import LoadingSection from "./components/loading/LoadingSection";
import ErrorSection from "./components/error/ErrorSection";
import InfoBlock from "./components/utils/InfoBlock";

export default function App() {
	
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)
	const [weather, setWeather] = useState(null)
	const [forescast, setForecast] = useState([])
	const [airQuality, setAirQuality] = useState([])
	
	return (
		<div className="flex flex-col min-h-screen font-primary text-text bg-background">
			<Header />
			<main className="flex-1 flex bg-background-mid p-4 md:justify-center">
				<div className="min-w-0 flex-1 flex flex-col gap-4 md:max-w-[60vw]">
					<SearchSection 
						setLoading={ setLoading } 
						setError={ setError } 
						setWeather={ setWeather } 
						setForecast={ setForecast } 
						setAirQuality={ setAirQuality } 
					/>
					{ loading
						? <LoadingSection />
						: error
							? <ErrorSection message={ error } />
							: (weather && forescast && airQuality)
								? <div className="flex flex-col gap-4 md:flex-row md:justify-between">
									<div className="flex flex-col gap-4 md:w-1/2">
										<ResultSection {...weather} />
										<TelemetrySection {...weather} airQuality={ airQuality } />
									</div>
									<ForecastSection forecast={ forescast } />
								</div>
								: <InfoBlock text="Beginne mit der Suche nach einer Stadt…" />
					}
				</div>
			</main>
			<Footer />
		</div>
	)
}
