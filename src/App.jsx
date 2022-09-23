
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Art from './components/Art';
import About from './components/About';
import Contact from './components/Contact';


// import Art from "./components/Art"


function App() {
  return (
    <div  className="w-full overflow-hidden ">
      <Navbar/>
      <Hero/>
      <About/>
      <Art/>
      <Contact/>
    </div>
  );
}

export default App;
