import React from 'react'
import BirthIcon from '../asset/icons/BirthIcon.svg'
import FemaleIcon from '../asset/icons/FemaleIcon.svg'
import MaleIcon from '../asset/icons/MaleIcon.svg'
import PhoneIcon from '../asset/icons/PhoneIcon.svg'
import InsuranceIcon from '../asset/icons/InsuranceIcon.svg'

function ProfileCard({selectedPatient}) {

    const {name, gender, date_of_birth, profile_picture, emergency_contact, insurance_type,  phone_number, } = selectedPatient
    
    return (
        <div className=" profile-card-container ">
            <img src={profile_picture} alt="Jessica Taylor" className="profile-pic" />
            <h2 className="patient-name">{name}</h2>
            <ul className="patient-info">
                <li>
                    <img src={BirthIcon} alt="Dr. Jose Simmons" className="profile-card-icon" />
                    <div className='main-patient-info'>
                        <span>Date Of Birth</span>
                        <strong>{date_of_birth}</strong>
                    </div>
                </li>
                <li>
                    <img src={ gender === 'Male' ? MaleIcon : FemaleIcon} alt="Dr. Jose Simmons" className="profile-card-icon" />
                    <div className='main-patient-info'>
                        <span>Gender</span>
                        <strong>{gender}</strong>

                    </div>
                </li>
                <li>
                    <img src={PhoneIcon} alt="Dr. Jose Simmons" className="profile-card-icon" />
                    <div className='main-patient-info'>
                        <span>Contact Info.</span>
                        <strong>{phone_number}</strong>
                    </div>
                </li>
                <li>
                    <img src={PhoneIcon} alt="Dr. Jose Simmons" className="profile-card-icon" />
                    <div className='main-patient-info'>
                        <span>Emergency Contacts</span>
                        <strong>{emergency_contact}</strong>
                    </div>
                </li>
                <li>
                    <img src={InsuranceIcon} alt="Dr. Jose Simmons" className="profile-card-icon" />
                    <div className='main-patient-info'>
                        <span>Insurance Provider</span>
                        <strong>{insurance_type}</strong>
                    </div>
                </li>
            </ul>
            <button className="info-button">Show All Information</button>
        </div>
    )
}

export default ProfileCard