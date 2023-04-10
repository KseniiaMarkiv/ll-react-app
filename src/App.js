import './App.css';
import './Common.css';
import './Specific.css';
import './Footer.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import About from './components/About';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import Specials from './components/Specials';
import Login from './components/Login';
import Footer from './components/Footer';


function App() {
  return (
    // <div className="App">
    <Router>
      <section className="HeaderSection">
        <Header/>
        <Nav/>
      </section>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/#about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/#specials" element={<Specials />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
