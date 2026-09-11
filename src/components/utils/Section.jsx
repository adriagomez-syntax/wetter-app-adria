export default function Section({ title, icon, className = "", children }) {
	
	const Icon = icon
	
	return (
		<section className={`${className} flex flex-col gap-4`}>
			<div className="flex gap-2 items-center">
				<Icon className="text-primary" />
				<h1 className="font-secondary font-bold">{ title }</h1>
			</div>
			{ children }
		</section>
	)
}