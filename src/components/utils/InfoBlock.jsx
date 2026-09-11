import { FaInfoCircle } from "react-icons/fa";

export default function InfoBlock({ text }) {
	return (
		<div className="flex gap-2 items-center bg-primary/20 rounded-lg p-4">
			<FaInfoCircle className="text-primary shrink-0" />
			<p className="text-xs truncate">{ text }</p>
		</div>
	)
}