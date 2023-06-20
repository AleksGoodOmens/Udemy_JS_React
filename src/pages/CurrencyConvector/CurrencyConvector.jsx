import React, { useEffect, useRef, useState } from 'react'
import Converter from './Converter/Converter'

import styles from "./currencyConvector.module.scss"

function CurrencyConvector() {
	const _API = "FMv4piLsmjLTTdo1dHUBSIO9Ev9orqTZwrZNWt5M"

	const [currencyList, setCurrencyList] = useState([])

	const currencyValuesRef = useRef({})

	const [fromCurrency, setFromCurrency] = useState("RUB")
	const [toCurrency, setToCurrency] = useState("GBP")
	
	const [valueFromCurrency, setValueFromCurrency] = useState(0)
	const [valueToCurrency, setValueToCurrency] = useState(0)

	const onChangeFromCurrency= (value) => {
		setValueFromCurrency(value)
		setValueToCurrency((value / currencyValuesRef.current[fromCurrency] * currencyValuesRef.current[toCurrency]).toFixed(2))
	}
		const onChangeToCurrency= (value) => {
			setValueToCurrency(value)
		setValueFromCurrency((value / currencyValuesRef.current[toCurrency] * currencyValuesRef.current[fromCurrency]).toFixed(2))
	}

	useEffect(() => {
		fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${_API}`)
			.then(res => res.json())
			.then((json) => {
				currencyValuesRef.current = json.data
				onChangeFromCurrency(100)

				setCurrencyList(Object.keys(json.data))
			})
			.catch(err => console.warn(err))
	}, [])

		useEffect(() => {
		onChangeFromCurrency(valueFromCurrency)
	},[fromCurrency])

		useEffect(() => {
		onChangeToCurrency(valueToCurrency)
	},[toCurrency])


	return (
		<main>
			<h1 className={styles.title}>Currency convector</h1>
			<div className={`container ${styles.currencyConverter}`}>
				<Converter
					currencyList={currencyList}
					defaultCur={fromCurrency}
					setDefaultCur={setFromCurrency}
					onChangeCurrency={onChangeFromCurrency}
					value={valueFromCurrency}
				/>
				
				<Converter
					currencyList={currencyList}
					defaultCur={toCurrency}
					setDefaultCur={setToCurrency}
					onChangeCurrency={onChangeToCurrency}
					value={valueToCurrency}
				/>
			</div>
		</main>
	)
}

export default CurrencyConvector