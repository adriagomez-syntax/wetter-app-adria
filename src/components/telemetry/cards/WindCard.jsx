import { FaWind } from "react-icons/fa6"
import { temperatureUnits, getDirection } from "../../../assets/utils"
import TelemetryCard from "./TelemetryCard"
import { useContext } from "react"
import TemperatureContext from "../../../context/TemperatureContext"

export default function WindCard({ speed, gust, deg }) {

	const { tempUnit } = useContext(TemperatureContext)
	const tempObj = temperatureUnits[tempUnit]
	const velocity = tempObj.velocity

	const windKm = speed ? Math.trunc(speed * tempObj.conversion) : "--"
	const gustKm = gust ? (gust ? Math.trunc(gust * tempObj.conversion) : "") : ""
	const direction = deg ? getDirection(deg) : ""

	return (
		<TelemetryCard
			title="Wind" 
			icon={ FaWind } 
			value={ windKm } 
			units={ velocity } 
			extra={ direction }
		>
			{ gustKm &&
				<div className="flex gap-1">
					<p>Böen: </p>
					<span>{`${ gustKm } ${ velocity }`}</span>
				</div>
			}
		</TelemetryCard>
	)
}