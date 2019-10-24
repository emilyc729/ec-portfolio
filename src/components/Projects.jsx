import React from 'react';

function Projects() {
    return (
        <section className="container projects">
            <div>
                <h1 className="text-center mb-4">Projects</h1>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="card">
                            <img src="https://i.imgur.com/WVdYzMY.png" className="card-img-top" alt="Mancala" />

                            <div className="card-body">
                                <h5 className="card-title">Mancala</h5>
                                <p className="card-text">
                                    In this 2-player classic board game, players are each given a side of 6 slots and 1 pot. Each player takes turns picking up marbles from a slot and placing one marble in each slot/pot counter clockwise. The player with most marbles win!
                                </p>
                                <a href="https://github.com/emilyc729/mancala" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary buttons"> <i className="fab fa-github-alt"></i> GitHub </a>
                                <a href="https://emilyc729.github.io/mancala/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary buttons">Live Project</a>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Project Completed: Aug. 9, 2019</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="card">
                            <div id="carouselIndicators2" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselIndicators2" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselIndicators2" data-slide-to="1"></li>
                                    <li data-target="#carouselIndicators2" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="https://i.imgur.com/X593Lge.png?1" className="card-img-top d-block w-100" alt="FoodieGram" />


                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://i.imgur.com/wKtkCND.png" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://i.imgur.com/oIChjLt.png" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://i.imgur.com/lo6Htkq.png" className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselIndicators2" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselIndicators2" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>

                            <div className="card-body">
                                <h5 className="card-title">FoodieGram</h5>
                                <p className="card-text">
                                    FoodieGram is a MEAN App! It is a web application for people who like to share their foodie experiences and explore delicious restaurants in their areas. With OAuth, only logged-in users may create, update, delete, and comment on food posts.
                                </p>
                                <a href="https://github.com/emilyc729/foodie-gram" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary buttons"> <i className="fab fa-github-alt"></i> GitHub </a>
                                <a href="https://ec-foodiegram.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary buttons">Live Project</a>

                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Project Completed: Aug. 30, 2019</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="card">
                            <div id="carouselIndicators3" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselIndicators3" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselIndicators3" data-slide-to="1"></li>
                                    <li data-target="#carouselIndicators3" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="https://i.imgur.com/O0AUUPL.png?1" className="card-img-top d-block w-100" alt="Briefcase" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://i.imgur.com/Ltxa7MX.png" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://i.imgur.com/QfYz8ya.png" className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselIndicators3" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselIndicators3" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Briefcase</h5>
                                <p className="card-text">Briefcase is a platform for users to create a portfolio of projects and share it to others. The projects are viewable by all users of the app. The user is the only one who can edit and delete their projects. It is a great app to use for job interviews or simply networking your accomplishments.</p>
                                <a href="https://github.com/emilyc729/mybriefcase/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary buttons"> <i className="fab fa-github-alt"></i> GitHub </a>
                                <a href="http://ess-mybriefcase.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary buttons">Live Project</a>

                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Project Completed: Sept. 20, 2019</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="card">
                            <div id="carouselIndicators4" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselIndicators4" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselIndicators4" data-slide-to="1"></li>
                                    <li data-target="#carouselIndicators4" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="https://i.imgur.com/55l8Nun.png" className="card-img-top d-block w-100" alt="Taste-It" />

                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://i.imgur.com/HaYNv9e.png?3" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://i.imgur.com/gJ6uRUC.png" className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselIndicators4" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselIndicators4" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>

                            <div className="card-body">
                                <h5 className="card-title">Taste-It</h5>
                                <p className="card-text">Taste-It is a React, fullstack app which allows customers/users to view restaurant menus and order food online from restaurants that have added their menus at the Tasty Website/App! Users who sign up may make food purchases from different restaurants at a time, while non-account users may only view.</p>
                                <a href="https://github.com/emilyc729/taste-it" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary buttons"> <i className="fab fa-github-alt"></i> GitHub </a>
                                <a href="https://ec-tasteit.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary buttons">Live Project</a>

                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Project Completed: Oct. 4, 2019</small>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Projects;