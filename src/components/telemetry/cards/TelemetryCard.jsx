import Card from "../../utils/Card";

export default function TelemetryCard({ title, icon, iconColor = "text-primary", value, units, unitsColor = "", extra, children }) {
	
	const Icon = icon
	
	return (
		<Card className="flex flex-col gap-2 justify-between">
			<div className="flex gap-2 justify-between items-center">
				<h2 className="font-secondary font-light tracking-widest uppercase text-xs">{ title }</h2>
				<Icon className={ iconColor } />
			</div>
			<div className="flex gap-4 items-end">
				<div className="flex gap-1 items-end">
					<h3 className="font-bold text-xl">{ value }</h3>
					<span className={ unitsColor }>{ units }</span>
				</div>
				{ extra &&
					<span className="font-light tracking-widest text-secondary">{ extra }</span>
				}
			</div>
			<div className="text-sm">
				{ children }
			</div>
		</Card>
	)
}