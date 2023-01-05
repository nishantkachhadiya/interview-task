import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Link } from "react-router-dom";
import Famaily from '../components/Famaily';
import Invitations from '../components/Invitations';

import profile_icon from '../assets/img/profile_icon.jpg'
import camara_icon from '../assets/img/camara_icon.png'
import location from '../assets/img/location.png'
import atm_card from '../assets/img/atm_card.png'
import user_settings_icon from '../assets/img/user_settings_icon.svg'


const Home = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const homeTab = (classs) => {
        if (document.body.getAttribute("tab-menu") === classs) {
            document.body.removeAttribute("tab-menu", classs)
        }
        else {
            document.body.setAttribute("tab-menu", classs)
        }
    }

    const profile_menu = (classs) => {
        if (document.body.getAttribute("profile_menu") === classs) {
            document.body.removeAttribute("profile_menu", classs)
        }
        else {
            document.body.setAttribute("profile_menu", classs)
        }
    }

    return (
        <div className='admin_panal_wrap'>
            <div className='common_padding_wrap'>
                <div className='title_and_view_part'>
                    <div className='common_title'>
                        <h2>My Account</h2>
                    </div>
                    <button type='button' className='common_btn'>View Button</button>

                    <div className='success_message'>Success Meassage Here</div>
                </div>

                <div className='profile_tab_wrap'>
                    <button type='button' className='active' onClick={() => homeTab("profile")}>Profile</button>
                    <button type='button' onClick={() => homeTab("wallet")}>Wallet</button>
                    <button type='button' onClick={() => homeTab("activities")}>Activities</button>
                    <button type='button' onClick={() => homeTab("invitations")}>Invitations</button>
                </div>

                <div className='profile_all_details_wrap'>
                    <div className="row">
                        <div className='col-md-9'>
                            <div className='profile_info_wrap animated animatedFadeInUp fadeInUp active'>
                                <div className='profile_info'>
                                    <div className='profile_col'>
                                        <div className='position-relative' onClick={() => profile_menu("profile_menu")}>
                                            <div className='profile_img'>
                                                <img src={profile_icon} alt="profile" />
                                            </div>
                                            <div className='camara_icon'>
                                                <img src={camara_icon} alt="camara" />
                                            </div>
                                            <div className='upload_new_wrap'>
                                                <button type='button'>Upload New</button>
                                                <button type='button'>Remove</button>
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
                                    <div className='profile_input_col'>
                                        <div className='common_input_wrap'>
                                            <label htmlFor="first_name">First Name :</label>
                                            <TextField
                                                id="first_name"
                                                label=""
                                                placeholder="First Name"
                                                multiline
                                                variant="standard"
                                            />
                                        </div>
                                        <div className='common_input_wrap'>
                                            <label htmlFor="first_name">Phone :</label>
                                            <TextField
                                                id="first_name"
                                                label=""
                                                placeholder="Phone"
                                                multiline
                                                variant="standard"
                                            />
                                        </div>
                                        <div className='common_input_wrap'>
                                            <label htmlFor="last_name">Last Name :</label>
                                            <TextField
                                                id="last_name"
                                                label=""
                                                placeholder="Last Name"
                                                multiline
                                                variant="standard"
                                            />
                                        </div>
                                        <div className='common_input_wrap'>
                                            <label htmlFor="last_name">Graduction Year :</label>
                                            <TextField
                                                id="last_name"
                                                label=""
                                                placeholder="Graduction Year"
                                                multiline
                                                variant="standard"
                                            />
                                        </div>
                                        <div className='common_input_wrap'>
                                            <label htmlFor="last_name">Email :</label>
                                            <TextField
                                                id="last_name"
                                                label=""
                                                placeholder="Email"
                                                multiline
                                                variant="standard"
                                            />
                                        </div>


                                        <div className='common_input_wrap'>
                                            <label htmlFor="last_name">Date if Birth :</label>
                                            <TextField
                                                id="last_name"
                                                label=""
                                                placeholder="Date if Birth"
                                                multiline
                                                variant="standard"
                                            />
                                        </div>
                                    </div>
                                    <div className='all_btn'>
                                        <button type='button' className='profile_btn save_btn'>Save Changes</button>
                                        <button type='button' className='profile_btn change_password'>Change Password</button>
                                        <button type='button' className='profile_btn leave_famailt_btn'>Leave Family</button>
                                    </div>
                                </div>

                                <div className='famaily_info_wrap famaily_info_wrap_first'>
                                    <div className='activites_title_wrap'>
                                        <div className='common_main_title'>
                                            <h2>Famaily</h2>
                                        </div>
                                        <div className='d-flex align-items-center serch_wrap'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" /></svg>
                                            <button type='button' className='edit_btn view_btn'>Add New</button>
                                        </div>
                                    </div>
                                    <Famaily />
                                </div>
                            </div>

                            <div className='bank_details_info'>
                                <div className='row'>
                                    <div className='col-md-7'>
                                        <div className='bank_card_details animated animatedFadeInUp fadeInUp'>
                                            <div className='common_main_title'>
                                                <h2>Bank Account</h2>
                                            </div>
                                            <div className='atm_card_details_wrap'>
                                                <div className='atm_card_img_wrap'>
                                                    <div className='atm_card_img'>
                                                        <img src={atm_card} alt="atm" />
                                                    </div>
                                                    <div className='bank_account_card'>
                                                        <p>
                                                            <span className='dots'>**** **** ****</span>
                                                            <span>5967</span>
                                                        </p>
                                                        <span>Expries 09/27</span>
                                                    </div>
                                                </div>
                                                <div className='atm_card_img_wrap'>
                                                    <div className='atm_card_img'>
                                                        <img src={atm_card} alt="atm" />
                                                    </div>
                                                    <div className='bank_account_card'>
                                                        <p>
                                                            <span className='dots'>**** **** ****</span>
                                                            <span>5967</span>
                                                        </p>
                                                        <span>Expries 09/27</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='billing_address'>
                                            <div className='common_main_title'>
                                                <h2>Blling Address</h2>
                                            </div>
                                            <div className='home_address_wrap'>
                                                <div className='home_check_box'>
                                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Same as Home Address" />
                                                </div>
                                                <div className="blling_address_info">
                                                    <div className='row'>
                                                        <div className='col-md-6'>
                                                            <div className='common_input_wrap'>
                                                                <label htmlFor="first_name">First Name :</label>
                                                                <TextField
                                                                    id="blling_ifirst_name"
                                                                    label=""
                                                                    placeholder="First Name"
                                                                    multiline
                                                                    variant="standard"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <div className='common_input_wrap'>
                                                                <label htmlFor="blling_first_name">Last Name :</label>
                                                                <TextField
                                                                    id="blling_first_name"
                                                                    label=""
                                                                    placeholder="Last Name"
                                                                    multiline
                                                                    variant="standard"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <div className='common_input_wrap'>
                                                                <label htmlFor="blling_address_line_1">Address Line 1 :</label>
                                                                <TextField
                                                                    id="blling_address_line_1"
                                                                    label=""
                                                                    placeholder="Last Name"
                                                                    multiline
                                                                    variant="standard"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <div className='common_input_wrap'>
                                                                <label htmlFor="blling_address_line_2">Address Line 2 :</label>
                                                                <TextField
                                                                    id="blling_address_line_2"
                                                                    label=""
                                                                    placeholder="Last Name"
                                                                    multiline
                                                                    variant="standard"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <div className='row'>
                                                                <div className='col-md-6'>
                                                                    <div className='common_input_wrap common_select_wrap'>
                                                                        <label htmlFor="blling_address_line_2">Country</label>
                                                                        <Select
                                                                            value={age}
                                                                            onChange={handleChange}
                                                                            displayEmpty
                                                                            inputProps={{ 'aria-label': 'Without label' }}
                                                                        >
                                                                            <MenuItem value="">
                                                                                <p>None</p>
                                                                            </MenuItem>
                                                                            <MenuItem value={10}>Ten</MenuItem>
                                                                            <MenuItem value={20}>Twenty</MenuItem>
                                                                            <MenuItem value={30}>Thirty</MenuItem>
                                                                        </Select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className='common_input_wrap common_select_wrap'>
                                                                        <label htmlFor="blling_address_line_2">State/Province/Region</label>
                                                                        <Select
                                                                            value={age}
                                                                            onChange={handleChange}
                                                                            displayEmpty
                                                                            inputProps={{ 'aria-label': 'Without label' }}
                                                                        >
                                                                            <MenuItem value="">
                                                                                <p>None</p>
                                                                            </MenuItem>
                                                                            <MenuItem value={10}>Ten</MenuItem>
                                                                            <MenuItem value={20}>Twenty</MenuItem>
                                                                            <MenuItem value={30}>Thirty</MenuItem>
                                                                        </Select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <div className='row'>
                                                                <div className='col-md-6'>
                                                                    <div className='common_input_wrap'>
                                                                        <label htmlFor="city">City :</label>
                                                                        <TextField
                                                                            id="city"
                                                                            label=""
                                                                            placeholder="Enter City Name"
                                                                            multiline
                                                                            variant="standard"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className='common_input_wrap'>
                                                                        <label htmlFor="zip_code">Zip Code :</label>
                                                                        <TextField
                                                                            id="zip_code"
                                                                            label=""
                                                                            placeholder="Enter Zip Code"
                                                                            multiline
                                                                            variant="standard"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='edit_details'>
                                                    <button type='button' className='edit_btn'>Edit Details</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5'>
                                        <div className="activites_wrap animated animatedFadeInUp fadeInUp">
                                            <div className='activites_title_wrap'>
                                                <div className='common_main_title'>
                                                    <h2>Activites</h2>
                                                </div>
                                                <button type='button' className='edit_btn view_btn'>View All</button>
                                            </div>
                                            <div className='activites_info_wrap'>
                                                <ul>
                                                    <li>
                                                        <div className='activites_info_inner'>
                                                            <div className='activites_icon_wrap'>
                                                                <img src={user_settings_icon} alt="icon" />
                                                            </div>
                                                            <div className='activites_dec'>
                                                                <h3>Leslie Alexander updated her <Link to="/">Account Type</Link></h3>
                                                                <span>5 October 11:46 AM</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='activites_info_inner'>
                                                            <div className='activites_icon_wrap'>
                                                                <img src={user_settings_icon} alt="icon" />
                                                            </div>
                                                            <div className='activites_dec'>
                                                                <h3>John Smith removed Mark Fleix from <Link to="/">Family member</Link></h3>
                                                                <span>5 October 11:46 AM</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='activites_info_inner'>
                                                            <div className='activites_icon_wrap'>
                                                                <img src={user_settings_icon} alt="icon" />
                                                            </div>
                                                            <div className='activites_dec'>
                                                                <h3>Leslie Alexander updated her <Link to="/">Account Type</Link></h3>
                                                                <span>5 October 11:46 AM</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='activites_info_inner'>
                                                            <div className='activites_icon_wrap'>
                                                                <img src={user_settings_icon} alt="icon" />
                                                            </div>
                                                            <div className='activites_dec'>
                                                                <h3>John Smith removed Mark Fleix from <Link to="/">Family member</Link></h3>
                                                                <span>5 October 11:46 AM</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='activites_info_inner'>
                                                            <div className='activites_icon_wrap'>
                                                                <img src={user_settings_icon} alt="icon" />
                                                            </div>
                                                            <div className='activites_dec'>
                                                                <h3>Leslie Alexander updated her <Link to="/">Account Type</Link></h3>
                                                                <span>5 October 11:46 AM</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='activites_info_inner'>
                                                            <div className='activites_icon_wrap'>
                                                                <img src={user_settings_icon} alt="icon" />
                                                            </div>
                                                            <div className='activites_dec'>
                                                                <h3>John Smith removed Mark Fleix from <Link to="/">Family member</Link></h3>
                                                                <span>5 October 11:46 AM</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='activites_info_inner'>
                                                            <div className='activites_icon_wrap'>
                                                                <img src={user_settings_icon} alt="icon" />
                                                            </div>
                                                            <div className='activites_dec'>
                                                                <h3>Leslie Alexander updated her <Link to="/">Account Type</Link></h3>
                                                                <span>5 October 11:46 AM</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className='activites_info_inner'>
                                                            <div className='activites_icon_wrap'>
                                                                <img src={user_settings_icon} alt="icon" />
                                                            </div>
                                                            <div className='activites_dec'>
                                                                <h3>John Smith removed Mark Fleix from <Link to="/">Family member</Link></h3>
                                                                <span>5 October 11:46 AM</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className='famaily_info_wrap recevied_wrap animated animatedFadeInUp fadeInUp'>
                                            <div className='activites_title_wrap'>
                                                <div className='common_main_title'>
                                                    <h2>Invitations</h2>
                                                </div>
                                            </div>
                                            <Invitations />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 famaily_inforamtions'>
                            <div className='famaily_info_wrap famaily_info_wrap_first'>
                                <div className='activites_title_wrap'>
                                    <div className='common_main_title'>
                                        <h2>Famaily</h2>
                                    </div>
                                    <div className='d-flex align-items-center serch_wrap'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" /></svg>
                                        <button type='button' className='edit_btn view_btn'>Add New</button>
                                    </div>
                                </div>

                                <Famaily />
                            </div>

                            <div className='famaily_info_wrap recevied_wrap animated animatedFadeInUp fadeInUp'>
                                <div className='activites_title_wrap'>
                                    <div className='common_main_title'>
                                        <h2>Invitations</h2>
                                    </div>
                                </div>
                                <Invitations />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Home