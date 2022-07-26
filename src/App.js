import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Header from './components/Header';
import { FooterContainer } from './containers/footer';
import BannerAboutUs from './components/BannerAboutUs';
import { GlobalStyles } from './AppStyles';
import BannerSecondary from './components/Banner';

function App() {
  return (
      <Router>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Routes>
      <Header />
      <BannerSecondary />
      <BannerAboutUs />
      <FooterContainer />
    </Router>
  );
}

export default App;
