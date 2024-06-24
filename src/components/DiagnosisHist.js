import React from 'react'
import HealthMetricCard from './HealthMetricCard'
import HeartRateIcon from '../asset/icons/HeartBPM.svg'
import RespiratoryRateIcon from '../asset/icons/respiratory-rate.svg'
import TempIcon from '../asset/icons/temperature.svg'
import Graph from './Graph'


function DiagnosisHist() {
    return (
        <div className='diagnosis-hist-container'>
            <div className='graph-container'>
                <Graph />
            </div>
            <div className='health-metric-cards-container'>
                <HealthMetricCard icon={RespiratoryRateIcon} title="Respiratory Rate" value="20 bpm" status="Normal" bgColor={'rgba(224, 243, 250, 1)'} />
                <HealthMetricCard icon={TempIcon} title="Temperature" value="98.6°F" status="Normal" bgColor={'rgba(255, 230, 233, 1)'} />
                <HealthMetricCard icon={HeartRateIcon} title="Heart Rate" value="98.6°F" status="Lower than Average" bgColor={'rgba(255, 230, 241, 1)'} />
            </div>
         
        </div>
    )
}

export default DiagnosisHist