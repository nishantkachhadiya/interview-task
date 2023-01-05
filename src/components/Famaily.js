import React from 'react'
import person_1 from '../assets/img/person_1.jpg'
import person_2 from '../assets/img/person_2.jpg'
import person_3 from '../assets/img/person_3.jpg'
import person_4 from '../assets/img/person_4.jpg'
import person_5 from '../assets/img/person_5.jpg'

const Famaily = () => {
    return (
        <div className='admin_wrapper'>
            <ul>
                <li>
                    <div className='admin_list_wrap orage_bg'>
                        <div className='admin_profile_img_wrap'>
                            <div className='admin_profile_img'>
                                <img src={person_1} alt="famaily person" />
                            </div>
                            <p>John Smith</p>
                        </div>
                        <div className='member_wrap'>
                            <button type='button' className='admin_btn'>
                                ADMIN
                            </button>
                            <button type='button' className='admin_profile_btn'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 14v8H4a8 8 0 0 1 8-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm2.595 5.812a3.51 3.51 0 0 1 0-1.623l-.992-.573 1-1.732.992.573A3.496 3.496 0 0 1 17 14.645V13.5h2v1.145c.532.158 1.012.44 1.405.812l.992-.573 1 1.732-.992.573a3.51 3.51 0 0 1 0 1.622l.992.573-1 1.732-.992-.573a3.496 3.496 0 0 1-1.405.812V22.5h-2v-1.145a3.496 3.496 0 0 1-1.405-.812l-.992.573-1-1.732.992-.572zM18 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" /></svg>
                            </button>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='admin_list_wrap'>
                        <div className='admin_profile_img_wrap'>
                            <div className='admin_profile_img'>
                                <img src={person_3} alt="famaily person" />
                            </div>
                            <p>John Smith</p>
                        </div>
                        <div className='member_wrap'>
                            <button type='button' className='member_btn'>MEMBER</button>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='admin_list_wrap'>
                        <div className='admin_profile_img_wrap'>
                            <div className='admin_profile_img'>
                                <img src={person_5} alt="famaily person" />
                            </div>
                            <p>John Smith</p>
                        </div>
                        <div className='member_wrap'>
                            <button type='button' className='member_btn'>MEMBER</button>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='admin_list_wrap'>
                        <div className='admin_profile_img_wrap'>
                            <div className='admin_profile_img'>
                                <img src={person_2} alt="famaily person" />
                            </div>
                            <p>John Smith</p>
                        </div>
                        <div className='member_wrap'>
                            <button type='button' className='member_btn'>MEMBER</button>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='admin_list_wrap'>
                        <div className='admin_profile_img_wrap'>
                            <div className='admin_profile_img'>
                                <img src={person_4} alt="famaily person" />
                            </div>
                            <p>John Smith</p>
                        </div>
                        <div className='member_wrap'>
                            <button type='button' className='member_btn'>MEMBER</button>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='admin_list_wrap'>
                        <div className='admin_profile_img_wrap'>
                            <div className='admin_profile_img'>
                                <img src={person_5} alt="famaily person" />
                            </div>
                            <p>John Smith</p>
                        </div>
                        <div className='member_wrap'>
                            <button type='button' className='member_btn'>MEMBER</button>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='admin_list_wrap'>
                        <div className='admin_profile_img_wrap'>
                            <div className='admin_profile_img'>
                                <img src={person_3} alt="famaily person" />
                            </div>
                            <p>John Smith</p>
                        </div>
                        <div className='member_wrap'>
                            <button type='button' className='member_btn'>MEMBER</button>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='admin_list_wrap'>
                        <div className='admin_profile_img_wrap'>
                            <div className='admin_profile_img'>
                                <img src={person_1} alt="famaily person" />
                            </div>
                            <p>John Smith</p>
                        </div>
                        <div className='member_wrap'>
                            <button type='button' className='member_btn'>MEMBER</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Famaily