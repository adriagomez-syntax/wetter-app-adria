import { FaCloud } from "react-icons/fa6";
import TelemetryCard from "./TelemetryCard";
import { getCloudiness } from "../../../assets/utils";

export default function CloudyCard({ all }) {
	
	const cloudiness = all ? all : "--"
	const { text, color } = all ? getCloudiness(all) : {}
	
	return (
		<TelemetryCard title="Bewölkung" icon={ FaCloud } value={ cloudiness } units="%">
			<p className={ color }>{ text }</p>
		</TelemetryCard>
	)
}