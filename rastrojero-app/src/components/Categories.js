import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard'
function Categories() {
    let [info, setInfo] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(values => {
                return values.json()
            })
            .then(data => {
                let categories = data.countByCategory
                setInfo(categories.map((categorie, i) => {
                    return <CategoryCard {...categorie} key={i} />
                }))

            }).catch((e) => console.log(e))
    }, [])
    return (
        <React.Fragment>
            <div className="categories">
                <h2>Productos por categoría</h2>
                {info}
            </div>
        </React.Fragment>
    )
}
export default Categories;