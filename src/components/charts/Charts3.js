import React from 'react';
import { Scatter } from 'react-chartjs-2';

const data = {
    datasets: [{
        label: 'Mildly dehydrated',
        data: [{
            x: -10,
            y: 0
        }, {
            x: 0,
            y: 10
        }, {
            x: 10,
            y: 5
        }, {
            x: 0.5,
            y: 5.5
        }],
        backgroundColor: 'rgb(54, 77, 245)'
    }],
};


export default function Charts3() {
    return (
        <div className='card'>
            <div className='card-header text-center'>
                Today hydradion
            </div>
            <div className='card-body'>
                <div style={{ height: "126px" }}>
                    <Scatter data={data} options={{

                        maintainAspectRatio: false
                    }} />
                </div>

                <font color="#EB7C82">Drink some water</font>
            </div>

        </div>
    )
}
