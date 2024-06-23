import React from 'react';
import ArrowUp from '../asset/icons/ArrowUp.svg'
import ArrowDown from '../asset/icons/ArrowDown.svg'



const HealthMetricCard = ({ icon, title, value, status, bgColor }) => {
    return (
        <div className="metric-card" style={{ backgroundColor: bgColor}}>
            <div className="metric-icon">
                <img src={icon} alt="Dr. Jose Simmons" className="profile-pic" />
            </div>
            <div className="metric-info">
                <h3>{title}</h3>
                <p className="metric-value">{value}</p>
                <div className="metric-status-container">
                    {status === 'Lower than Average' && <img src={ArrowDown} alt="" className="" />}
                    {status === 'Higher than Average' && <img src={ArrowUp} alt="" className="" />}
                    <p className="metric-status">{status}</p>
                </div>
            </div>
        </div>
    );
};

export default HealthMetricCard;
