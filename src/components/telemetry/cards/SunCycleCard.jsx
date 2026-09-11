import { FaSun } from "react-icons/fa";
import TelemetryCard from "./TelemetryCard";
import { formatTime } from "../../../assets/utils";

export default function SunCycleCard({ sunrise, sunset }) {
	
	const riseHour = sunrise ? formatTime(sunrise) : "--"
	const setHour = sunset ? formatTime(sunset) : "--"
	
	const totalLight = sunrise && sunset ? sunset - sunrise : ""
	const lightHour = totalLight ? Math.floor(totalLight / 3600) : ""
	const lightMinute = totalLight ? Math.floor((totalLight % 3600) / 60) : ""
	
	return (
		<TelemetryCard title="Sonne" icon={ FaSun } iconColor="text-secondary">
			<div className="flex flex-col gap-2">
				<div className="flex flex-col gap-2 font-light text-xs">
					<div className="flex gap-2 justify-between">
						<p>Auf:</p>
						<p>{ riseHour }</p>
					</div>
					<div className="flex gap-2 justify-between">
						<p>Unter:</p>
						<p>{ setHour }</p>
					</div>
				</div>
				{ totalLight &&
					<p className="text-secondary text-sm">{`${lightHour}h ${lightMinute}m Licht`}</p>
				}
			</div>
		</TelemetryCard>
	)
}