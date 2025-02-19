import './App.css';
import MainContent from './Components/Home/MainContent/MainContent';
import Header from './Components/Header/Header';
import Footer from './Components/Home/Header/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About/About';
import ContactUs from './Components/ContactUs/ContactUs';
import Services from './Components/Services/Services';

function App() {
  return (
    <BrowserRouter>
  
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
