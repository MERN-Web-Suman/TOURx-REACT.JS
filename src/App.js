// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Footer from './components/Footer';


function App() {
   
  return (
    <div   className="app ">
          
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Services></Services>
      <Footer></Footer>
    
    </div>
  );
}

export default App;
