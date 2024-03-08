import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';

function App() {
  return (
 <>
 <Navbar/>
 <Hero/>
 <Title subTitle = 'OUR PROGRAMS' title = 'What We Offer'/>
 <Programs/>
 <About/>
 <Title subTitle = 'Gallery' title = 'Campus Photos'/>
 <Campus/>
 <Title subTitle = 'Testimonials' title = 'What Student Says'/>
 <Testimonials/>

 </>
  );
}

export default App;
