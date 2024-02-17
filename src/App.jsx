//import React from 'react';
import { Route,Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CollageGallery from './components/CollageGallery';
import StagedScrollingGallery from './components/StagedScrollingGallery'
import CarouselGallery from './components/CarouselGallery'

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/collage" element={<CollageGallery/>}></Route> 
      <Route path="/staged-scrolling" element={<StagedScrollingGallery/>}></Route>
      <Route path="/carousel" element={<CarouselGallery/>}></Route>
      </Routes>
    </>
  );
}

export default App;
