import { FaX } from "react-icons/fa6"
import Button from "./Button"

export default function Input({ icon, onDelete, type = "text", placeholder = "", value, onChange, ref = null, className = "" }) {
	
	const Icon = icon
	
	return (
		<div className={`${className} flex gap-4 p-4 border border-accent-3/20 rounded-xl items-center`}>
			{icon && 
				<Icon />
			}
			<input
				type={ type } 
				placeholder={ placeholder }
				value={ value }
				onChange={ onChange }
				ref={ ref }
			/>
			{
				onDelete &&
					<Button onClick={ onDelete } className="active:text-accent-1">
						<FaX />
					</Button>
			}
		</div>
	)
}