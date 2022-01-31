import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <div className="container">
                <div className="nav-columns">
                    <div className="nav-column">
                        <div className="nav-label">Menu</div>
                        <ul className="nav-links">
                            <li>
                                <NavLink to="/case-studies">
                                    Case Studies
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/approach">
                                    Approach
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/services">
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about-use">
                                    About us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-column">
                        <div className="nav-label">Contact</div>
                        <div className="nav-infos">
                            <ul className="nav-info">
                                <li className="nav-info-label">Email</li>
                                <li>
                                    <NavLink to="/contact">
                                        Get in touch with us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/audit">
                                        Get a free audit
                                    </NavLink>
                                </li>
                            </ul>
                            <ul className="nav-info">
                                <li className="nav-info-label">Headquarters</li>
                                <li>Route du Jura 49</li>
                                <li>1700 Fribourg</li>
                                <li>Switzerland</li>
                            </ul>
                            <ul className="nav-info">
                                <li className="nav-info-label">Phone</li>
                                <li>+41 (0) 75 510 28 72</li>
                            </ul>
                            <ul className="nav-info">
                                <li className="nav-info-label">Legal</li>
                                <li>Privacy and Cookies</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
