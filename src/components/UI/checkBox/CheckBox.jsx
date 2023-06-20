import React from 'react'
import styles from "./checkbox.module.scss"

function CheckBox({toggleTheme, isChecked}) {
	return (
		<label className={styles.label}>
			 {isChecked === "dark" ? "Change to light theme" : "Change to dark Theme"}
			<input className={styles.input} type='checkbox' onChange={toggleTheme} checked={isChecked === "dark" ? true : false} name="theme" id="theme" />
		</label>
	)
}

export default CheckBox