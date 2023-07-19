import styles from "./homePage.module.scss"

import Ad from "./ad/Ad"
import Tabs from "./Tabs/Tabs#"

const items = [
	{
		title: "Modals",
		text: ["Page with examples of modal popups.",
			"I created one react component witch I call with different content and different styles. One dynamically pushed to HTML without animation. Second already in HTML and trigger call it with short animation"],
		link: {
			src: "/Modals",
			buttonText: "Go to modals"
		},
		video: "https://www.youtube.com/watch?v=EuVbmX2XyI4&ab_channel=AGAG"
	},
	{
		title: "Counter",
		text: ["Page with examples of counter component.",
			"At this page you can find simple counter component where you can add or subtract number.",
			"For some variability I am added input where user can change increment"],
		link: {
			src: "/Counter",
			buttonText: "Go to Counter"
		},
		video: "https://www.youtube.com/watch?v=pvfFIahWnv0&ab_channel=AGAG"
	},
	{
		title: "Quiz",
		text: ["Page with examples of quiz component.",
			"At this page you can find simple counter component where you can add or subtract number.",
			"For some variability I am added input where user can change increment"],
		link: {
			src: "/Quiz",
			buttonText: "Go to Quiz"
		},
		video: "https://youtu.be/-iia-Nx9vgw"
	},
	{
		title: "Wallpaper",
		text: ["here we have a lot Wallpapers."],
		link: {
			src: "/Wallpaper",
			buttonText: "Go to Wallpaper"
		},
		video: "https://youtu.be/Sf9RPrqye2A"
	}
]



function HomePage() {

	return <main>
		<section className={"container " + styles.homePage}>
			<h1>home page</h1>
			<Ad />
			<Tabs content={ items}/>
	
			<div className={styles.items}>
				
			</div>

		</section>
</main>
	
}

export default HomePage

