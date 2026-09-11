import Card from "../utils/Card";
import { FaMapMarkerAlt } from "react-icons/fa";
import WeatherIcon from "../utils/WeatherIcon";
import InfoBlock from "../utils/InfoBlock"

export default function ResultSection({ coord, weather, main, name, sys }) {
	
	const fullName = name && sys ? `${ name }, ${ sys.country }` : "--"
	const fullCoords = coord ? `${coord.lon}° N, ${coord.lat}° O` : "--"
	const temp = main ? Math.trunc(main.temp) : "--"
	const feels_like = main ? Math.trunc(main.feels_like) : "--"
	const temp_min = main ? Math.trunc(main.temp_min) : "--"
	const temp_max = main ? Math.trunc(main.temp_max) : "--"
	const description = weather ? weather[0].description : "--"
	const weatherIcon = weather ? weather[0].icon : ""
	const weatherName = weather ? weather[0].main : ""
	
	return (
		<section>
			<Card className="flex flex-col gap-2 w-full max-w-full">
				<div className="flex flex-col gap-2">
					<div className="flex gap-2 items-center">
						<FaMapMarkerAlt className="text-primary" />
						<h1 title={ fullName } className="font-secondary font-bold text-2xl truncate">{ fullName }</h1>
					</div>
					<p className="text-xs">{`Koordinaten: ${fullCoords}`}</p>
				</div>
				<div className="flex gap-4 justify-between items-center">
					<div className="flex flex-col gap-2">
						<div className="flex gap-1 items-end">
							<h2 className="font-secondary font-bold text-5xl">{ temp }</h2>
							<span className="text-primary text-2xl">°C</span>
						</div>
						<div className="flex gap-2 text-2xs font-light">
							<p>{`Gefühlt ${ feels_like }°C`}</p>
							<p className="text-background-dark/20">•</p>
							<p className="text-secondary">{`T: ${ temp_min }°C H: ${ temp_max }°C`}</p>
						</div>
					</div>
					<WeatherIcon icon={ weatherIcon } alt={ weatherName } />
				</div>
				<InfoBlock text={ description } />
			</Card>
		</section>
	)
}