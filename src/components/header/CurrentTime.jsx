import { useCurrentTime } from "../../hooks/useCurrentTime"

export default function CurrentTime() {
	
	const today = useCurrentTime()
	
	return (
		<div className="flex font-light gap-1 text-xs">
			<p>
				{ today.toLocaleDateString('de-DE', { weekday: 'short', month: 'long', day: 'numeric' }) }
			</p>
			<p className="text-accent-3/20">•</p>
			<p>
				{ today.toLocaleTimeString('de-DE', { hour12: true, hour: '2-digit', minute: '2-digit', timeZoneName: 'short' }) }
			</p>
		</div>
	)
}