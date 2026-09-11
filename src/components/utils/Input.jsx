import { FaX } from "react-icons/fa6"
import Button from "./Button"

export default function Input({ icon, onDelete = null, type = "text", placeholder = "", value, onChange = null, ref = null, className = "" }) {
	
	const Icon = icon

	return (
		<div className={`${className} min-w-0 flex gap-4 p-4 border border-accent-3/20 rounded-xl items-center max-w-full`}>
			{icon && 
				<Icon className="shrink-0 text-primary" />
			}
			<input className="flex-1 min-w-0 max-w-full"
				type={ type } 
				placeholder={ placeholder }
				value={ value }
				onChange={ onChange }
				ref={ ref }
			/>
			{
				onDelete && value &&
					<Button onClick={ onDelete } className="shrink-0 text-primary opacity-50 active:text-accent-1">
						<FaX />
					</Button>
			}
		</div>
	)
}