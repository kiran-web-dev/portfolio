import React, { Component } from 'react';
import Singleproject from './Singleproject';
import Header from '../Common/Header';


const projects = [
    { title: 'Calculator', description: 'Simple calculator', icon: 'fa-calculator', link: '/calculator' },
    { title: 'Blog App', description: 'Coming soon', icon: 'fa-thumbs-up', link: '' },
    { title: 'Restaurant', description: 'Coming soon', icon: 'fa-thumbs-up', link: '' },
    { title: 'Another', description: 'Coming soon', icon: 'fa-thumbs-up', link: '' }
]

class Projects extends Component {
    render() {
        return (
            <div>
                <Header
                    title="Scroll down to view"
                    subtitle="Projects"
                    image="/img/header-bg.jpg"
                />

                <section className="page-section" id="projects" >
                    <div className="container" >
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Projects</h2>
                            <h3 className="section-subheading text-muted">Below are the few projects done by me</h3>
                        </div>
                        <div className="row text-center">
                            {projects.map((project, index) => {
                                return <Singleproject {...project} key={index} />
                            })}

                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default Projects;