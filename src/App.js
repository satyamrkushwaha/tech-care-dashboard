import React from 'react';
import './styles.css';
import Navbar from './components/Navbar';
import MainLayout from './layout/mainLayout';



const App = () => {


  return (
    <div className="main-container">
    <Navbar/>
      <main className="main-subcontainer">
      <MainLayout />
   
 
        {/* <Header />
        {selectedPatient ? (
          <PatientDetails patient={selectedPatient} />
        ) : (
          <p>No patient selected</p>
        )} */}
      </main>
    </div>
  );
};

export default App;
