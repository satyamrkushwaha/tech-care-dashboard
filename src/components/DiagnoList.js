import React from 'react'

const DiagnoList = () => {
    const diagnoses = [
      { problem: "Hypertension", description: "Chronic high blood pressure", status: "Under Observation" },
      { problem: "Type 2 Diabetes", description: "Insulin resistance and elevated blood sugar", status: "Cured" },
      { problem: "Asthma", description: "Recurrent episodes of bronchial constriction", status: "Inactive" },
      { problem: "Hypertension", description: "Chronic high blood pressure", status: "Under Observation" },
      { problem: "Type 2 Diabetes", description: "Insulin resistance and elevated blood sugar", status: "Cured" },
      { problem: "Asthma", description: "Recurrent episodes of bronchial constriction", status: "Inactive" },
    ];
  
    return (
      <div className="diagnostic-list-container">
      <h2>Diagnostic List</h2>
      <div className="diagnostic-list">
        <table>
          <thead>
            <tr>
              <th>Problem/Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {diagnoses.map((diagnosis, index) => (
              <tr key={index}>
                <td>{diagnosis.problem}</td>
                <td>{diagnosis.description}</td>
                <td>{diagnosis.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    );
  }
  
  export default DiagnoList;