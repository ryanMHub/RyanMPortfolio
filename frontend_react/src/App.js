import React from 'react';

//import all of the containers and componentss using the container/index.js and components/index.js files
//Each  of the container object names will be added to the main app div in the desired order.
import { About, Footer, Header, Skills, Work } from './container';
import { Navbar } from './components';

//import the global scss file
import './App.scss';

const App = () => {
  return (
    <div className='app'>
       <Navbar />
       <Header />
       <About />
       <Work />
       <Skills />
       <Footer />
    </div>

  );
}

export default App;