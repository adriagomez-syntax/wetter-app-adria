import { getIcon } from "../../api/weatherApi";

export default function WeatherIcon({ icon, alt = "", className = "" }) {
	return (
		<img src={ getIcon(icon) } alt={ alt } className={ className } />
	)
}