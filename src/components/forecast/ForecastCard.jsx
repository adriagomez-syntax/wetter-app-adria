import { FaTint } from "react-icons/fa";
import Card from "../utils/Card";
import WeatherIcon from "../utils/WeatherIcon";
import { FaWind } from "react-icons/fa6";
import { useContext } from "react";
import TemperatureContext from "../../context/TemperatureContext";
import { temperatureUnits } from "../../assets/utils";

export default function ForecastCard({ dt_txt, main, weather, wind }) {
	
	const { tempUnit } = useContext(TemperatureContext)
	const tempObj = temperatureUnits[tempUnit]
	const temprep = tempObj.rep
	const velocity = tempObj.velocity

	const weatherIcon = weather ? weather[0].icon : ""
	const weatherName = weather ? weather[0].main : ""
	const dayText = new Date(dt_txt).toLocaleDateString("de-De", { weekday: "short", day: "numeric" })
	const description = weather ? weather[0].description : ""
	const temp = main ? Math.round(main.temp) : ""
	const temp_min = main ? Math.round(main.temp_min) : ""
	const temp_max = main ? Math.round(main.temp_max) : ""
	const humidity = main ? main.humidity : ""
	const windSpeed = wind ? Math.trunc(wind.speed * tempObj.conversion) : ""

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
				<p className="font-bold">{`${ temp }${ temprep }`}</p>
				<div className="flex gap-2 text-xs">
					<p className="text-primary">{`${ temp_min }${ temprep }`}</p>
					<p className="text-secondary">{`${ temp_max }${ temprep }`}</p>
				</div>
			</div>
			<div className="flex flex-col gap-2 justify-between items-end">
				<div className="flex gap-2 items-center text-xs text-primary">
					<FaTint />
					<p>{ humidity }
						<span className="text-2xs"> %</span>
					</p>
				</div>
				<div className="flex gap-2 items-center text-xs text-secondary">
					<FaWind />
					<p>{ windSpeed }
						<span className="text-2xs">{` ${velocity}`}</span>
					</p>
				</div>
			</div>
		</Card>
	)
}