import "./Common.style.scss";

export const Button = ({ children, onClick, disabled }) => {
	return (
		<button className="button" onClick={onClick} disabled={disabled}>
			{children}
		</button>
	);
};
