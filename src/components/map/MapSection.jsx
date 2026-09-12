import { FaMap } from "react-icons/fa6";
import Section from "../utils/Section";
import { getMap } from "../../api/weatherApi";

export default function MapSection() {
	
	const map = getMap(12, 34)
	
	return (
		<Section title="" icon={ FaMap }>
			<img src={ map } />
		</Section>
	)
}