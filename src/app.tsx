import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Experience, Hero, Navbar, Tech, Works } from './components';

// App
const App = () => {
  const [hide] = useState(true);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar hide={hide} />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
      </div>
    </BrowserRouter>
  );
};

export default App;
