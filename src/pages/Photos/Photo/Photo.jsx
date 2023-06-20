import React from 'react'

import styles from "./photo.module.scss"

function Photo({ item, onClick }) {

	const { name, photos } = item
	const [pictures, setPictures] = React.useState(photos)

	const handleChangeMainPictureInCollection=(i) => {
		setPictures(prev => {
			const mainPicture = prev.splice(i, 1)
			return [mainPicture, ...prev]
		})
	}

	return (
		<article className={styles.photos}>
			{pictures.map((pic, i) => <div className={styles.photo} onClick={() => handleChangeMainPictureInCollection(i)} key={i}><img  src={pic} alt={name + " " + i} /></div>)}
			<h3>{ name}</h3>
		</article>
	)
}

export default Photo