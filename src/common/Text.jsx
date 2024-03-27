import "./Common.style.scss";

export const TextSmall = ({ children }) => {
	return <p className="text-small">{children}</p>;
};

export const TextMedium = ({ children }) => {
	return <p className="text-medium">{children}</p>;
};

export const TextLarge = ({ children }) => {
	return <p className="text-large">{children}</p>;
};
