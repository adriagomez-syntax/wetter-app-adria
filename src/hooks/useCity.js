import { useEffect } from "react"
import { useLocalStorage } from "./useLocalStorage"
import { useDebounce } from "./useDebounce"

export function useCity(value) {
	const [city, setCity] = useLocalStorage("lastCity", "")
	const debounced = useDebounce(value ? value.trim() : value)

	useEffect(() => {
		setCity(debounced)

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debounced])

	return city
}