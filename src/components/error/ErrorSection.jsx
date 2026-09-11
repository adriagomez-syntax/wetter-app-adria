export default function ErrorSection({ message }) {
	return (
		<section className="flex-1 flex flex-col gap-4 justify-center items-center">
			<h1 className="font-secondary font-bold text-xl text-accent-1 text-center">Ein Fehler ist aufgetreten!</h1>
			<p className="text-sm">{ message }</p>
		</section>
	)
}