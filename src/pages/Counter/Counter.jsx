import React, { useState } from 'react'
import Button from "../../components/UI/buttons/Button"

import styles from "./counter.module.scss"

function Counter() {
	const [value, setValue] = useState(0)
	const [changer, setChanger] = useState(1)
	const handleChanger = (num) => {
    setValue((prevValue) => prevValue + num);
  };
	const inputHandler = (e) => {

	setChanger(+e.target.value)
}

	return (
		<main>
			<div className='container'>
				<h1 className={styles.h1}>Counter</h1>
				<div className={styles.body}>
					<Button onClick={() => handleChanger(+changer)}>add</Button>
					<div className="results">{ value}</div>
					<Button onClick={() => handleChanger(-changer)}>minus</Button>
				</div>
				<label className={styles.label}>
					<div>change value</div>
					<input type="number"
						value={changer}
						onChange={(e) => inputHandler(e)}
					/>
				</label>
			</div>
		</main>
	)
}

export default Counter