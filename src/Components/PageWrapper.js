import React from 'react';
import { Link } from 'react-router-dom';


const PageWrapper = (props) => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container">
                    <Link className="navbar-brand js-scroll-trigger" to="/about">
                        <div id="img1">
                            <img src="../../img/kir1.jpg" className="img-zoom rounded-circle img-fluid" alt="here"></img>
                            <span>Kiran Hegde</span>
                        </div>

                    </Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                    <i className="fas fa-bars "></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/projects">Projects</Link></li>
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/portfolio">Portfolio</Link></li>
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/about">About</Link></li>
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/skills">Skills</Link></li>
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {props.children}
        </div>

    );
}
export default PageWrapper;