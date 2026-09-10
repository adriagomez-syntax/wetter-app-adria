import Logo from "../header/Logo";
import Card from "../utils/Card";
import { FaInfoCircle, FaMapMarkerAlt } from "react-icons/fa";

export default function ResultSection() {
	
	const city = "Berlin, Deutschland"
	const temp = 19
	const desc = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus eveniet voluptas sequi sit provident officiis tenetur architecto, vero eos ea! Perspiciatis, voluptatem aliquam. Ipsum voluptates impedit dolore aspernatur nisi sunt!"
	
	return (
		<section>
			<Card className="flex flex-col gap-6 w-full max-w-full">
				<div className="flex flex-col gap-2">
					<div className="flex gap-2 items-center">
						<FaMapMarkerAlt className="text-primary" />
						<h1 className="font-secondary font-bold text-2xl truncate">{ city }</h1>
					</div>
					<p className="text-xs">{`Koordinaten: 52.5200° N, 4050° O`}</p>
				</div>
				<div className="flex gap-4 justify-between items-center">
					<div className="flex flex-col gap-2">
						<div className="flex gap-1 items-end">
							<h2 className="font-secondary font-bold text-5xl">{temp}</h2>
							<span className="text-primary text-2xl">°C</span>
						</div>
						<div className="flex gap-2 text-xs font-light">
							<p>{`Gefühlt 18°C`}</p>
							<p className="text-background-dark/20">•</p>
							<p className="text-secondary">{`T: 12°C H: 21°C`}</p>
						</div>
					</div>
					<Logo />
				</div>
				<div className="flex gap-2 items-center bg-primary/20 rounded-lg p-4">
					<FaInfoCircle className="text-primary shrink-0" />
					<p className="text-xs truncate">{ desc }</p>
				</div>
			</Card>
		</section>
	)
}