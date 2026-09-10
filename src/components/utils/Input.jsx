import { FaX } from "react-icons/fa6"
import Button from "./Button"

export default function Input({ icon, hasDelete = false, type = "text", placeholder = "", value, onChange, ref = null, className = "" }) {
	
	const Icon = icon
	
	function onDelete(event) {
		event.target.value = ""
		onChange(event)
	}

	return (
		<div className={`${className} flex-1 flex gap-4 p-4 border border-accent-3/20 rounded-xl items-center`}>
			{icon && 
				<Icon className="shrink-0" />
			}
			<input className="flex-1 min-w-0"
				type={ type } 
				placeholder={ placeholder }
				value={ value }
				onChange={ onChange }
				ref={ ref }
			/>
			{
				hasDelete && value &&
					<Button onClick={ onDelete } className="shrink-0 opacity-50 active:text-accent-1">
						<FaX />
					</Button>
			}
		</div>
	)
}