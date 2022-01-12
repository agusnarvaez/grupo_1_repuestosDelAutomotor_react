import React from 'react';
import LastProduct from './LastProduct'
import ProductsList from './ProductsList'
import Categories from './Categories';
function ContentRowCenter() {
    return (
        <React.Fragment>
            <div className="contentRowCenter">
                <LastProduct />
                <Categories />
                <ProductsList />
            </div>
        </React.Fragment>
    )
}
export default ContentRowCenter;