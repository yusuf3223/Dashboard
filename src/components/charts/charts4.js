import React from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
    labels: [
        'Fat',
        'Protein',
        'Carbs'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
            'rgb(126, 202, 245)',
            'rgb(54, 162, 235)',
            'rgb(214, 243, 209)'
        ],
        hoverOffset: 4
    }]
};


export default function Charts4() {
    return (
        <div className='card'>
            <div className='card-header text-center'>
                Today colories averrage
            </div>
            <div className='card-body'>
                <div >
                    <Pie data={data} options={{
                        responsive: true,
                        maintainAspectRatio: false
                    }} />
                </div>


            </div>

        </div>
    )
}
