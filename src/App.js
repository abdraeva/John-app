import React from "react";
import { Routes, Route } from 'react-router-dom';
import LayoutRoutes from "./pages/LayoutRoutes";
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Cards from "./components/cards/Cards";
import Poster from "./components/poster/Poster";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Cards/>
      <Poster/>
      <Footer/>
      <Routes>
        <Route path='/*' element={<LayoutRoutes/>} />
      </Routes>

    </div>
  );
}

export default App;
