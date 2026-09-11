import { FaArrowsDownToLine } from "react-icons/fa6"
import { getPressure } from "../../../assets/utils"
import TelemetryCard from "./TelemetryCard"

export default function PressureCard({ pressure }) {
	
	const pressureVal = pressure ? pressure : "--"
	const { text, color } = pressure ? getPressure(pressure) : {}

	return (
		<TelemetryCard
			title="Luftdruck"
			icon={ FaArrowsDownToLine }
			value={ pressureVal }
			units="hPa"
		>
			<p className={ color }>{ text }</p>
		</TelemetryCard>
	)
}