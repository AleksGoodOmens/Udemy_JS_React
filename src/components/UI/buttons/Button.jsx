function Button(props) {
	const { children, disabled = false } = props;
	return (
		<button
			{...props}
			className={props.className ? `${props.className} ${"button"}` : "button" }
			disabled={disabled}
		>
			{children}</button>
	)
}

export default Button

// <Button
// className="promo__btn"
// onClick={() => console.log('hi')}
// >
// {'portfolio'}
// </Button>
// <Button
// className="promo__btn"
// onClick={() => console.log('hi')}
// >
// <a
// 	href="https://picmedia.ru/upload/000/u1/4/b/4b1fe05e.gif"
// 	download
// 	target="blank"
// >
// 	<img
// 		src="https://picmedia.ru/upload/000/u1/4/b/4b1fe05e.gif"
// 		alt="girl"
// 		width="100px"
// 	/>
// </a>
// </Button>