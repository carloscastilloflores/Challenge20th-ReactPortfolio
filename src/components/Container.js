import React, { useState } from 'react'; 
import NavBar from './NavBar';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/ContactMe';
import Resume from './pages/Resume'; 
import { render } from '@testing-library/react';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Aboutme');

    const renderPage = () => {
        if (currentPage === 'Aboutme') {
            return <AboutMe />;
        } 
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
            return <Resume />; 
        };
    
    const handlePageChange = (page) => setCurrentPage(page);
    
    return ( 
        <div> 
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
        );   
    }