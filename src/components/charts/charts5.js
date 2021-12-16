import React from 'react'
import { Bar } from 'react-chartjs-2'



const data = {
    labels: ["1", "6", "11", "16", "21", "26", "29"],
    datasets: [{
        label: 'sleep',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
            'rgb(255, 99, 132)',
        ],
        borderWidth: 1
    }]
};

function Charts5() {
    return (
        <div className="card text-white" >
            <div className="card-header">

                <div className="d-flex">
                    <div className="me-auto">Sleep for period</div>
                    <div className='a'>Year</div>
                    <div className='a text-info'>Month <hr className='m-0' /></div>
                    <div className='a'>Week</div>
                </div>

            </div>
            <div className="card-body p-0 d-flex">
                <div style={{ width: "100%" }}>
                    <Bar data={data}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false
                        }} />
                </div>

            </div>
        </div>
    )
}

export default Charts5;



