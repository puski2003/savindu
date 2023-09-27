import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
 

  StarsCanvas,
} from "./components";


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary" >
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
         
          <Navbar />
         
          <Hero />
        </div>
        <div style={{backgroundColor:"#000A0B"}}>
        <About />
       </div>
        <div style={{backgroundColor:"#000A0B"}}>
        <Experience />
        </div>
         <div style={{backgroundColor:"#000A0B"}}  id='project-1'>
        <Works />
        </div>
      
        
       
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
