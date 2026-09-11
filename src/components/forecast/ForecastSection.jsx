import { FaRegListAlt } from "react-icons/fa";
import Section from "../utils/Section";
import ForecastCard from "./ForecastCard";

export default function ForecastSection({ forecast }) {
	
	console.log(forecast)
	
	return (
		<Section title="7-Tage-Vorhersage" icon={ FaRegListAlt }>
			<ul className="flex flex-col gap-4">
				{ forecast &&
					forecast.map(item => (
						<ForecastCard key={ item.dt } {...item} />
					))
				}
			</ul>
		</Section>
	)
}