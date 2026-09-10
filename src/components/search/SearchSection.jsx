import { FaCrosshairs, FaSearch } from "react-icons/fa";
import Card from "../utils/Card";
import Input from "../utils/Input";
import Button from "../utils/Button";
import { useState } from "react";

export default function SearchSection() {
	
	const [query, setQuery] = useState("")
	const [city, setCity] = useState("Berlin")

	function handleSubmit(event) {

		event.preventDefault()

		if (query.trim() === "") { return }

		setCity(query.trim())
	}

	return (
		<section className="flex w-full">
			<Card className="w-full">
				<form onSubmit={handleSubmit} className="flex w-full gap-2 items-center">
					<Input placeholder="Stadt suchen..." icon={ FaSearch } value={ query } onChange={ (event) => setQuery(event.target.value) } hasDelete={ true } />
					<Button type="submit" className="flex justify-center items-center rounded-full bg-primary text-background p-2">
						<FaCrosshairs />
					</Button>
				</form>
			</Card>
		</section>
	)
}