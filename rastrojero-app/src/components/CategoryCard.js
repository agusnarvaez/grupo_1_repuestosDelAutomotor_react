import React from 'react';

function CategoryCard(props) {
    return (
        <React.Fragment>
            <div className="category">

                <h4> {props.category_name}</h4>
                <p className="h5 mb-0 font-weight-bold text-gray-800">{props.quantity}</p>

            </div>
        </React.Fragment>
    )
}
export default CategoryCard;