import React from 'react';
import './styles.css';
import Navbar from './components/Navbar';
import MainLayout from './layout/mainLayout';
const App = () => {
  return (
    <div className="main-container">
      <Navbar />
      <main className="main-subcontainer">
        <MainLayout />
      </main>
    </div>
  );
};

export default App;
