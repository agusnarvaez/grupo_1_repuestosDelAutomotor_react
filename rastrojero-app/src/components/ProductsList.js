import React, { useEffect, useState } from 'react';
import ProductDetail from './ProductDetail'
function ProductList() {
    let [productsList, setProductsList] = useState({})
    let [info, setInfo] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/products') //Traigo el json de todos los productos para saber cuantos son
            .then(values => {
                return values.json() //Transmito la repsuesta
            })
            .then(data => {
                setProductsList(productsList = data.products)
                setInfo(productsList.map((product, i) => { //Con todos los productos hago un array para obtener la data de cada uno
                    return <ProductDetail {...product} key={i} />
                }))
            })
            .catch(e => console.log(e))
    }, [])
    return (< div className="card shadow mb-4" >
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Detalle</th>
                            <th>API</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Total</th>
                            <th>{productsList.length}</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        {info}
                    </tbody>
                </table>
            </div>
        </div>
    </div >)
}

export default ProductList;