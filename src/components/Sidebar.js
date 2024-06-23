import React from 'react';

const Sidebar = ({ patients, onSelectPatient }) => {
  return (
    <aside className="sidebar">
      <div className="patients-list">
        <ul>
          {patients.map((patient, index) => (
            <li key={index} className="patient" onClick={() => onSelectPatient(patient)}>
              <img src={patient.profile_picture} alt={patient.name} />
              <div>
                <span>{patient.name}</span>
                <span>{patient.gender}, {patient.age}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
