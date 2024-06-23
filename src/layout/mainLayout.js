import React, { useState, useEffect } from 'react'
import ProfileCard from '../components/ProfileCard'
import Sidebar from '../components/Sidebar';
import PatientDetails from '../components/PatientDetails';
import DiagnosisHist from '../components/DiagnosisHist';



function MainLayout() {
    const [patients, setPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPatients = async () => {
            const url = 'https://fedskillstest.coalitiontechnologies.workers.dev';
            const username = 'coalition';
            const password = 'skills-test';

            try {
                const response = await fetch(url, {
                    headers: {
                        Authorization: 'Basic ' + btoa(username + ':' + password),
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const data = await response.json();
                setPatients(data);
                if (data.length > 0) {
                    setSelectedPatient(data[0]);

                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };


        fetchPatients();
    }, []);

    if (loading) {
        return <div className="container">Loading...</div>; // Display a loading indicator while fetching data
    }

    if (error) {
        return <div className="container">Error: {error}</div>; // Display an error message if fetch fails
    }
    return (
        <div className='main-layout-container'>

            {/* <Sidebar patients={patients} onSelectPatient={setSelectedPatient} /> */}
            <DiagnosisHist />
            <ProfileCard />
        </div>
    )
}

export default MainLayout