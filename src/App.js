import React, { useState, useEffect } from 'react'; 
import NavBar from './components/NavBar';
import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';

function App() {
   return (
    <div>
        <Header /> 
        <AboutMe />
        {/* Condition where if its /homepage, it will render About me
        Condition where if its /Portfolio, it will render Portfolio 
        Condition where if its /Portfolio, it will render Portfolio  */}
        <Footer />
    </div>
   )
}

export default App; 