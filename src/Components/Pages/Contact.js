import React, { useState } from 'react';

const Contact = (props) => {

    const [input, setInput] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const submitForm = () => {
        alert("submitted!!!!");
    }

    return (
        <div>
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Let's Get in Touch</h2>
                        <h3 className="section-subheading">Leave a Message for me</h3>
                    </div>
                    <form id="contactForm" name="sentMessage" novalidate="novalidate">
                        <div className="row align-items-stretch mb-5">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input className="form-control"
                                        id="name" type="text" placeholder="Your Name *" required="required"
                                        data-validation-required-message="Please enter your name."
                                        value={input.name}
                                        onChange={(e) => setInput({ name: e.target.value })}
                                    />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                    <input className="form-control"
                                        id="email" type="email" placeholder="Your Email *" required="required"
                                        data-validation-required-message="Please enter your email address."
                                        value={input.email}
                                        onChange={(e) => setInput({ email: e.target.value })}
                                    />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group mb-md-0">
                                    <input className="form-control"
                                        id="phone" type="tel" placeholder="Your Phone *" required="required"
                                        data-validation-required-message="Please enter your phone number."
                                        value={input.phone}
                                        onChange={(e) => setInput({ phone: e.target.value })}
                                    />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-group-textarea mb-md-0">
                                    <textarea className="form-control" id="message"
                                        placeholder="Your Message *" required="required"
                                        data-validation-required-message="Please enter a message."
                                        value={input.message}
                                        onChange={(e) => setInput({ message: e.target.value })}
                                    >
                                    </textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div id="success"></div>
                            <button className="btn btn-primary btn-lg text-uppercase"
                                id="sendMessageButton" type="submit"
                                onClick={submitForm}
                            >Send Message</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Contact;