export default function PercentBar({ percent, color = "bg-primary" }) {
	return (
		<div className="w-full bg-background-dark/20 rounded-full h-2">
			<div className={`${color} h-2 rounded-full`} style={{ width: `${percent}%` }}></div>
		</div>
	)
}