import React from 'react';
import LastProduct from './LastProduct'
import ProductsList from './ProductsList'
function ContentRowCenter() {
    return (
        <React.Fragment>
            <div className="row">
                <LastProduct />
                <ProductsList />
            </div>
        </React.Fragment>
    )
}
export default ContentRowCenter;