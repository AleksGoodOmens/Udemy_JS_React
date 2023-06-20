import React from 'react'

import styles from "./modal.module.scss"

function Modal({ children, handleOpenModal, showModal }) {
	
	const handleClose = (e) => {
		if (e.target.classList.contains("overlay")) {
			handleOpenModal();
		}
	}


	return (
		<div className='overlay' onClick={(e) => handleClose(e)} data-show={showModal}>
			<article className={styles.modal} data-show={showModal}>
				<button onClick={handleOpenModal}> X</button>
				{children}
			</article>
		</div>
	)
}

export default Modal