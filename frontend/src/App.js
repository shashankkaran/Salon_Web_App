// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact'
import Services from './pages/services/Services'
import Safety from './pages/safety/Safety'
import ScrollToTop from './ScrollToTop'

function App() {
  return (
    <div className="App">
      
       <Router>
           <ScrollToTop/>
       
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/safety" element={<Safety/>}></Route>
   

        </Routes>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
