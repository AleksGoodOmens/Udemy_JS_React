import React, { useEffect, useRef, useState } from 'react'
import Photo from './Photo/Photo'

import styles from "./Photos.module.scss"


function Photos() {
	const baseData = useRef(null)

	const [isLoading, setIsLoading] = useState(true)
	const [isLoadingCollection, setIsLoadingCollection] = useState(true)
	const [collections, setCollections] = useState([])
	const [activeCategory, setActiveCategory] = useState(0)
	const [searchValue, setSearchValue] = useState("")

	useEffect(() => {
		fetch("https://6486f2d4beba6297278f8a2a.mockapi.io/photos")
		.then(response => response.json())
			.then(data => {
			baseData.current = data[0]
		})
			.catch(error => console.log(error))
			.finally(() => {
				setIsLoading(false)
			})
	}, [])

	useEffect(() => {
		const url = new URL("https://6486f2d4beba6297278f8a2a.mockapi.io/photos");
		activeCategory && url.searchParams.append("category", activeCategory)
		setIsLoadingCollection(true)
		fetch(url)
			.then(response => response.json())
			.then(data => {
				const collection = data.filter((_, i) => i !== 0)
			setCollections(collection)
		})
			.catch(error => console.log(error)).finally(() => {
			setIsLoading(false)
		}).finally(()=>setIsLoadingCollection(false))
	}, [activeCategory])
	
	return (
		<main className={styles.photos}>
			<h1 className={styles.title}>My photos collection</h1>
			{isLoading && <h2>Wait is loading...</h2>}
			{!isLoading && <><nav className={styles.nav}>
				<ul className={styles.categories}>
				{baseData.current && baseData.current.categories.map((cat, i) => <li className={activeCategory === i ? styles.active : ""} onClick={() => setActiveCategory(i)} key={cat.name}>{cat.name}</li>)}
			</ul>
				<input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value.toLowerCase())} placeholder='Search by name' />
			</nav>
				<section className={styles.collections}>
				{isLoadingCollection && <h2>wait...</h2>}
					{!isLoadingCollection && (<>
            {searchValue !== "" && (
              collections.filter((item) =>
                item.name.toLowerCase().includes(searchValue)
              ).length === 0 ? (
                <h2>No items found</h2>
              ) : (
                collections
                  .filter((item) =>
                    item.name.toLowerCase().includes(searchValue)
                  )
                  .map((col, i) => (
                    <Photo key={i} item={col} />
                  ))
              )
            )}
            {searchValue === "" &&
              collections.map((col, i) => (
                <Photo key={i} item={col} />
              ))}
          </>)}
			</section>
			<nav className={styles.pagination}>
				{/* {collections.map((_, i) => <div key={i}>{ i+1}</div>)} */}
				</nav>
			</>
			}
		</main>
	)
}

export default Photos