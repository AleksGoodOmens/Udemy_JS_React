import React from 'react'
import {useState} from "react"
import Navigation from '../../navigation/Navigation'
import CheckBox from '../../UI/checkBox/CheckBox'

import styles from "./pageHeader.module.scss"

function PageHeader({toggleTheme, isChecked}) {
	const [links] = useState(["Modals", "Counter", "Quiz", "Wallpaper", "Inviter", "Currency Convector", "Photos", "Slider"])

	return (
		<header className={`container ${styles.header}`}>
			<Navigation links={links} />
			<CheckBox toggleTheme={toggleTheme} isChecked={isChecked}></CheckBox>
		</header>
	)
}

export default PageHeader
