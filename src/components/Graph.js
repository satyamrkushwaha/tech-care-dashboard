import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Graph = ({ diagnosis_history }) => {
    const [timeRange, setTimeRange] = useState('all');
    const [filteredHistory, setFilteredHistory] = useState([]);

    const monthMap = {
        January: 0,
        February: 1,
        March: 2,
        April: 3,
        May: 4,
        June: 5,
        July: 6,
        August: 7,
        September: 8,
        October: 9,
        November: 10,
        December: 11
    };

    useEffect(() => {
        const now = new Date();
        let filteredData;

        console.log('Current timeRange:', timeRange);
        console.log('Diagnosis History:', diagnosis_history);

        switch (timeRange) {
            case 'lastmonth':
                filteredData = diagnosis_history.filter(d => {
                    const month = monthMap[d.month];
                    const date = new Date(d.year, month);
                    return (
                        date.getMonth() === now.getMonth() - 1 &&
                        date.getFullYear() === now.getFullYear()
                    );
                });
                break;
            case 'lastquarter':
                filteredData = diagnosis_history.filter(d => {
                    const month = monthMap[d.month];
                    const date = new Date(d.year, month);
                    const threeMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());
                    return date >= threeMonthsAgo;
                });
                break;
            case 'last6months':
                filteredData = diagnosis_history.filter(d => {
                    const month = monthMap[d.month];
                    const date = new Date(d.year, month);
                    const sixMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 6, now.getDate());
                    return date >= sixMonthsAgo;
                });
                break;
            case 'all':
                filteredData = diagnosis_history;
                break;
            default:
                filteredData = diagnosis_history;
                break;
        }

        console.log('Filtered Data:', filteredData);
        setFilteredHistory(filteredData);
    }, [timeRange, diagnosis_history]);

    const months = filteredHistory.map(d => `${d.month.slice(0, 3)}, ${d.year}`);
    const systolicData = filteredHistory.map(d => d.blood_pressure.systolic.value);
    const diastolicData = filteredHistory.map(d => d.blood_pressure.diastolic.value);

    const data = {
        labels: months,
        datasets: [
            {
                label: 'Systolic',
                data: systolicData,
                borderColor: 'rgba(194, 110, 180, 1)',
                backgroundColor: 'rgba(230, 111, 210, 1)',
                fill: false,
                tension: 0.3
            },
            {
                label: 'Diastolic',
                data: diastolicData,
                borderColor: 'rgba(126, 108, 171, 1)',
                backgroundColor: 'rgba(140, 111, 230, 1)',
                fill: false,
                tension: 0.3
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    boxWidth: 10,
                    boxHeight: 10,
                },
            },
        },
        scales: {
            y: {
                beginAtZero: false,
                min: 60,
                max: 180,
            }
        }
    };

    return (
        <div>
            <div className="graph-title-dropdown" >
                <h2>Blood Pressure</h2>
                <select onChange={e => setTimeRange(e.target.value)} value={timeRange}>
                    <option value="lastmonth">Last Month</option>
                    <option value="lastquarter">Last Quarter</option>
                    <option value="last6months">Last 6 Months</option>
                    <option value="all">All</option>
                </select>
                </div>

            <Line data={data} options={options} />
        </div>
    );
};

export default Graph;
