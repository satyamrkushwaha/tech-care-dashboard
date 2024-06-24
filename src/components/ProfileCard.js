import React from 'react'
import BirthIcon from '../asset/icons/BirthIcon.svg'
import FemaleIcon from '../asset/icons/FemaleIcon.svg'
import MaleIcon from '../asset/icons/MaleIcon.svg'
import PhoneIcon from '../asset/icons/PhoneIcon.svg'
import InsuranceIcon from '../asset/icons/InsuranceIcon.svg'
import ProfilePic from '../asset/images/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png'

function ProfileCard() {
    return (
        <div className=" profile-card-container ">
            <img src={ProfilePic} alt="Jessica Taylor" className="profile-pic" />
            <h2 className="patient-name">Jessica Taylor</h2>
            <ul className="patient-info">
                <li>
                    <img src={BirthIcon} alt="Dr. Jose Simmons" className="profile-card-icon" />
                    <div className='main-patient-info'>
                        <span>Date Of Birth</span>
                        <strong>August 23, 1996</strong>
                    </div>
                </li>
                <li>
                    <img src={FemaleIcon} alt="Dr. Jose Simmons" className="profile-card-icon" />
                    <div className='main-patient-info'>
                        <span>Gender</span>
                        <strong>Female</strong>

                    </div>
                </li>
                <li>
                    <img src={PhoneIcon} alt="Dr. Jose Simmons" className="profile-card-icon" />
                    <div className='main-patient-info'>
                        <span>Contact Info.</span>
                        <strong>(415) 555-1234</strong>
                    </div>
                </li>
                <li>
                    <img src={PhoneIcon} alt="Dr. Jose Simmons" className="profile-card-icon" />
                    <div className='main-patient-info'>
                        <span>Emergency Contacts</span>
                        <strong>(415) 555-5678</strong>
                    </div>
                </li>
                <li>
                    <img src={InsuranceIcon} alt="Dr. Jose Simmons" className="profile-card-icon" />
                    <div className='main-patient-info'>
                        <span>Insurance Provider</span>
                        <strong>Sunrise Health Assurance</strong>
                    </div>
                </li>
            </ul>
            <button className="info-button">Show All Information</button>
        </div>
    )
}

export default ProfileCard