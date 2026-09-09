import { FaCrosshairs, FaSearch } from "react-icons/fa";
import Card from "../utils/Card";
import Input from "../utils/Input";
import Button from "../utils/Button";

export default function SearchSection() {
	return (
		<section className="flex w-full">
			<Card className="flex w-full gap-2 items-center">
				<Input className="flex-1" placeholder="Stadt suchen..." icon={ FaSearch } />
				<Button className="flex justify-center items-center rounded-full bg-primary text-background aspect-square p-2">
					<FaCrosshairs />
				</Button>
			</Card>
		</section>
	)
}