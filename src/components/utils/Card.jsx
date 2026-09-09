export default function Card({ className = "", children }) {
	return (
		<div className={`${className} p-4 bg-background rounded-xl border-background-dark/20 shadow-xs shadow-background-dark/20`}>
			{ children }
		</div>
	)
}