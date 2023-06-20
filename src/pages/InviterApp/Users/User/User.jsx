import React from 'react'
import {FaPlus, FaMinus,} from "react-icons/fa"

import styles from "./user.module.scss"

function User({ id, email, first_name, last_name, avatar, invited, onClickInviteUser }) {
	return (
		<li className={styles.user}>
		<div className={styles.user__body}>
			<img src={avatar} alt={first_name + " " + last_name} width={"100px"} height={"100px"} />
			<div className={styles.user__content}>
				<div className={styles.user__name}>{first_name + " " + last_name}</div>
					<div className={styles.user__email}>{ email}</div>
			</div>
			</div>
			<div onClick={() => onClickInviteUser(id)}>
				{invited ? <FaMinus className={styles.user__btn}/> : <FaPlus className={styles.user__btn} />}
			</div>
	</li>
	)
}

export default User