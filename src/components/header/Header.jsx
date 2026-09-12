import Logo from "./Logo";
import CurrentTime from "./CurrentTime";
import UnitsToggle from "./UnitsToogle";

export default function Header() {
	return (
		<header className="flex gap-4 justify-between items-center p-4 border-b border-background-dark/20">
			<Logo />
			<div className="flex flex-col md:justify-between md:flex-row md:items-center md:w-full gap-1">
				<div className="flex gap-1 items-center">
					<h1 className="text-xl font-secondary font-bold">WetterBlick</h1>
					<p className="text-accent-3/20">•</p>
					<h2 className="text-primary font-bold uppercase text-2xs">Aktuelles Wetter</h2>
				</div>
				<CurrentTime />
			</div>
			<UnitsToggle />
		</header>
	)
}