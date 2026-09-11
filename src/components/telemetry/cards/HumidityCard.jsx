import { FaTint } from "react-icons/fa"
import TelemetryCard from "./TelemetryCard"
import PercentBar from "../../utils/PercentBar"

export default function HumidityCard({ humidity }) {
	
	const humidityVal = humidity ? humidity : "--"
	
	return (
		<TelemetryCard
			title="Luftfeuchte" 
			icon={ FaTint } 
			value={ humidityVal } 
			units="%"
		>
			{ humidity &&
				<PercentBar percent={ humidityVal } />
			}
		</TelemetryCard>
	)
}