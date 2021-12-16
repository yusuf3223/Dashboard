import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: [
        'Rest',
        'Activity',
    ],
    datasets: [{
        label: '',
        data: [300, 100],
        backgroundColor: [
            'rgb(54, 77, 245)',
            'rgb(100, 119, 245)',

        ],
        hoverOffset: 4
    }]
};

export default function Charts2() {
    return (
        <div className='card'>
            <div className='card-header text-center'>
                Today activity
            </div>
            <div className='card-body'>
                <Doughnut data={data}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false
                    }} />
            </div>

        </div>
    )
}
