import { useState } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import ErrorContext from "./context/ErrorContext"
import TemperatureContext from "./context/TemperatureContext";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useToggle } from "./hooks/useToggle";
import { temperatureUnits } from "./assets/utils";

export default function App() {
	
	const [error, setError] = useState(null)
	const [tempUnitSave, setTempUnit] = useLocalStorage("tempUnits", 0)
	const [tempUnit, toogleTempUnit] = useToggle(Array.from(temperatureUnits.keys()), tempUnitSave, setTempUnit)
	
	return (
		<div className="flex flex-col min-h-screen font-primary text-text bg-background">
			<TemperatureContext value={{ tempUnit, toogleTempUnit }}>
				<Header />
				<ErrorContext value={{ error, setError }}>
					<Main />
				</ErrorContext>
				<Footer />
			</TemperatureContext>
		</div>
	)
}
