import React, { useState, useEffect } from 'react'
import ProfileCard from '../components/ProfileCard'
import Sidebar from '../components/Sidebar';
import DiagnosisHist from '../components/DiagnosisHist';
import DiagnoList from '../components/DiagnoList'
import LabResults from '../components/LabResults';

function MainLayout() {
    const [patients, setPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log(selectedPatient)

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
        return <div className="container">Loading...</div>;
    }

    if (error) {
        return <div className="container">Error: {error}</div>;
    }
    return (
        <div className='main-layout-container'>
            <div className='main-layout-subcontainer'>
                <Sidebar patients={patients} onSelectPatient={setSelectedPatient} selectedPatient={selectedPatient} />
                <div className='hist-list-layout'>
                    <DiagnosisHist selectedPatient={selectedPatient} />
                    <DiagnoList selectedPatient={selectedPatient} />
                </div>
            </div>
            <div className='right-layout-container'>
                <ProfileCard selectedPatient={selectedPatient} />
                <LabResults selectedPatient={selectedPatient} />
            </div>

        </div>
    )
}

export default MainLayout