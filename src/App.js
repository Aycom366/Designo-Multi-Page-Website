import React from 'react';
import OverLay from './component/OverLay';

//importing pages
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import Designs from './pages/Designs/Designs';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Location from './pages/Location/Location';
import Contact from './pages/Contact/Contact';
import ScrollToTop from './ScrollToTop';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <OverLay />
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/designs" component={Designs} />
        <Route exact path="/location" component={Location} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
