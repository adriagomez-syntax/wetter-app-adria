import { FaRegSnowflake } from "react-icons/fa6";
import TelemetryCard from "./TelemetryCard";
import { FaCloudShowersHeavy } from "react-icons/fa";

export default function RainCard({ rain, snow }) {
	
	const rainVal = snow ? snow["1h"] : (rain ? rain["1h"] : "--")
	const Icon = snow ? FaRegSnowflake : FaCloudShowersHeavy
	const title = snow ? "Schnee" : "Regen"

	return (
		<TelemetryCard title={ title } icon={ Icon } value={ rainVal } units="mm/h">
			<div></div>
		</TelemetryCard>
	)
}