import React from 'react'
import { Line } from 'react-chartjs-2'





const data = {
    labels: ['5.00', '11.00', '13.00', '16.00', '20.00', '23.00'],
    datasets: [
        {
            label: 'Dataset 1',
            data: [55, 80, 60, 84, 70, 56],
            borderColor: 'rgba(140,80,255,1)',
            backgroundColor: 'rgba(140,80,255,0.2)',
        },
        {
            label: 'Dataset 2',
            data: [57, 60, 55, 56, 84, 55],
            borderColor: 'rgba(140,70,245,1)',
            backgroundColor: 'rgba(140,80,255,0.2)',
        }
    ]
};


function charts6() {
    return (
        <div className='card'>
            <div className='card-header text-center'>
                Today colories averrage
            </div>
            <div className='card-body'>
                <div style={{ width: "100%", height: "118px" }}>
                    <Line data={data}


                        options={{
                            responsive: true,
                            maintainAspectRatio: false
                        }} />
                </div>

                <div>

                </div>


            </div>
        </div>
    )
}


export default charts6;