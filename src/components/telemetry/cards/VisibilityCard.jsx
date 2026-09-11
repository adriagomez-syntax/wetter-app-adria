import { FaRegEye } from "react-icons/fa";
import TelemetryCard from "./TelemetryCard";
import { getVisibility } from "../../../assets/utils";

export default function VisibilityCard({ visibility }) {
	
	const visibilityKm = visibility ? Math.trunc(visibility / 1000) : "--"
	const { text, color } = visibility ? getVisibility(visibility) : {}
	
	return (
		<TelemetryCard title="Sichtweite" icon={ FaRegEye } iconColor="text-accent-2" value={ visibilityKm } units="km">
			{ visibility &&
				<p className={ color }>{ text }</p>
			}
		</TelemetryCard>
	)
}