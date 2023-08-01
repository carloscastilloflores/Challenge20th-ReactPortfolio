import React from 'react';
import Header from './Header';

function NavBar({currentPage, handlePageChange}) {
    return (
        <div className='p-3 d-flex justify-content-end '>
        <h1 className="flex-fill" >Carlos Castillo Portfolio </h1>
        <ul className="navbar nav-tabs  ">
            <div className="nav-item">
                <a
                href="#aboutme"
                onClick={() => handlePageChange('AboutMe')}
                className={currentPage === 'AboutMe' ? 'navbar-brand' : 'navbar-brand '}
                >
                About Me
                </a>
            </div>
            <div className=" nav-item">
                <a
                href="#Portfolio"
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'navbar-brand' : 'navbar-brand'}
                >
                Portfolio
                </a>
            </div>
            <div className="nav-item">
                <a
                href="#Contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'navbar-brand' : 'navbar-brand'}
                >
                Contact 
                </a>
            </div>
            <div className="nav-item">
                <a
                href="#Resume"
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'navbar-brand' : 'navbar-brand'}
                >
                Resume
                </a>
            </div>
        </ul>
        </div>
    )
}

export default NavBar