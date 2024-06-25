import React,{ useState } from 'react';
import MoreHori from '../asset/icons/more_horiz_FILL0_wght300_GRAD0_opsz24.svg'

const Sidebar = ({ patients, onSelectPatient , selectedPatient}) => {

  // const [selectedPatient, setSelectedPatient] = useState(null);

  // const handleSelectPatient = (patient) => {
  //   setSelectedPatient(patient);
  //   onSelectPatient(patient);
  // };

  return (
    <aside className="sidebar">
     <h2>Patients</h2>
      <div className="patients-list">
        <ul>
          {patients.map((patient, index) => (
            <li key={index} className="patient" onClick={() => onSelectPatient(patient)} style={{ cursor: 'pointer', backgroundColor: selectedPatient === patient ? 'rgba(216, 252, 247, 1)' : 'transparent' }}>
              <div className="patient-pic-info">
                <img src={patient.profile_picture} alt={patient.name} />
                <div className="patient-detail">
                  <span className="patient-name">{patient.name}</span>
                  <span className="info">{patient.gender}, {patient.age}</span>
                </div>
              </div>
              <img src={MoreHori} alt='MoreVertical' style={{ cursor: 'pointer', width: '20px', height: '20px' }} />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
