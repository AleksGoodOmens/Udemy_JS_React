import React, { useState } from 'react'
import { Link } from "react-router-dom"
import ReactPlayer from "react-player"

function Tabs({ content }) {
	const [currentTab, setCurrentTab] = useState(0),
		[tabs, setTabs] = useState(content);

	const Tab = ({ item }) => {
		console.log(item)
		const { text, link:{src, buttonText}} = item

		return <div>
					{text.map((element, i) => {
						return <p key={i}>{element}</p>
					})}
					<Link to={src}>{ buttonText}</Link>
					<ReactPlayer
						controls
						// width={"100%"}
						// height={"100%"}
						url={item.video}/>
				</div>
	} 

	const changeTab = (i) => {
		setCurrentTab(i)
	}

	return (
		<div>
			<ul>{tabs.map((tab, i) => <li onClick={() => changeTab(i)}><a href={"#" + tab.title}>{tab.title}</a></li>)}</ul>
			<div>
				<Tab item={tabs[currentTab]} />
			</div>
		</div>

	)
}

export default Tabs