import React from 'react';
import Resume from '../components/GA-Resume.pdf';

function About() {
    return (
        <section className="container about-me">
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="https://i.imgur.com/QsJlFgP.jpg?1" className="card-img" alt="profile avatar" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">Emily Cheung</h3>
                            <h5>Full Stack Developer | Web Developer | Software Engineer</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text">Email: <a href="mailto:emilyc72994@gmail.com">emilyc72994@gmail.com</a></p>
                            <a href="https://github.com/emilyc729/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary buttons"> <i className="fab fa-github-alt"></i> GitHub </a>
                            <a href="https://www.linkedin.com/in/emilycheung-729/" rel="noopener noreferrer" className="btn btn-outline-primary buttons"> <i className="fab fa-linkedin-in"></i> LinkedIn </a>       
                            <a href={Resume} rel="noopener noreferrer" className="btn btn-outline-primary buttons"> Resume </a>       
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;