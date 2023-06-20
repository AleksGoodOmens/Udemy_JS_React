import React from 'react'
import advertise from "../Wallpaper/Wallpaper.png";

import styles from "./wallpaper.module.scss"

const data =  {
      name: "download",
      url: advertise
    }
  
;


function Wallpaper() {
	return (
		<>
			<main className={styles.wallpaper}>
				<div className='container'>
					<h1>Wallpaper</h1>
				<a className={styles.wallpaper__btn} href={data.url} download>{data.name}</a>
				</div>
			</main>
		</>


	)
}

export default Wallpaper