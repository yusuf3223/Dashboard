import React from 'react'
import { MdDateRange } from 'react-icons/md'
import { Line } from 'react-chartjs-2'



const data = {
    labels: ['5.00', '11.00', '13.00', '16.00', '20.00', '23.00'],
    datasets: [
        {
            label: 'kcal',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(140,80,255,0.2)',
            borderColor: 'rgba(140,80,255,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(140,80,255,1)',
            pointBackgroundColor: '#fff',
            pointHoverRadius: 5,
            pointBorderWidth: 1,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,

            data: [55, 80, 60, 84, 70, 56]
        }
    ]
};



function Charts1() {
    return (
        <div className="card text-white" >
            <div className="card-header">

                <div className="d-flex">
                    <div className="me-auto">Physical activity for period</div>
                    <div className='a'>Year</div>
                    <div className='a'>Month</div>
                    <div className='a'>Week</div>
                    <div className='a text-info'>Day <hr className='m-0' /></div>
                </div>

            </div>
            <div className="card-body p-0 d-flex">
                <div className='div-date p-2'>
                    <MdDateRange className='date-icon' /> 14/12/21 <hr className='m-1' />

                    <div className='d-flex justify-content-between text-white opacity-75 px-3 pt-2'>
                        <p>Traning</p>
                        <p>3<font size="1">hrs</font></p>
                    </div>
                    <div className='d-flex justify-content-between text-white opacity-75 px-3 '>
                        <p>Sleep</p>
                        <p>10<font size="1">hrs</font></p>
                    </div>
                    <div className='d-flex justify-content-between text-white opacity-75 px-3 '>
                        <p>Drink Water</p>
                        <p>4<font size="1">itf</font></p>
                    </div>
                    <div className='d-flex justify-content-between text-white opacity-75 px-3 '>
                        <p>Lose Weight</p>
                        <p>200<font size="1">gr</font></p>
                    </div>

                </div>
                <div style={{ width: '100%' }}>

                    <Line data={data}


                        options={{
                            responsive: true,
                            maintainAspectRatio: false
                        }} />
                </div>
            </div>
        </div >
    )
}

export default Charts1;



