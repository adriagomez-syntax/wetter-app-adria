import { useState } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ResultSection from "./components/result/ResultSection";
import SearchSection from "./components/search/SearchSection";
import TelemetrySection from "./components/telemetry/TelemetrySection";

export default function App() {
	
	const [state, setState] = useState("")
	const [weather, setWeather] = useState(null)
	const [forescast, setForecast] = useState([])
	const [airQuality, setAirQuality] = useState([])
	
	return (
		<div className="flex flex-col min-h-screen font-primary text-text bg-background">
			<Header />
			<main className="flex-1 flex flex-col gap-4 bg-background-mid p-4">
				<SearchSection setState={ setState } setWeather={ setWeather } setForecast={ setForecast } setAirQuality={ setAirQuality } />
				<ResultSection state={ state } {...weather} />
				<TelemetrySection {...weather} airQuality={ airQuality } />
			</main>
			<Footer />
		</div>
	)
}
