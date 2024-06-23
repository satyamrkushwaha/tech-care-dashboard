import React from 'react';
import BrandLogo from '../asset/icons/TestLogo.svg'
import DoctorImg from '../asset/images/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png'
import SettingIcon from '../asset/icons/settings_FILL0_wght300_GRAD0_opsz24.svg'
import MoreIcon from '../asset/icons/more_vert_FILL0_wght300_GRAD0_opsz24.svg'
import OverviewIcon from '../asset/icons/home_FILL0_wght300_GRAD0_opsz24.svg'
import PatientsIcon from '../asset/icons/group_FILL0_wght300_GRAD0_opsz24.svg'
import ScheduleIcon from '../asset/icons/calendar_today_FILL0_wght300_GRAD0_opsz24.svg'
import MsgIcon from '../asset/icons/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg'
import TransactionIcon from '../asset/icons/credit_card_FILL0_wght300_GRAD0_opsz24.svg'

const Navbar = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={BrandLogo} alt="Tech.Care" />
            </div>
            <nav className="nav">
                <ul>
                    <li className="nav-item"><img src={OverviewIcon} className='mav-item-icon' alt="overview" />Overview</li>
                    <li className="nav-item active"><img src={PatientsIcon} className='mav-item-icon' alt="patients"/>Patients</li>
                    <li className="nav-item"><img src={ScheduleIcon} className='mav-item-icon' alt="schedule"/>Schedule</li>
                    <li className="nav-item"><img src={MsgIcon} className='mav-item-icon' alt="message" />Message</li>
                    <li className="nav-item"><img src={TransactionIcon} className='mav-item-icon' alt="transaction" />Transactions</li>
                </ul>
            </nav>
            <div className="profile">
                <img src={DoctorImg} alt="Dr. Jose Simmons" className="profile-pic" />
                <div className="profile-info">
                    <span className="profile-name">Dr. Jose Simmons</span>
                    <span className="profile-title">General Practitioner</span>
                </div>
                <div className="profile-divider"></div>
                <div className="settings-icon">
                    <img src={SettingIcon} alt="settings" className="settings" />
                    <img src={MoreIcon} alt="more" className="more" />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
