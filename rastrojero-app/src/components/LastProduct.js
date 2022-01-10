import React, { useEffect, useState } from 'react';

function LastUser() {
	let [lastUser, setUser] = useState([])
	let [lastProduct, setProduct] = useState([])
	let [info, setInfo] = useState([])

	useEffect(() => {
		/* setCards(cards = initial) */
		let counts = []
		fetch('http://localhost:5000/api/products')
			.then(values => {
				return values.json()
			})
			.then(products => {
				let last = products.count
				fetch(`http://localhost:5000/api/products/${last}`)
					.then(values => {
						return values.json()
					})
					.then(data => {
						setProduct(lastProduct = data)
						console.log()
						setInfo(info =
							<div className="lastUser" >
								<h3>Último producto en base de datos</h3>
								<h5>Nombre </h5><p>{lastProduct.name}</p>
								<h5>Descripción: </h5><p>{lastProduct.description}</p>
								<h5>Precio: </h5><p>{lastProduct.price}</p>
								<h5>Imagen: </h5><img src={lastProduct.imageURL} />
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