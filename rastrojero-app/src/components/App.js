import React from 'react'
import '../assets/css/style.css';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper'
import '../assets/css/app.css'
function App() {
  return (
    <React.Fragment>
      <div className="wrapper">
        <SideBar />
        <ContentWrapper />
        {/*         <Routes>
          <Route path='/' element={<ContentWrapper />} />
          <Route path='/pages' element={<GenresInDb />} />
          <Route path='/charts' element={<LastMovieInDb />} />
          <Route path='/tables' element={<ContentRowMovies />} />
          <Route path='/*' element={<Error404 />} />
        </Routes> */}
      </div>

    </React.Fragment >
  );
}

export default App;
