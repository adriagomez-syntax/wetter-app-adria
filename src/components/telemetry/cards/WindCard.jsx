import { FaWind } from "react-icons/fa6"
import { getDirection } from "../../../assets/utils"
import TelemetryCard from "./TelemetryCard"

export default function WindCard({ speed, gust, deg }) {

	const windKm = speed ? Math.trunc(speed * 3.6) : "--"
	const gustKm = gust ? (gust ? Math.trunc(gust * 3.6) : "") : ""
	const direction = deg ? getDirection(deg) : ""

	return (
		<TelemetryCard
			title="Wind" 
			icon={ FaWind } 
			value={ windKm } 
			units="km/h" 
			extra={ direction }
		>
			{ gustKm &&
				<div className="flex gap-1">
					<p>Böen: </p>
					<span>{ gustKm } km/h</span>
				</div>
			}
		</TelemetryCard>
	)
}