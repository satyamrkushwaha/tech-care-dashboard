import React, { useEffect } from 'react';
// import Chart from 'chart.js/auto';

const PatientDetails = ({ patient }) => {
//   useEffect(() => {
//     if (patient && patient.diagnosis_history) {
//       renderBloodPressureChart(patient.diagnosis_history);
//     }
//   }, [patient]);

//   const renderBloodPressureChart = (diagnosisHistory) => {
//     const ctx = document.getElementById('blood-pressure-chart').getContext('2d');
//     const months = diagnosisHistory.map(d => `${d.month} ${d.year}`);
//     const systolicData = diagnosisHistory.map(d => d.blood_pressure.systolic.value);
//     const diastolicData = diagnosisHistory.map(d => d.blood_pressure.diastolic.value);

//     new Chart(ctx, {
//       type: 'line',
//       data: {
//         labels: months,
//         datasets: [
//           {
//             label: 'Systolic',
//             data: systolicData,
//             borderColor: '#ff6384',
//             fill: false
//           },
//           {
//             label: 'Diastolic',
//             data: diastolicData,
//             borderColor: '#36a2eb',
//             fill: false
//           }
//         ]
//       },
//       options: {
//         responsive: true,
//         scales: {
//           y: {
//             beginAtZero: true
//           }
//         }
//       }
//     });
//   };

  if (!patient) return <div>Select a patient to view details</div>;

  const diagnosis = patient.diagnosis_history[0];

  return (
    <section className="patient-details">
      <div className="patient-info">
        <img src={patient.profile_picture} alt="Profile Picture" />
        <h2>{patient.name}</h2>
        <p>Date Of Birth: {new Date(patient.date_of_birth).toLocaleDateString()}</p>
        <p>Gender: {patient.gender}</p>
        <p>Contact Info: {patient.phone_number}</p>
        <p>Emergency Contacts: {patient.emergency_contact}</p>
      </div>
      <div className="diagnosis-history">
        <h3>Diagnosis History</h3>
        <canvas id="blood-pressure-chart"></canvas>
        <p>Systolic: {diagnosis.blood_pressure.systolic.value} - {diagnosis.blood_pressure.systolic.levels}</p>
        <p>Diastolic: {diagnosis.blood_pressure.diastolic.value} - {diagnosis.blood_pressure.diastolic.levels}</p>
        <div className="other-diagnostics">
          <p>Respiratory Rate: {diagnosis.respiratory_rate.value} bpm - {diagnosis.respiratory_rate.levels}</p>
          <p>Temperature: {diagnosis.temperature.value} °F - {diagnosis.temperature.levels}</p>
          <p>Heart Rate: {diagnosis.heart_rate.value} bpm - {diagnosis.heart_rate.levels}</p>
        </div>
      </div>
    </section>
  );
}; 

export default PatientDetails;
