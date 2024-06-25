import React from 'react';
import DownloadIcon from '../asset/icons/download_FILL0_wght300_GRAD0_opsz24 (1).svg';

const LabResults = ({selectedPatient}) => {

    const {lab_results} = selectedPatient

    return (
        <div className='lab-results-container'>
         <h2>Lab Results</h2>
            <div className="lab-results">
                <ul>
                    {lab_results.map((result, index) => (
                        <li key={index}>
                            <span>{result}</span>
                            <img src={DownloadIcon} alt='MoreVertical' style={{ cursor: 'pointer', width: '20px', height: '20px' }} />
                        </li>
                    ))}
                </ul>
            </div>

        </div>

    );
}

export default LabResults;