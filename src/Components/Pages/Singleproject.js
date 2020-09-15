import React from 'react';
import { Link } from 'react-router-dom';
//<Link className="btn btn-primary btn-sm  js-scroll-trigger" to={`/projects${props.link}`}>View Project</Link>
const Singleproject = (props) => {
    return (

        <div className="col-md-4" >
            <Link to={`/projects${props.link}`}>
                <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                    <i className={`fas ${props.icon} fa-stack-1x fa-inverse`}></i>
                </span>

                <h4 className="my-3">{props.title}</h4>

            </Link>
            <p className="text-muted">{props.description}</p>

        </div>

    );
}
export default Singleproject;