// import React from 'react';
// import { useState, useEffect } from 'react';
// import logo from "../assets/EventHubBlackLogo.png";
// import '../style.css';
// import Login from '../components/auth/Login'; // import the login component

// const Navbar = () => {
//     const [offset, setOffset] = useState(0);
//     const [showLogin, setShowLogin] = useState(false); // to control login modal visibility

//     useEffect(() => {
//         const onScroll = () => setOffset(window.pageYOffset);
//         window.removeEventListener('scroll', onScroll);
//         window.addEventListener('scroll', onScroll, { passive: true });
//         return () => window.removeEventListener('scroll', onScroll);
//     }, []);

//     return (
//         <>
//             <nav className={`navbar navbar-expand-lg mt-0 ${offset < 90 ? "fixed-top" : 'bg-dark fixed-top'}`}>
//                 <div className="container">
//                     <a className="navbar-brand text-white" href="index.html">
//                         <img src={logo} alt="" style={{ height: '8rem', width: '10rem' }} />
//                     </a>
//                     <a href="ticket.html" className="btn custom-btn d-lg-none ms-auto me-4">Buy Ticket</a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                         <ul className="navbar-nav align-items-lg-center ms-auto me-lg-5">
//                             <li className="nav-item">
//                                 <a className="nav-link click-scroll" href="#section_1">Home</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link click-scroll" href="#section_2">About</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link click-scroll" href="#section_3">Gallery</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link click-scroll" href="#section_4">Events</a>
//                             </li>
//                             {/* Login Button to trigger modal */}
//                             <li className="nav-item">
//                                 <button className="btn nav-link" onClick={() => setShowLogin(true)}>Login</button>
//                             </li>
//                         </ul>
//                         <a href="ticket.html" className="btn custom-btn d-lg-block d-none">Buy Ticket</a>
//                     </div>
//                 </div>
//             </nav>

//             {/* Show Login Component as Modal */}
//             {showLogin && <Login onClose={() => setShowLogin(false)} />}
//         </>
//     );
// }

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import logo from "../assets/EventHubBlackLogo.png";
import '../style.css';

const Navbar = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg mt-0 ${offset < 90 ? "fixed-top" : 'bg-dark fixed-top'}`}>
            <div className="container">
                <Link className="navbar-brand text-white" to="/">
                    <img src={logo} alt="" style={{ height: '8rem', width: '10rem' }} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav align-items-lg-center ms-auto me-lg-5">
                        <li className="nav-item">
                        <a className="nav-link click-scroll" href="#section_1">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link click-scroll" href="#section_2">About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link click-scroll" href="#section_3">Gallery</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link click-scroll" href="#section_4">Events</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link click-scroll" to="/register">Login</Link> {/* Updated */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
