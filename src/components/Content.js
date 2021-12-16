import React from 'react'
import Charts1 from './charts/Charts1';
import Charts2 from './charts/Charts2';
import Charts3 from './charts/Charts3';
import Charts4 from './charts/charts4';
import Charts5 from './charts/charts5';
import Charts6 from './charts/charts6';


function Content() {
    return (
        <div className='container mx-0' style={{ maxWidth: "100%" }}>
            Fit Owerview
            <div className="row ">

                <div className="col-md-12 content-col "><Charts1 /></div>

            </div>
            <div className="row content-row">
                <div className="col-md-4 content-col"><Charts2 /></div>
                <div className="col-md-4 content-col "><Charts3 /></div>
                <div className="col-md-4 content-col"><Charts4 /></div>
            </div>
            <div className="row content-row">
                <div className="col-md-8 content-col"><Charts5 /></div>
                <div className="col-md-4 content-col"><Charts6 /></div>
            </div>
        </div>
    )
}

export default Content;

//