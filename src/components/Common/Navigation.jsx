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
            });
        }

        loadScript('./assets/js/masonary.js');
    }

    render() {
        return (
            <>
                <div
                    className={
                        this.props.bgcolor !== ''
                            ? `header-nav navbar-collapse collapse ${this.props.bgcolor}`
                            : 'header-nav navbar-collapse collapse'
                    }
                >
                    <ul className="nav navbar-nav">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/services"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                            >
                                Services
                            </NavLink>
                            <ul className="sub-menu">
                                <li>
                                    <NavLink
                                        to="/service/aluminum-scrap-buyers-in-abu-dhabi"
                                        className={({ isActive }) => (isActive ? 'active' : '')}
                                    >
                                        Aluminum Scrap
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/service/container-buyer-in-abu-dhabi"
                                        className={({ isActive }) => (isActive ? 'active' : '')}
                                    >
                                        Container Buyer
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/service/copper-scrap-buyers-in-abu-dhabi"
                                        className={({ isActive }) => (isActive ? 'active' : '')}
                                    >
                                        Copper Scrap Buyer
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/service/industrial-scrap-buyers-in-abu-dhabi"
                                        className={({ isActive }) => (isActive ? 'active' : '')}
                                    >
                                        Industrial Scrap Buyer
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/service/metal-scrap-dealer-in-abu-dhabi"
                                        className={({ isActive }) => (isActive ? 'active' : '')}
                                    >
                                        Metal Scrap Dealer
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/service/steel-scrap-in-abu-dhabi"
                                        className={({ isActive }) => (isActive ? 'active' : '')}
                                    >
                                        Steel Scrap
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/service/scrap-yard-in-abu-dhabi"
                                        className={({ isActive }) => (isActive ? 'active' : '')}
                                    >
                                        Scrap Yard Buyer
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                            >
                                About us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contactus"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                            >
                                Contact us
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </>
        );
    }
}

export default Navigation;
