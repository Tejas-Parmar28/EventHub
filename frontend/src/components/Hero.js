import React from 'react'
import Navbar from './Navbar'
import fablogo from '../assets/fablogo.jpeg'
import instalogo from '../assets/insta.jpeg'
import '../style.css'
const Hero = () => {
   
    return (
        <>
            <Navbar />
            <section className="hero-section" id="section_1">

                <div className="section-overlay"></div>

                <div className="container d-flex justify-content-center align-items-center">
                    <div className="row">

                        <div className="col-12 mt-auto mb-5 text-center">
                            <small>KJSCE PRESENTS</small>

                            <h1 className="text-white mb-5">Esummit 2025</h1>

                            <a className="btn custom-btn smoothscroll" href="1section_2">Let's begin</a>
                        </div>

                        <div className="col-lg-12 col-12 mt-auto d-flex flex-column flex-lg-row text-center">
                            <div className="date-wrap">
                                <h5 className="text-white">
                                    <i className="custom-icon bi-clock me-2"></i>
                                    <sup></sup> March 2025
                                </h5>
                            </div>

                            <div className="location-wrap mx-auto py-3 py-lg-0">
                                <h5 className="text-white">
                                    <i className="custom-icon bi-geo-alt me-2"></i>
                                     KJSCE, Mumbai
                                </h5>
                            </div>

                            <div className="social-share">
                                <ul className="social-icon d-flex align-items-center justify-content-center">
                                    <span className="text-white me-3">Share:</span>

                                    <li className="social-icon-item px-2">
                                        <a href="1" >
                                            <span><img src={fablogo} alt='facebook' style={{width:'40px', height:'40px'}}></img></span>
                                        </a>
                                    </li>

                                    <li className="social-icon-item px-2">
                                        <a href="1" className="social-icon-link">
                                        <span><img src={instalogo} alt='facebook' style={{width:'40px', height:'40px'}}></img></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="video-wrap">
                    <video autoPlay loop muted className="custom-video" poster="">
                        <source src="video/Tahuko.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>


            <section className="about-section section-padding" id="section_2">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
                            <div className="services-info">
                                <h2 className="text-white mb-4">About Us</h2>

                                <p className="text-white">Welcome to Event Hub, the central hub for all campus events! Whether you're a student, faculty member, or guest, our platform makes it easy to stay informed, participate, and engage with a wide array of events happening at Mumbai University Colleges.

At Event Hub, we believe that events are the heartbeat of campus life, fostering learning, creativity, and community engagement. From tech fests and cultural festivals to academic conferences and workshops, we aim to provide a seamless experience for organizing, managing, and attending events.</p>

                                <h6 className="text-white mt-4">Once in Lifetime Experience</h6>

                                <p className="text-white">Services: Detail the services your company offers, such as event planning, coordination, and management.</p>

                                <h6 className="text-white mt-4">Please tell your friends about our website.</h6>

                                <p className="text-white"> Thank you.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12">
                            <div className="about-text-wrap">
                                <img src="images/AboutImage.jpg" className="about-image img-fluid" alt='abc' />

                                <div className="about-text-info d-flex">
                                    <div className="d-flex">
                                        <i className="about-text bi-person"></i>
                                    </div>


                                    <div className="ms-4">

                                        <p className="mb-0">your amazing festival experience with us</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Hero