import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Graph = () => {
    const data = {
        labels: ['Oct, 2023', 'Nov, 2023', 'Dec, 2023', 'Jan, 2024', 'Feb, 2024', 'Mar, 2024'],
        datasets: [
            {
                label: 'Systolic',
                data: [120, 130, 150, 140, 130, 160],
                borderColor: 'rgba(194, 110, 180, 1)',
                backgroundColor: 'rgba(230, 111, 210, 1)',
                fill: false,
                tension: 0.1
            },
            {
                label: 'Diastolic',
                data: [100, 80, 70, 75, 65, 78],
                borderColor: 'rgba(126, 108, 171, 1)',
                backgroundColor: 'rgba(140, 111, 230, 1)',
                fill: false,
                tension: 0.1
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
            title: {
                display: true,
                text: 'Blood Pressure (Last 6 months)',
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
        <Line data={data} options={options} />
    );
};

export default Graph;
