import React, { Component } from 'react';
import Header from '../Common/Header';
import Skills from './Skills';

class Home extends Component {
    render() {
        return (
            <div>
                <Header
                    title="Welcome to my Website"
                    subtitle="IT'S NICE TO MEET YOU"
                    buttonText="Tell Me More"
                    link="/projects"
                    showButton={true}
                    image="/img/header-bg.jpg"
                />

                <Skills />
            </div>
        );
    }
}
export default Home;