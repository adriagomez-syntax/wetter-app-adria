export default function Footer() {
	return (
		<footer className="flex flex-col gap-2 p-4 border-t border-background-dark/20">
			<p className="text-2xs md:text-xs">© 2024 WetterBlick Telemetrie & Prognose GmbH. Alle Rechte vorbehalten.</p>
			<p className="text-2xs md:text-xs">
				{"Powered by "} 
				<a className="cursor-pointer hover:underline" href="https://openweathermap.org/" target="_blank">OpenWeather</a>
			</p>
		</footer>
	)
}