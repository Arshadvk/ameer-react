import React from 'react';
import Navigation from '../Common/Navigation';
import { NavLink } from 'react-router-dom';

var bnr = require('./../../images/background/bg-5.png');

class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {logo: require('./../../images/logo/logo.png')};
    }

    state = { isSearchActive: false, isQuoteActive: false };

    handleSearchToggle = () => {
        this.setState({ isSearchActive: !this.state.isSearchActive });
    };

    handleQuoteToggle = () => {
        this.setState({ isQuoteActive: !this.state.isQuoteActive });
    };

    componentDidMount() {

        const handleScroll = () => {
            const offset = window.scrollY;

            const stickyheader = document.querySelector('.sticky-header ');

            if (offset >= 100) {
                stickyheader.classList.add('is-fixed');
                stickyheader.classList.add('color-fill');

            } else {
                stickyheader.classList.remove('is-fixed');
                stickyheader.classList.remove('color-fill');
            }
        }

        window.addEventListener('scroll', handleScroll);

        window.updateTopMostParent = (logopath) => {
           this.setState({ logo: logopath }); 
        };
    }

    render() {
        const isSearchActive = this.state.isSearchActive;
        const isQuoteActive = this.state.isQuoteActive;
        
        return (
            <>

                <header className="site-header header-style-1">
                    <div className="top-bar bg-gray">
                        <div className="container">
                            <div className="row">
                                <div className="mt-topbar-left clearfix">
                                    <ul className="list-unstyled e-p-bx pull-right">
                                        <li><i className="fa fa-map-marker" /> 10 Street 7 Musaffah , Abu Dhabi Uae</li>
                                        {/* <li><i className="fa fa-phone" />(+971) 509 683 697</li> */}
                                        <li><i className="fa fa-clock-o" />Saturday - Thursday 6:00 am - 11:00 pm</li>
                                    </ul>
                                </div>
                                <div className="mt-topbar-right clearfix">
                                    <div className="appint-btn"><a href="tel:+971509683697" className="site-button"> <i className="fa fa-phone" />  (+971) 509 683 697</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sticky-header main-bar-wraper">
                        <div className="main-bar bg-white">
                            <div className="container">
                                <div className="logo-header">
                                    <div className="logo-header-inner logo-header-one">
                                        <NavLink to={"./"}>
                                            <img src={this.state.logo} alt="Shapen" />
                                        </NavLink>
                                    </div>
                                </div>
                                {/* NAV Toggle Button */}
                                <button data-target=".header-nav" data-toggle="collapse" type="button" className="navbar-toggle collapsed">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                </button>
                                {/* ETRA Nav */}
                                <div className="extra-nav">
                                   
                                    <div className="extra-cell">
                                        <NavLink to={"#"} className="contact-slide-show" onClick={this.handleQuoteToggle}><i className="fa fa-angle-left arrow-animation" /></NavLink>
                                    </div>
                                </div>
                                {/* ETRA Nav */}
                                {/* Contact Nav */}
                                <div className="contact-slide-hide " style={{ backgroundImage: 'url(' + bnr + ')', right: isQuoteActive ? '0px' : '-500px' }}>
                                    <div className="contact-nav">
                                    <NavLink to={"#"} className="contact_close" onClick={this.handleQuoteToggle}>×</NavLink>
                                        <div className="contact-nav-form p-a30">
                                            <div className="contact-info   m-b30">
                                                <div className="mt-icon-box-wraper center p-b30">
                                                    <div className="icon-xs m-b20 scale-in-center"><i className="fa fa-phone" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0 font-weight-500">Phone number</h5>
                                                        <p>(+971) 509 683 697</p>
                                                        <p>(+971) 552 030 266</p>
                                                    </div>
                                                </div>
                                                <div className="mt-icon-box-wraper center p-b30">
                                                    <div className="icon-xs m-b20 scale-in-center"><i className="fa fa-envelope" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0 font-weight-500">Email address</h5>
                                                        <p>info@ameerscrap.com</p>
                                                    </div>
                                                </div>
                                                <div className="mt-icon-box-wraper center p-b30">
                                                    <div className="icon-xs m-b20 scale-in-center"><i className="fa fa-map-marker" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0 font-weight-500">Address info</h5>
                                                        <p>10 Street 7 Musaffah , Abu Dhabi Uae</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="full-social-bg">
                                                <ul>
                                                    <li><NavLink to={"#"} className="facebook"><i className="fa fa-facebook" /></NavLink></li>
                                                    <li><NavLink to={"#"} className="google"><i className="fa fa-google" /></NavLink></li>
                                                    <li><NavLink to={"#"} className="instagram"><i className="fa fa-instagram" /></NavLink></li>
                                                    <li><NavLink to={"#"} className="tumblr"><i className="fa fa-tumblr" /></NavLink></li>
                                                    <li><NavLink to={"#"} className="twitter"><i className="fa fa-twitter" /></NavLink></li>
                                                    <li><NavLink to={"#"} className="youtube"><i className="fa fa-youtube" /></NavLink></li>
                                                </ul>
                                            </div>
                                            <div className="text-center">
                                                <h4 className="font-weight-600">©  2022 Arshad vk</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* SITE Search */}
                               
                                {/* MAIN Vav */}
                                <Navigation />
                            </div>
                        </div>
                    </div>
                </header>

            </>
        );
    };
};

export default Header;

