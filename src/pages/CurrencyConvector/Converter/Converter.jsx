import React, { useState } from 'react'

import styles from "./converter.module.scss"

function Converter({currencyList, defaultCur, setDefaultCur, onChangeCurrency, value}) {

	const [chooseActive, setChooseActive] = useState(false)
	const [mainCurrency, setMainCurrency] = useState(["RUB", "USD", "EUR", "GBP"])

	const handlerChangerCurrency = (item) => {
		setDefaultCur(item)
		!mainCurrency.includes(item) && setMainCurrency(prev => {
			const newMainCurrency = [...prev]
			newMainCurrency[3] = item
			return newMainCurrency
		})
	}

	return (
		<div className={styles.converter}>
			<header className={styles.header}>
				<div className={styles.currencys}>
					{mainCurrency.map(cur => {
						return <div onClick={() => handlerChangerCurrency(cur)} className={cur === defaultCur ? `${styles.item} ${styles.selected}` : styles.item} key={cur}>{cur}</div>
					})}
				</div>
				<div className={styles.item} onClick={() => setChooseActive(prev => !prev)}>↓
						{chooseActive && <div className={styles.list}>
						{currencyList.filter(item => !mainCurrency.includes(item)).map(item => {
							return <div  onClick={() => handlerChangerCurrency(item)} key={item}>{item}</div>
						})}
						</div>}
				</div>


			</header>
			<input
				onChange={(e) => onChangeCurrency(e.target.value)}
				className={styles.input}
				value={value}
				type="number" />
		</div>
	)
}

export default Converter