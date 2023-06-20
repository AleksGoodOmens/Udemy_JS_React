import React, { useState } from 'react'
import { NavLink} from "react-router-dom"


import styles from "./navigation.module.scss"


function Navigation({ links }) {

	return (
		<>
			<nav className={styles.navigation}>
				<NavLink className={styles.navigation__logo}  to={"/"}>
					AleksGoodOmens
				</NavLink>
				<div className={styles.navigation__links}>
					{links && links.map(link => {
						return <NavLink
							key={link}
							to={`/${link}`}
							className={({ isActive, isPending }) =>`${styles.link} ${isPending ? styles.link_pending : ''} ${isActive ? styles.link_active : ''}`}
						>{link}</NavLink>
					})}
				</div>
			</nav>
		</>
	)
}

export default Navigation

