import React, { useEffect, useState } from 'react';
import SmallCard from './SmallCard';

function ContentRowTop() {
    let initial = [{
        title: 'Total de usuarios',
        amount: 0
    },
    {
        title: 'Total de productos',
        amount: 0
    },
    {
        title: 'Total de categorías',
        amount: 0
    }]
    let [cards, setCards] = useState(initial)
    let [info, setInfo] = useState([])

    useEffect(() => {
        let counts = []
        Promise.all([
            (fetch('http://localhost:5000/api/users')
                .then(values => {
                    return values.json()
                })
                .then(data => {
                    counts[0] = data.count
                    setCards(cards[0].amount = data.count)
                })
                .catch(e => console.log(e))),
            (fetch('http://localhost:5000/api/products')
                .then(values => {
                    return values.json()
                })
                .then(data => {
                    /* counts[1] = data.count */
                    setCards(cards[1].amount = data.count)
                    setCards(cards[2].amount = data.countByCategory.length)
                })
                .catch(e => console.log(e)))
        ])
            .then(() => {
                setInfo(cards.map((card, i) => {
                    return <SmallCard  {...card} key={i} />
                }))

            })
            .catch(e => console.log(e))

    }, [])

    return (
        <React.Fragment>
            {/*<!-- Content Row -->*/}
            < div className="row contentRowResume" >
                {info}
            </div >
        </React.Fragment >
    )

}
export default ContentRowTop;