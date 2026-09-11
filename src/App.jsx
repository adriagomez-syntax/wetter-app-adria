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
			<main className="flex-1 flex flex-col gap-4 bg-background-mid p-4">
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
							? <>
								<ResultSection {...weather} />
								<TelemetrySection {...weather} airQuality={ airQuality } />
								<ForecastSection forecast={ forescast } />
							</>
							: <InfoBlock text="Beginne mit der Suche nach einer Stadt…" />
				}
			</main>
			<Footer />
		</div>
	)
}
