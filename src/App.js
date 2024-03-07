import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';

function App() {
  return (
 <>
 <Navbar/>
 <Hero/>
 <Title subTitle = 'OUR PROGRAMS' title = 'What We Offer'/>
 <Programs/>
 <About/>
 </>
  );
}

export default App;
