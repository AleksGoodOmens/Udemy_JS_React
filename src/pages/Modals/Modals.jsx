import React, { useState } from 'react'



import Button from "../../components/UI/buttons/Button"
import Modal from "../../sections/Modal/Modal"

import styles from "./modals.module.scss"


function Modals() {
	const [showModal, setShowModal] = useState(false)
	const [activeModal , setActiveModal] = useState('')


	const handleOpenModal = (modalName) => {
		setActiveModal(modalName)
		setShowModal(!showModal)
	}
	console.log(showModal, activeModal)
	return (
		<>
			<main>
				<section className={styles.modals}>
					<Button onClick={() => handleOpenModal("notAnimated")}>Show notAnimated modal</Button>
					<Button onClick={() => handleOpenModal("Animated")}>Show Animated modal</Button>
					<Button onClick={() => handleOpenModal("test")}>Show test</Button>
				</section>
			</main>

			<Modal
				handleOpenModal={handleOpenModal}
				showModal={activeModal === "Animated" ? showModal : false}
			>
				<h2>Animated modal window</h2>
				<h2>FPS: 60</h2>
				<img src="https://media.tenor.com/RDAbXWTOajcAAAAC/barbsokiny-plane.gif" alt='animated' />
			</Modal>

			{activeModal === "notAnimated" ? <Modal
				showModal={activeModal === "notAnimated" ? showModal : false}
					handleOpenModal={handleOpenModal}>
					<h2>NOT Animated modal window</h2>
					<img width={"200px"} src="https://slovnet.ru/wp-content/uploads/2018/10/26-37.jpg" alt="hamster" />
			</Modal> : ""} 
			{activeModal === "test" ? <Modal
				showModal={activeModal === "test" ? showModal : false}
					handleOpenModal={handleOpenModal}>
					<h2>test</h2>
					<img src="./test.gif" alt="test" />
			</Modal> : ""} 

		</>
	)
}

export default Modals