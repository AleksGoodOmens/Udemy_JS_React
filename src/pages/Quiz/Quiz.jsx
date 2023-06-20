import React, { useState } from 'react'
import Button from '../../components/UI/buttons/Button'

import styles from "./quiz.module.scss";

const questions = [
	{
		title: "question 1",
		question: "6 * 7",
		answers: ["44", "22", "67", "42"],
		correct: 3
	},
	{
		title: "question 2",
		question: "7 * 7",
		answers: ["14", "26", "49", "56"],
		correct: 2
	},
	{
		title: "question 3",
		question: "7 * 8",
		answers: ["56", "35", "87", "78"],
		correct: 0
	},
	{
		title: "question 4",
		question: "4 * 8",
		answers: ["48", "32", "36", "84"],
		correct: 1
	},
	{
		title: "question 5",
		question: "12 * 8",
		answers: ["100", "96", "128", "28"],
		correct: 1
	},
	{
		title: "question 6",
		question: "9 * 9",
		answers: ["81", "66", "45", "54"],
		correct: 0
	},
	{
		title: "question 7",
		question: "5 * 2",
		answers: ["10", "25", "12", "5"],
		correct: 0
	},
	{
		title: "question 8",
		question: "4 * 5",
		answers: ["40", "30", "20", "10"],
		correct: 2
	},

]


function Quiz() {
	const [currentQuestion, SetCurrentQuestion] = useState(0)
	const [result, setResult] = useState(0)
	
	const Content = questions.map((item, index) => {
		const { title, question, answers, correct } = item
		return <div className={styles.window} key={title}>
			<div className={styles.progressbar}>
				<div className={styles.progressbar__inner} style={{
				width: `${100 / questions.length * index}%`,
				height:"20px"
				}}>
				</div>
			</div>
			<div className={styles.quiz}>
				<h2 className={styles.quiz__title}>{title}</h2>
				<h3 className={styles.quiz__question}>{question}</h3>
				<ul className={styles.quiz__lis}t>
					{answers.map((ans, k) => <li className={styles.quiz__item} onClick={() => {
						SetCurrentQuestion((prevValue) => prevValue +1)
						k===correct && setResult((prevValue) => prevValue +1)
					}} key={k}>{ans}</li>)}
				</ul>
			</div>
		</div>
	})

	return (
		<main className={styles.body}>
			<h1 className={styles.body__title}>quiz</h1>
			{Content.length > currentQuestion ? 
			Content[currentQuestion] : <div>
				<div>
					<div style={{
							background: "green",
							width:"100%",
							height:"20px"
					}}></div>
				</div>
				<h2>You have {result} correct answers from {Content.length}</h2>
				<Button className={styles.quiz__btn} onClick={() => {
					SetCurrentQuestion(0)
					setResult(0)
				}}>Reset</Button>
			</div>} 

		</main>
	)
}

export default Quiz