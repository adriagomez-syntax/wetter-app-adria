import { FaTint } from "react-icons/fa";
import Card from "../utils/Card";
import WeatherIcon from "../utils/WeatherIcon";
import { FaWind } from "react-icons/fa6";

export default function ForecastCard({ dt_txt, main, weather, wind }) {
	
	const weatherIcon = weather ? weather[0].icon : ""
	const weatherName = weather ? weather[0].main : ""
	const dayText = new Date(dt_txt).toLocaleDateString("de-De", { weekday: "short", day: "numeric" })
	const description = weather ? weather[0].description : ""
	const temp = main ? Math.round(main.temp) : ""
	const temp_min = main ? Math.round(main.temp_min) : ""
	const temp_max = main ? Math.round(main.temp_max) : ""
	const humidity = main ? main.humidity : ""
	const windSpeed = wind ? Math.trunc(wind.speed * 3.6) : ""

	return (
		<Card className="flex-1 grid grid-cols-4 gap-2 items-center">
			<div className="col-span-2 flex gap-4 items-center">
				<WeatherIcon icon={ weatherIcon } alt={ weatherName } className="max-h-10" />
				<div className="flex flex-col gap-2 justify-between items-start overflow-hidden">
					<h3 className="font-bold">{ dayText }</h3>
					<p title={ description } className="max-w-full text-xs truncate">{ description }</p>
				</div>
			</div>
			<div className="flex flex-col gap-2 items-center">
				<p className="font-bold">{ temp }°C</p>
				<div className="flex gap-2 text-xs">
					<p className="text-primary">{ temp_min }°C</p>
					<p className="text-secondary">{ temp_max }°C</p>
				</div>
			</div>
			<div className="flex flex-col gap-2 justify-between items-end">
				<div className="flex gap-2 items-center text-xs text-primary">
					<FaTint />
					<p>{ humidity }%</p>
				</div>
				<div className="flex gap-2 items-center text-xs text-secondary">
					<FaWind />
					<p>{ windSpeed } km/h</p>
				</div>
			</div>
		</Card>
	)
}