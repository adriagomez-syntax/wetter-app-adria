import { FaLeaf } from "react-icons/fa6";
import TelemetryCard from "./TelemetryCard";
import { getAirQualityDesc } from "../../../assets/utils";

export default function AirQualityCard({ main }) {
	
	const quality = main ? main.aqi : "--"
	const { text, color } = main ? getAirQualityDesc(quality) : {}
	
	return (
		<TelemetryCard
			title="Luftqualität"
			icon={ FaLeaf }
			iconColor="text-secondary"
			value={ quality }
		>
			<p className={ color }>{ text }</p>
		</TelemetryCard>
	)
}