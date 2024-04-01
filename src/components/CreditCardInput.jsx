import { useId } from "react";

export const CreditCardInput = ({ className, type, labelText, placeholder, onChange }) => {
	const id = useId();
	return (
		<div className="card-input-container">
			<label htmlFor={id}>
				<span>{labelText}</span>
				<input className={className} id={id} type={type} placeholder={placeholder} onChange={onChange} />
			</label>
		</div>
	);
};
