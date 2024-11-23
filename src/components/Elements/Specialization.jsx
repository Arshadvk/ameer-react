import React from 'react';
import { NavLink } from 'react-router-dom';

var bnr1 = require('./../../images/background/bg-5.png');

class Specialization extends React.Component {
    render() {
        return (
            <>
                <div className="section-full mobile-page-padding bg-white p-t80 p-b30 bg-repeat square_shape1" style={{backgroundImage:"url(" + bnr1 + ")"}}>
                    <div className="container">
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 m-b30">
                                    <div className="image-effect-one hover-shadow">
                                        <img src={require('../../images/pic1.jpg')} alt=""/>
                                        <div className="figcaption">
                                            <h4>Construction</h4>
                                            <p>Engineering your</p>
                                            <NavLink to="/project-detail" ><i className="link-plus bg-primary" /></NavLink>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-4  col-sm-6  col-xs-6  m-b30">
                                    <div className="image-effect-one hover-shadow">
                                        <img src={require('../../images/pic2.jpg')} alt="" />
                                        <div className="figcaption bg-dark">
                                            <h4>Renovation</h4>
                                            <p>Dazzling Design</p>
                                            <NavLink to="/project-detail" ><i className="link-plus bg-primary" /></NavLink>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-4  col-sm-6  col-xs-6  m-b30">
                                    <div className="image-effect-one hover-shadow">
                                        <img src={require('../../images/pic3.jpg')} alt="" />
                                        <div className="figcaption bg-dark">
                                            <h4>Renovation</h4>
                                            <p>Dazzling Design</p>
                                            <NavLink to="/project-detail" ><i className="link-plus bg-primary" /></NavLink>
                                        </div>
                                    </div>
                                </div>

                             

                                <div className="col-lg-3 col-md-4  col-sm-6  col-xs-6  m-b30">
                                    <div className="image-effect-one hover-shadow">
                                        <img src={require('../../images/pic4.jpg')} alt="" />
                                        <div className="figcaption bg-dark">
                                            <h4>Renovation</h4>
                                            <p>Dazzling Design</p>
                                            <NavLink to="/project-detail" ><i className="link-plus bg-primary" /></NavLink>
                                        </div>
                                    </div>
                                </div>

                                
                            </div>
                        </div>
                    </div>
                   
                </div>
            </>
        );
    }
};

export default Specialization;