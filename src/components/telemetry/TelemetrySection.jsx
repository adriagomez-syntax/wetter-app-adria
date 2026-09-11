import { FaRegChartBar } from "react-icons/fa6";
import WindCard from "./cards/WindCard";
import HumidityCard from "./cards/HumidityCard";
import PressureCard from "./cards/PressureCard";
import RainCard from "./cards/RainCard";
import VisibilityCard from "./cards/VisibilityCard";
import AirQualityCard from "./cards/AirQualityCard";
import SunCycleCard from "./cards/SunCycleCard";
import CloudyCard from "./cards/CloudyCard";

export default function TelemetrySection({ main, wind, rain, snow, clouds, visibility, airQuality, sys }) {
	return (
		<section className="flex flex-col gap-4">
			<div className="flex gap-2 items-center">
				<FaRegChartBar className="text-primary" />
				<h1 className="font-secondary font-bold">Meteorologische Telemetrie</h1>
			</div>
			<div className="grid grid-cols-2 gap-4">
				<WindCard {...wind} />
				<HumidityCard {...main} />
				<PressureCard {...main} />
				<RainCard rain={ rain } snow={ snow } />
				<CloudyCard {...clouds} />
				<VisibilityCard visibility={ visibility } />
				<AirQualityCard {...airQuality} />
				<SunCycleCard {...sys} />
			</div>
		</section>
	)
}