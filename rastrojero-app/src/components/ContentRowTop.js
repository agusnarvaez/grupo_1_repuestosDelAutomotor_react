import React from 'react';
/* import imagenFondo from '../assets/images/mandalorian.jpg'; */
import ContentRowResume from './ContentRowResume';
import ProductsList from './ProductsList';
import ContentRowCenter from './ContentRowCenter'
function ContentRowTop() {
	return (
		<React.Fragment>
			{/*<!-- Content Row Top -->*/}
			<div className="container-fluid">
				<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">Rastrojero Dashboard</h1>
				</div>

				{/*<!-- Content Row Movies-->*/}
				<ContentRowResume />
				<ContentRowCenter />
				{/* <ProductsList /> */}
				{/*<!--End Content Row Top-->*/}
			</div>
		</React.Fragment>
	)

}
export default ContentRowTop;