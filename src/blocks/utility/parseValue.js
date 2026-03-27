export const parseValue = (value) => {
	console.log(`value: ${value}`);
	if (value.indexOf("var:") === 0) {
		const varValue = value.split(":")[1].split("|").join("--");
		//prest--spacing--40
		return `var(--wp--${varValue})`;
	}
	return value;
};
