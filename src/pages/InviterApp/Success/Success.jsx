import React from 'react'

import {MdFileDownloadDone} from "react-icons/md"
import Button from '../../../components/UI/buttons/Button'

import styles from "./success.module.scss"

function Success({amountOfInvitedPerson, onResset}) {
	return (
		<>
			<MdFileDownloadDone className={styles.icon} />
			<h1 className={styles.title}>Success!</h1>
			<h2 className={styles.subtitle}>All <span>{amountOfInvitedPerson}</span> friends was sended invite</h2>
			<Button onClick={()=>onResset()} className={styles.btn}>Go back</Button>
		</>
	)
}

export default Success