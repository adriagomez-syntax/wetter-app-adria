import { FaExclamationTriangle } from "react-icons/fa";

export default function ErrorSection({ message }) {
	return (
		<section className="flex-1 flex flex-col gap-4 justify-center items-center">
			<div className="flex gap-2 items-center text-xl text-accent-1 text-center">
				<FaExclamationTriangle />
				<h1 className="font-secondary font-bold">Ein Fehler ist aufgetreten!</h1>
			</div>
			<p className="text-sm">{ message }</p>
		</section>
	)
}