export default function Button({ type = "button", value = "", onClick, className = "", disabled = false, children }) {
	return (
		<button className={`${className} hover:scale-105 active:opacity-75 active:scale-95 cursor-pointer`} type={ type } value={ value } onClick={ onClick } disabled={ disabled }>
			{ children }
		</button>
	)
}