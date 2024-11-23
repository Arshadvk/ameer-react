import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {

    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/masonary.js');

    };

    render() {
        return (
            <>
                <div className={(this.props.bgcolor !== '') ? `header-nav navbar-collapse collapse ${this.props.bgcolor}` : 'header-nav navbar-collapse collapse'}>
                    <ul className="nav navbar-nav">
                       
                        <li>
                        <NavLink to={"/"}>Home</NavLink>
                        </li>

                        <li className="active">
                            <NavLink to={"/services"}> Services</NavLink>
                            <ul className="sub-menu">
                                <li>
                                    <NavLink to={"/service/aluminum-scrap-buyers-in-abu-dhabi"}>Aluminum Scrap</NavLink>
                                </li>
                                <li>
                                <NavLink to={"/service/container-buyer-in-abu-dhabi"}>Container Buyer</NavLink>
                                </li>
                                <li>
                                <NavLink to={"/service/copper-scrap-buyers-in-abu-dhabi"}>Copper Scrap Buyer</NavLink>
                                </li>
                                <li>
                                <NavLink to={"/service/industrial-scrap-buyers-in-abu-dhabi"}>Industrial Scrap Buyer</NavLink>
                                </li>

                                <li>
                                <NavLink to={"/service/metal-scrap-dealer-in-abu-dhabi"}>Metal Scrap Dealer</NavLink>
                                </li>

                                <li>
                                <NavLink to={"/service/steel-scrap-in-abu-dhabi"}>Steel Scrap</NavLink>
                                </li>

                                <li>
                                <NavLink to={"/service/scrap-yard-in-abu-dhabi"}>Scrap Yard Buyer</NavLink>
                                </li>
                                
                            </ul>

                        </li>
                        <li>
                        <NavLink to={"/about"}>About us</NavLink>
                        </li>
                        <li>

                        <NavLink to={"/contactus"}>Contact us</NavLink>
                        </li>
                        <li>
                        <NavLink to={""}>Pages</NavLink>
                            <ul className="sub-menu">
                                <li>
                                <NavLink to={""}>Blog</NavLink>
                                    <ul className="sub-menu has-child">
                                        <li><NavLink to={"/blog-grid"}>Blog Grid</NavLink></li>
                                        <li><NavLink to={"/blog-listing"}>Blog Listing</NavLink></li>
                                        <li><NavLink to={"/blog-masonary"}>Blog Masonry</NavLink></li>
                                    </ul>
                                </li>
                                <li>
                                <NavLink to={"/faq"}>FAQ</NavLink>
                                </li>
                                <li>
                                <NavLink to={"/error"}>Error 404</NavLink>
                                </li>
                                <li>
                                <NavLink to={"/contactus"}>Contact us</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to={""}>Post detail</NavLink>
                            <ul className="sub-menu">
                                <li><NavLink to={"/post-image"}>Post Image</NavLink></li>
                                <li><NavLink to={"/post-gallery"}>Post Gallery</NavLink></li>
                                <li><NavLink to={"/post-video"}>Post Video</NavLink></li>
                                <li><NavLink to={"/post-sidebar"}>Post Right Sidebar</NavLink></li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to={""}>Projects</NavLink>
                            <ul className="sub-menu">
                                <li><NavLink to={"/project-grid"}>Project Grid</NavLink></li>
                                <li><NavLink to={"/project-masonary"}>Project Masonry</NavLink></li>
                                <li><NavLink to={"/project-carousel"}>Project Carousel</NavLink></li>
                                <li><NavLink to={"/project-classic1"}>Project Classic-1</NavLink></li>
                                <li><NavLink to={"/project-classic2"}>Project Classic-2</NavLink></li>
                                <li><NavLink to={"/project-detail"}>Project Detail</NavLink></li>
                            </ul>
                        </li>
                      
                    </ul>
                </div>
            </>
        );
    };
};

export default Navigation;