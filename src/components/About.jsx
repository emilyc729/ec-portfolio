import React from 'react';
import Resume from '../Resume/GA-Resume.pdf';

function About() {
    return (
        <section className="container">
            <div className="about-me">
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-sm-12 col-md-4">
                            <img src="https://i.imgur.com/QsJlFgP.jpg?1" className="card-img" alt="profile avatar" />
                        </div>
                        <div className="col-sm-12 col-md-8">
                            <div className="card-body">
                                <h1 className="card-title">Emily Cheung</h1>
                                <h5>Full Stack Developer | Web Developer | Software Engineer</h5>
                                <p className="card-text">
                                Emily is an attentive, reliable developer who is capable of creating responsive full stack applications.  With a background in computer science and prior experience working in a client-faced environment, Emily values the importance of user experience design and core functionality when implementing web applications. It is her passion to explore and use new technologies, and also find ways to improve/fix bugs in products. She emphasizes the importance of time management and efficiency in work. She is a calm, precise, and diligent team player.
                                </p>
                                <a href="mailto:emilyc72994@gmail.com" className="btn btn-outline-primary buttons"> <i className="far fa-envelope"></i> Email</a>
                                <a href="https://github.com/emilyc729/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary buttons"> <i className="fab fa-github-alt"></i> GitHub </a>
                                <a href="https://www.linkedin.com/in/emilycheung-729/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary buttons"> <i className="fab fa-linkedin-in"></i> LinkedIn </a>
                                <a href={Resume} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary buttons"><i className="far fa-file-pdf"></i> Resume </a>
                            </div>
                        </div>

                    </div>
                </div>
                <h3 className="mt-5 mb-4 text-center">Technical Skills & Tools</h3>
                <div className="row techs">
                    <div className="col-md-4">
                        <div className="card mb-3" >
                            <div className="card-header">Languages & Frameworks</div>
                            <div className="card-body d-flex justify-content-around">
                                <ul>
                                    <li className="card-text">HTML5</li>
                                    <li className="card-text">CSS3</li>
                                    <li className="card-text">JavaScript</li>
                                    <li className="card-text">jQuery</li>
                                    <li className="card-text">Bootstrap 4</li>
                                </ul>
                                <ul>
                                    <li className="card-text">React</li>
                                    <li className="card-text">Node.js</li>
                                    <li className="card-text">Express</li>
                                    <li className="card-text">Python</li>
                                    <li className="card-text">Django</li>
                                </ul>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-3" >
                            <div className="card-header">Data/Databases</div>
                            <div className="card-body d-flex justify-content-around">
                                <ul>
                                    <li className="card-text">MongoDB</li>
                                    <li className="card-text">Mongoose</li>
                                    <li className="card-text">mySQL</li>
                                    <li className="card-text">postgreSQL</li>
                                </ul>
                                <ul>
                                    <li className="card-text">JSON</li>
                                    <li className="card-text">AWS S3</li>
                                    <li className="card-text">AJAX</li>
                                    <li className="card-text">APIs</li>
                                </ul>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-3" >
                            <div className="card-header ">Methodologies</div>
                            <div className="card-body d-flex justify-content-around">
                                <ul>
                                    <li className="card-text">OOP</li>
                                    <li className="card-text">MVC Pattern</li>
                                    <li className="card-text">Responsive Design</li>
                                    <li className="card-text">User Stories</li>
                                </ul>
                                <ul>
                                    <li className="card-text">Wireframing</li>
                                    <li className="card-text">ERDs</li>
                                    <li className="card-text">OAuth</li>
                                    <li className="card-text">JWT Auth</li>
                                </ul>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-3" >
                            <div className="card-header ">Management & Deployment</div>
                            <div className="card-body d-flex justify-content-around">
                                <ul>
                                    <li className="card-text">Git</li>
                                    <li className="card-text">Github</li>
                                    <li className="card-text">npm</li>
                                </ul>
                                <ul>
                                    <li className="card-text">CLI</li>
                                    <li className="card-text">Homebrew</li>
                                    <li className="card-text">Heroku</li>
                                </ul>
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-3" >
                            <div className="card-header ">Operations & Communcations</div>
                            <div className="card-body d-flex justify-content-around">
                                <ul>
                                    <li className="card-text">Google Suite</li>
                                    <li className="card-text">Microsoft Office</li>
                                    <li className="card-text">Slack</li>
                                </ul>
                                <ul>
                                    <li className="card-text">Zoom</li>
                                    <li className="card-text">Trello</li>
                                    <li className="card-text">Postman</li>
                                </ul> 
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-3" >
                            <div className="card-header ">Spoken Languages</div>
                            <div className="card-body d-flex justify-content-around">
                                <ul>
                                    <li className="card-text">English (Fluent)</li>
                                    <li className="card-text">Cantonese (Fluent)</li>
                                    <li className="card-text">Mandarin (Conversational)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default About;