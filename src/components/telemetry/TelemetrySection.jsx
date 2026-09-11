import { FaRegChartBar } from "react-icons/fa6";
import WindCard from "./cards/WindCard";
import HumidityCard from "./cards/HumidityCard";
import PressureCard from "./cards/PressureCard";
import RainCard from "./cards/RainCard";
import VisibilityCard from "./cards/VisibilityCard";
import AirQualityCard from "./cards/AirQualityCard";
import SunCycleCard from "./cards/SunCycleCard";
import CloudyCard from "./cards/CloudyCard";
import Section from "../utils/Section";

export default function TelemetrySection({ main, wind, rain, snow, clouds, visibility, airQuality, sys }) {
	return (
		<Section title="Meteorologische Telemetrie" icon={ FaRegChartBar }>
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
		</Section>
	)
}