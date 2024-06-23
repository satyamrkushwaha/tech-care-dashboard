import React from 'react'
import DoctorImg from '../asset/images/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png'

function ProfileCard() {
    return (
        <div className="patient-card">
            <img src="path/to/profile.jpg" alt="Jessica Taylor" className="profile-pic" />
            <h2 className="patient-name">Jessica Taylor</h2>
            <ul className="patient-info">
                <li>
                <img src={DoctorImg} alt="Dr. Jose Simmons" className="profile-pic" />
                    <span>Date Of Birth</span>
                    <strong>August 23, 1996</strong>
                </li>
                <li>
                <img src={DoctorImg} alt="Dr. Jose Simmons" className="profile-pic" />
                    <span>Gender</span>
                    <strong>Female</strong>
                </li>
                <li>
                <img src={DoctorImg} alt="Dr. Jose Simmons" className="profile-pic" />
                    <span>Contact Info.</span>
                    <strong>(415) 555-1234</strong>
                </li>
                <li>
                <img src={DoctorImg} alt="Dr. Jose Simmons" className="profile-pic" />
                    <span>Emergency Contacts</span>
                    <strong>(415) 555-5678</strong>
                </li>
                <li>
                <img src={DoctorImg} alt="Dr. Jose Simmons" className="profile-pic" />
                    <span>Insurance Provider</span>
                    <strong>Sunrise Health Assurance</strong>
                </li>
            </ul>
            <button className="info-button">Show All Information</button>
        </div>
    )
}

export default ProfileCard