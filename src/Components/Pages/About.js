import React from "react";
import Header from '../Common/Header';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <Header
        title="Scroll down to know"
        subtitle="ABOUT ME"
        image="/img/header-bg.jpg"
      />

      <section className="page-section" id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <ul className="timeline">
            <li>
              <div className="timeline-image"><img className="rounded-circle img-fluid" src="/img/about/3.jpg" alt="" /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2019-present</h4>
                  <h4 className="subheading">Work Life</h4>
                </div>
                <div className="timeline-body"><p className="text-muted">Started Working in IT on june 2019 and currently working as Automation Tester in Wipro,after the work timings i willbe busy with Learnung new things related to Web Development</p></div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image"><img className="rounded-circle img-fluid" src="/img/about/rnsit.png" alt="" /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2019</h4>
                  <h4 className="subheading">B.E</h4>
                </div>
                <div className="timeline-body"><p className="text-muted">Completedthe graduation in information Science and Engineering at RNS Institute of Technology with <strong>6.5 CGPA</strong></p></div>
              </div>
            </li>
            <li>
              <div className="timeline-image"><img className="rounded-circle img-fluid" src="/img/about/mes.png" alt="" /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2015</h4>
                  <h4 className="subheading">PUC</h4>
                </div>
                <div className="timeline-body"><p className="text-muted">Completed Pre University Education from M.M Atrs and Science COLLEGE Sirsi with <strong>81.33%</strong> </p></div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image"><img className="rounded-circle img-fluid" src="/img/about/jmj.png" alt="" /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2013</h4>
                  <h4 className="subheading">SSLC</h4>
                </div>
                <div className="timeline-body"><p className="text-muted">Completed 10th in JMJ High School Sirsi,with <strong>88.64%</strong> </p></div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <Link className="nav-link js-scroll-trigger" to="/skills">
                  <h4>
                    Know More
                  <br />
                    About My
                  <br />
                    Skills!
                  </h4>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About;