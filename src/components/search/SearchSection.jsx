import { FaCrosshairs, FaSearch } from "react-icons/fa";
import Card from "../utils/Card";
import Input from "../utils/Input";
import Button from "../utils/Button";
import { useContext, useState } from "react";
import ErrorContext from "../../context/ErrorContext";

export default function SearchSection({ setCity, setPosition }) {
	
	const [query, setQuery] = useState("")
	const { setError } = useContext(ErrorContext)

	function handleSubmit(event) {

		event.preventDefault()

		if (query.trim() === "") { return }

		setPosition(null)
		setCity(query.trim())
	}

	function onDelete() {
		setQuery("")
		setCity("")
	}

	function getCurrentLocation() {
		navigator.geolocation.getCurrentPosition(
			(res) => {
				setQuery("")
				setCity("")
				setPosition({
					lat: res.coords.latitude,
					lon: res.coords.longitude
				})
				setError(null)
			},
			(error) => setError(`Fehler bei der Geolokalisierung: ${error.message}`)
		)
	}

	return (
		<section className="flex w-full">
			<Card className="w-full max-w-full">
				<form onSubmit={handleSubmit} className="flex gap-2 items-center">
					<Input className="flex-1" placeholder="Stadt suchen..." icon={ FaSearch } value={ query } onChange={ (event) => setQuery(event.target.value) } onDelete={ onDelete } />
					{ navigator.geolocation &&
						<Button className="flex justify-center items-center rounded-full bg-primary text-background p-2" onClick={ getCurrentLocation }>
							<FaCrosshairs />
						</Button>
					}
				</form>
			</Card>
		</section>
	)
}