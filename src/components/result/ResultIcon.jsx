import { getIcon } from "../../api/weatherApi";

export default function ResultIcon({ icon, alt }) {
	return (
		<img src={ getIcon(icon) } alt={ alt } className="" />
	)
}