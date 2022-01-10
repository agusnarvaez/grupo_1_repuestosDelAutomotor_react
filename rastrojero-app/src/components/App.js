import React from 'react'
import '../assets/css/style.css';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper'
import ContentRowResume from './ContentRowResume'
import LastProduct from './LastProduct'
import ProductsList from './ProductsList'
import Error404 from './Error404'
import '../assets/css/app.css'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <React.Fragment>
      <div className="wrapper">
        <SideBar />
        <Routes>
          <Route path='/' element={<ContentWrapper />} />
          <Route path='/resume' element={<ContentRowResume />} />
          <Route path='/lastProduct' element={<LastProduct />} />
          <Route path='/products' element={<ProductsList />} />
          <Route path='/*' element={<Error404 />} />
        </Routes>
      </div>

    </React.Fragment >
  );
}

export default App;
