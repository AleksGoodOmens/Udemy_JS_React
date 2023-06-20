import React, { useEffect, useState } from 'react'

import styles from "./inviterApp.module.scss"


import Skeleton from "./Users/Skeleton/Skeleton"
import { FaSearch} from "react-icons/fa"
import Success from './Success/Success'
import Button from '../../components/UI/buttons/Button'
import User from './Users/User/User'


function InviterApp() {

	const [users, setUsers] = useState([])
	const [isLoading, setIsloading] = useState(true)
	const [invitedUsers, setInvitedUsers] = useState([])
	const [searchValue, setSearchValue] = useState("")
	const [success, setSuccess] =useState(false)

	const onChangeSearchValue = (e) => {
		setSearchValue(e.target.value)
	}

	const onClickInviteUser = (id) => {
		if (invitedUsers.includes(id)) {
			setInvitedUsers((prev) => prev.filter(_id => _id !== id) )
		} else {
			setInvitedUsers((prev) => [...prev, id])
		}
		console.log(invitedUsers)
		
	}

	const onResset = () => {
		setInvitedUsers([])
		setSearchValue("")
		setSuccess(false)
	}

	useEffect(() => {
		fetch("https://reqres.in/api/users")
			.then(res => res.json())
			.then((json) => {
				setUsers(json.data);
			})
			.catch(err => console.warn(err))
			.finally(setIsloading(false))
	}, [])
console.log(success)
	return (
		<main>
			<h1 style={{
				textAlign: "center",
				margin: "50px 0"
			}}>Inviter App</h1>
			<div className='container'>
				{!success && <div className={styles.inviter}>
					<div className={styles.inviter__search}>
						<input name="find" type="text" placeholder='Find users...' onChange={onChangeSearchValue} />
						<label htmlFor="find"><FaSearch/></label>
					</div>
					{isLoading ?
						<div><Skeleton /> <Skeleton /> <Skeleton /></div>
						: <ul className={styles.inviter__list}>
							{users.filter(obj => {
								const fullName = (obj.first_name + obj.last_name).toLowerCase();
								if (fullName.includes(searchValue.toLowerCase()) || obj.email.toLowerCase().includes(searchValue.toLowerCase())) {return obj
								} 
							}).map(user => {
								return <User key={user.id} {...user} invited={invitedUsers.includes(user.id)} onClickInviteUser={onClickInviteUser} />
						})}
					</ul>}
					<Button disabled={invitedUsers.length <1 ? true : false } onClick={()=>setSuccess(true)} className={styles.inviter__invite_btn}>Invite your friends</Button>
				</div>}
				
				{success && <Success amountOfInvitedPerson={invitedUsers.length} onResset={onResset} />}
			</div>
		</main>
	)
}

export default InviterApp