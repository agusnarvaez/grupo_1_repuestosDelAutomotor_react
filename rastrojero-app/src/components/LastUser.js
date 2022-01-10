import React, { useEffect, useState } from 'react';

function LastUser() {
	let [lastUser, setUser] = useState([])
	let [info, setInfo] = useState([])

	useEffect(() => {
		/* setCards(cards = initial) */
		let counts = []
		fetch('http://localhost:5000/api/users')
			.then(values => {
				return values.json()
			})
			.then(users => {
				let last = users.count
				fetch(`http://localhost:5000/api/users/${last}`)
					.then(values => {
						return values.json()
					})
					.then(data => {
						setUser(lastUser = data)
						setInfo(info =
							<div className="lastUser" >
								<h3>Last User</h3>
								<h5>Nombre/s: </h5><p>{lastUser.first_name}</p>
								<h5>Apellido/s: </h5><p>{lastUser.last_name}</p>
								<h5>email: </h5><p>{lastUser.email}</p>
								<h5>Imagen: </h5><img src={lastUser.imageURL} />
							</div>)
					})
			})
			.catch(e => console.log(e))
	}, [])

	/* cards.map(card => {
		return console.log(card)
	}) */

	return (
		<React.Fragment>
			{/*<!-- Content Row -->*/}
			{info}
		</React.Fragment >
	)

}
export default LastUser;