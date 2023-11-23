import {Link, NavLink} from "react-router-dom";
import React from "react";

function Header() {

    return (
        <>
            {/* Topbar Start */}
            <div className="container-fluid text-light px-0 py-2" style={{backgroundColor:"#21cc79"}}>
                <div className="row gx-0 d-none d-lg-flex">
                    <div className="col-lg-7 px-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center me-4">
                            <span className="fa fa-phone-alt me-2"/>
                            <span>+012 345 6789</span>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center">
                            <span className="far fa-envelope me-2"/>
                            <span>info@example.com</span>
                        </div>
                    </div>
                    <div className="col-lg-5 px-5 text-end">
                        <div className="h-100 d-inline-flex align-items-center mx-n2">
                            <span>Follow Us:</span>
                            <a className="btn btn-link text-light" href="">
                                <i className="fab fa-facebook-f"/>
                            </a>
                            <a className="btn btn-link text-light" href="">
                                <i className="fab fa-twitter"/>
                            </a>
                            <a className="btn btn-link text-light" href="">
                                <i className="fab fa-linkedin-in"/>
                            </a>
                            <a className="btn btn-link text-light" href="">
                                <i className="fab fa-instagram"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}
            {/* Navbar Start */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
                <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <img style={{height: '50px', width: '50px'}}
                         src="https://furamavietnam.com/wp-content/uploads/2018/10/logo.png" alt="Img"/>
                    <h1 className="m-0">Furama</h1>
                </a>
                {/*<button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">*/}
                {/*    <span className="navbar-toggler-icon"/>*/}
                {/*</button>*/}
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <NavLink to={"/"} style={{textDecoration:'none'}}><a className="nav-item nav-link active" >
                            Home
                        </a></NavLink>
                        <Link to={"/facility-list"} style={{textDecoration:'none'}}><a className="nav-item nav-link active">
                            Service
                        </a></Link>
                        <Link to={"/customers-list"} style={{textDecoration:'none'}}><a className="nav-item nav-link">
                            Customer
                        </a></Link>
                        <Link to={"/contract-list"} style={{textDecoration:'none'}}><a className="nav-item nav-link">
                            Contract
                        </a></Link>
                        <div className="nav-item dropdown">
                            <Link style={{textDecoration:'none'}}><a
                                href="#"
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                            >
                                Pages
                            </a></Link>
                            <div className="dropdown-menu bg-light m-0">
                                <a href="feature.html" className="dropdown-item">
                                    Features
                                </a>
                                <a href="quote.html" className="dropdown-item">
                                    Free Quote
                                </a>
                                <a href="team.html" className="dropdown-item">
                                    Our Team
                                </a>
                                <a href="testimonial.html" className="dropdown-item">
                                    Testimonial
                                </a>
                                <a href="404.html" className="dropdown-item">
                                    404 Page
                                </a>
                            </div>
                        </div>
                        <Link style={{textDecoration:'none'}}><a href="contact.html" className="nav-item nav-link">
                            Contact
                        </a></Link>
                    </div>
                </div>
            </nav>
            {/* Navbar End */}
            {/* Carousel Start */}
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
                            aria-current="true" aria-label="Slide 1"/>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                            aria-label="Slide 2"/>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                            aria-label="Slide 3"/>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img style={{width: '100%', height: '500px'}} className="height-panner w-100"
                             src="https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2020/06/Review-Furama-Resort-Da-Nang-13.jpg"
                             alt="Image"/>
                            <div className="carousel-caption d-none d-md-block">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-12">
                                            <div className="display-1 text-white mb-8 animated slideInDown" style={{color:"white"}}>
                                                <h2>More than a resort... an experience</h2>
                                                <h1 className="mb-8">Resort for the whole family, all year round.</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img style={{width: '100%', height: '500px'}} className="height-panner w-100"
                             src="https://tuildonai.com/vnt_upload/project/05_2019/FURAMA.jpg" alt="Image"/>
                            <div className="carousel-caption d-none d-md-block">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-12">
                                            <div className="display-1 text-white mb-8 animated slideInDown" style={{color:"white"}}>
                                                <h2>More than a resort... an experience</h2>
                                                <h1 className="mb-8">Resort for the whole family, all year round.</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img style={{width: '100%', height: '500px'}} className="height-panner w-100"
                             src="https://phulong.com/UploadFiles/Images/FURAMA%2020%20NAM(1).jpg" alt="Image"/>
                            <div className="carousel-caption d-none d-md-block">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-12">
                                            <div className="display-1 text-white mb-8 animated slideInDown" style={{color:"white"}}>
                                                <h2>More than a resort... an experience</h2>
                                                <h1 className="mb-8">Resort for the whole family, all year round.</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            {/* Carousel End */}
        </>
    );
}

export default Header;