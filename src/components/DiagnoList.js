import React from 'react'

const DiagnoList = ({selectedPatient}) => {
    const { diagnostic_list } = selectedPatient;
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
            {diagnostic_list.map((diagnosis, index) => (
              <tr key={index}>
                <td>{diagnosis.name}</td>
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