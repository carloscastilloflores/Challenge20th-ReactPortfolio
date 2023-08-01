import React, { useState, useEffect } from 'react'; 
import Header from './components/Header';
import Container from './components/Container'
import Footer from './components/Footer'

function App() {
   return (
    <div>
        <Container />
        {/* Condition where if its /homepage, it will render About me
        Condition where if its /Portfolio, it will render Portfolio 
        Condition where if its /Portfolio, it will render Portfolio  */}
        <Footer />
    </div>
   )
}

export default App; 