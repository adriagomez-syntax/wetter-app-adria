import { useEffect, useState } from "react"

export function useCurrentTime() {
	
	const [today, setToday] = useState(new Date())
			
	useEffect(() => {
		const interval = setInterval(() => setToday(new Date()), 60000)
		return () => clearInterval(interval)
	}, [])

	return today
}