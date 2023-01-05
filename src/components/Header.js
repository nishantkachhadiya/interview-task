import React from "react";
import { Link } from "react-router-dom";
import camara_icon from '../assets/img/camara_icon.png'
import notification_icon from '../assets/img/notification_icon.png'
import profile_icon from '../assets/img/profile_icon.jpg'
import location from '../assets/img/location.png'

export default function Header() {
    const sidebar = (classs) => {
        if (document.body.getAttribute("side-menu") === classs) {
            document.body.removeAttribute("side-menu", classs)
        }
        else {
            document.body.setAttribute("side-menu", classs)
        }
    }

    return (
        <>
            <div className="header_wrapper">
                <header>
                    <div className="header_inner">
                        <div className="header_left_part">
                            <div className="header_left_inner">
                                <div id="toggle" className="toggle" onClick={() => { sidebar("side_bar") }}><div className="one"></div><div className="two"></div><div className="three"></div></div>
                                <Link to={"/"} title="logo" className="logon_link">
                                    LOGO
                                </Link>
                            </div>
                            <ul>
                                <li className="menu_profile">
                                    <div className='profile_col'>
                                        <div className='position-relative'>
                                            <div className='profile_img'>
                                                <img src={profile_icon} alt="profile" />
                                            </div>
                                            <div className='camara_icon'>
                                                <img src={camara_icon} alt="camara" />
                                            </div>
                                        </div>
                                        <div className='profile_name'>
                                            <h2>John Smith</h2>
                                            <p>
                                                <img src={location} alt="location" />
                                                <span>Main St. Farmington, CA 123</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <Link to="#0">Menu 1</Link>
                                    <div className="inner_menu">
                                        <ul className="">
                                            <li>
                                                <Link to="">My Programs</Link>
                                            </li>
                                            <li>
                                                <Link to="">New Programs</Link>
                                            </li>
                                            <li>
                                                <Link to="">Programs invites</Link>
                                            </li>
                                            <li>
                                                <Link to="">Programs Request</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <Link to="#0">Menu 2</Link>
                                </li>
                                <li>
                                    <Link to="#0">Menu 3</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="my_profile d-flex align-items-center">
                            <div className="notification_icon">
                                <img src={notification_icon} alt="notification" />
                            </div>
                            <div className="profile_icon">
                                <img src={profile_icon} alt="profile" />
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
    // }
}
