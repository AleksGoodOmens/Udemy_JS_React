import React, { useCallback, useEffect, useState } from 'react'

import styles from "./slider.module.scss"

function Slider() {

	const getImages = useCallback(() => {
		return [
			"https://top-fon.com/uploads/posts/2023-01/1674721432_top-fon-com-p-vindovs-fon-prezentatsiya-51.jpg",
			"https://top-fon.com/uploads/posts/2023-01/1674721506_top-fon-com-p-vindovs-fon-prezentatsiya-124.jpg",
			"https://idsay.ru/img/2022/october/microsoft-windows-kratkaya-istoriya-1985-2021-god_15-10-22-16-47-09.webp",
			"https://ia902808.us.archive.org/9/items/enwin2000prosp4_202001/1186457.jpg",
			"https://w.forfun.com/fetch/68/68683aba046da843aafdd805eef6c1e3.jpeg",
			"https://awesomewallpapers.files.wordpress.com/2010/02/vista-217.jpg",
			"https://catherineasquithgallery.com/uploads/posts/2021-02/1612778713_8-p-goluboi-fon-vindovs-10.jpg",
			"https://top-fon.com/uploads/posts/2023-01/1674955460_top-fon-com-p-fon-dlya-prezentatsii-windows-59.jpg",
			"https://catherineasquithgallery.com/uploads/posts/2021-02/1612225069_88-p-fioletovii-fon-windows-10-129.jpg",
			"https://a-static.besthdwallpaper.com/windows-11-background-wallpaper-1680x1050-85735_5.jpg"
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