import { useEffect, useState } from "react"
import monthNames from "../../assets/monthNames.json" with { type: "json" }

export default function CurrentTime() {
	
	const [today, setToday] = useState(new Date())
		
	useEffect(() => {
		const interval = setInterval(() => setToday(new Date()), 60000)
		return () => clearInterval(interval)
	}, [])
	
	return (
		<div className="flex font-light gap-1 text-xs">
			<p>
				{`Heute, ${today.getUTCDay()}. ${monthNames[today.getMonth()]}`}
			</p>
			<p className="text-accent-3/20">•</p>
			<p>
				{`${(today.getHours() % 12).toString().padStart(2, "0")}:${today.getMinutes().toString().padStart(2, "0")} ${today.getHours() >= 12 ? "PM" : "AM" }`}
			</p>
		</div>
	)
}