import { useEffect, useState } from "react";

export function useToggle(listValues, initialValue, callback = null) {

	const [index, setIndex] = useState(() => listValues.find(val => val === initialValue))
	const [value, setValue] = useState(initialValue)

	function toggle() {
		
		const newIndex = (index + 1) % listValues.length
		setIndex(newIndex)
		setValue(listValues[newIndex])
	}

	useEffect(() => {
		if (callback) { callback(value) }
	
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value])

	return [value, toggle]
}