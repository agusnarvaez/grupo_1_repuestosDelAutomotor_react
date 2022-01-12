import React from 'react';

function ProductDetail(props) {

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.product_name}</td>
            <td>{props.description}</td>
            <td>{props.detail}</td>
            <td>{props.api}</td>
        </tr>
    )
}
export default ProductDetail;