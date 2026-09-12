import { useContext } from "react";
import Button from "../utils/Button";
import { temperatureUnits } from "../../assets/utils";
import TemperatureContext from "../../context/TemperatureContext";

export default function UnitsToggle() {

	const { tempUnit, toogleTempUnit } = useContext(TemperatureContext)
	
	return (
		<Button 
			onClick={ toogleTempUnit }
			className={`w-4 h-6 flex items-center rounded-full transition-colors duration-300 ${tempUnit === 0 ? "bg-primary" : "bg-secondary"}`}
		>
			<div className={`flex items-center justify-center bg-background w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${tempUnit === 1 ? "translate-y-1" : "-translate-y-1"}`}>
				<span className={`${tempUnit === 0 ? "text-primary" : "text-secondary"} text-2xs transition-colors duration-300`}>
					{ temperatureUnits[tempUnit].rep }
				</span>
			</div>
		</Button>
	)
}