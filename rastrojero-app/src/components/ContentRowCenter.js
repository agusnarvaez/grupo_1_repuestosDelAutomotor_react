import React from 'react';
import LastUser from './LastUser'
import ProductsList from './ProductsList'
function ContentRowCenter() {
    return (
        <React.Fragment>
            <div className="row">
                <LastUser />
                <ProductsList />
            </div>
        </React.Fragment>
    )
}
export default ContentRowCenter;