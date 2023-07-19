import React, { useCallback, useEffect, useState } from 'react'

import styles from "./slider.module.scss"

function Slider() {

	const getImages = useCallback(() => {
		return [
			"https://wallpapercave.com/wp/wp12305268.jpg",
			"https://sun9-74.userapi.com/impg/C0WkaMBDZMtznUEOOwUmdGeLiJFAzrJB6adb9A/V3cB0LwVTf8.jpg?size=1280x631&quality=96&sign=0318c4122660030d0846121113e2a1a8&type=album",
			"https://i.ytimg.com/vi/0fpvtSU3FrU/maxresdefault.jpg",
			"https://w.forfun.com/fetch/47/472265bdb8dadfd9a3c89deb975ef7e5.jpeg",
			"https://i.ytimg.com/vi/rpajSsmxk7A/maxresdefault.jpg",
			"https://top-fon.com/uploads/posts/2023-01/1674721432_top-fon-com-p-vindovs-fon-prezentatsiya-51.jpg",
			"https://i.ytimg.com/vi/qu5yqaCywlg/maxresdefault.jpg",
			"https://top-fon.com/uploads/posts/2023-01/1674721506_top-fon-com-p-vindovs-fon-prezentatsiya-124.jpg",
			"https://idsay.ru/img/2022/october/microsoft-windows-kratkaya-istoriya-1985-2021-god_15-10-22-16-47-09.webp",
			"https://ia902808.us.archive.org/9/items/enwin2000prosp4_202001/1186457.jpg",
			"https://wallpapercave.com/wp/wp10360807.png",
			"https://w.forfun.com/fetch/68/68683aba046da843aafdd805eef6c1e3.jpeg",
			"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/587b5904-8c93-47cc-aeab-091ec64327ef/dejz6ss-43dccca4-35ce-4471-a98e-123ef16fd4a9.png",
			"https://getwallpapers.com/wallpaper/full/a/9/b/1046799-best-windows-vista-desktop-backgrounds-1920x1080.jpg",
			"https://cutewallpaper.org/21/windows-7-beta-wallpaper/Windows-7-Beta-Build-7000-Theme-by-xXCDRXx-on-DeviantArt.png",
			"https://catherineasquithgallery.com/uploads/posts/2021-02/1612778713_8-p-goluboi-fon-vindovs-10.jpg",
			"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/73f638d2-c184-4fde-81ab-32fa8cce4271/d4rdg4x-a1d728aa-6b13-4ec9-bbd1-de3f61ebcd6a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi83M2Y2MzhkMi1jMTg0LTRmZGUtODFhYi0zMmZhOGNjZTQyNzEvZDRyZGc0eC1hMWQ3MjhhYS02YjEzLTRlYzktYmJkMS1kZTNmNjFlYmNkNmEucG5nIn1dXX0.W3oLqkE2R_2QyiH1TGmjiVQs6VDSj27JyWuGJCCD4Ko",
			"https://images6.alphacoders.com/461/thumb-1920-461394.jpg",
			"https://wallpapers.com/images/hd/windows-81-4fjyqok8bu8u8t0o.jpg",
			"https://1.bp.blogspot.com/-vQfNW03DH3g/VQf65iEgcOI/AAAAAAAACcA/I1MDpERLOB0/s1600/Windows%2B10%2BTechnical%2BPreview%2B3.png",
			"https://cdn.suwalls.com/wallpapers/computers/windows-10-on-a-blue-grid-46642-3840x2160.jpg",
			"https://windowstune.ru/wp-content/uploads/2023/04/windows-11.jpg"
		]
		}, []
	)


	const [slide, setSlide] = useState(0)
	const [autoplayOn, setAutoplayOn] = useState(false)
	const [slidesAmount, setSlidesAmount] = useState((getImages().length) -1)

	const changeSlide = (i) => {
		setSlide(slide => {
			console.log(slide + i)
			if (slide + i < 0) {
				return slidesAmount
			} else if (slide + i > slidesAmount) {
				return 0
			} else {
				return slide + i
			}
		})
	}

	useEffect(() => {

		let interval = null;

  if (autoplayOn) {
    interval = setInterval(() => changeSlide(+1), 3000);
  }

  return () => {
    clearInterval(interval);
  };
	}, [autoplayOn])


	

	return (
		<main>
			<h1 className={styles.title}>Slider</h1>
			<div className="container">
				<div className={styles.slider}>
					<div className={styles.slide}>
						<AllSlides getImages={getImages} slide={slide}/>
						
					</div>
					<div className={styles.statistic}>
						<div>amount of slides {slidesAmount + 1}</div>
						<div>active slide: {slide + 1}</div>
					</div>
					<div className={styles.controls}>
						<button onClick={()=>changeSlide(-1)}>prev</button>
						<button onClick={()=>changeSlide(+1)}>next</button>
						<button onClick={() => setAutoplayOn(autoplayOn => !autoplayOn)}>autoplay</button>
					</div>
				</div>
			</div>
		</main>
	)

}

const AllSlides = ({getImages, slide}) => {
	const [images, setImages] = useState([])
	useEffect(() => {


		setImages(getImages())
	}, [getImages])
	return images.filter((item, i) => i === slide).map((pic, i) => <img key={i} src={pic} alt={pic} />)
}

export default Slider