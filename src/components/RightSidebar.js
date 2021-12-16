import React from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { MdOutlineExitToApp } from 'react-icons/md'
import image from "../images/1.jpeg"

export default function RightSidebar() {
    return (
        <div className='rightSidebar pt-2 px-0'>
            <div className='d-flex justify-content-between' style={{ paddingRight: "10px" }}>
                <IoIosNotificationsOutline style={{ fontSize: '20px' }} />
                <MdOutlineExitToApp style={{ fontSize: '20px' }} />

            </div>
            <div className="text-center ">
                <img src={image} className='rounded-circle' />
                <p>Joseph El Martinez</p>
                <div className='d-flex justify-content-center'>
                    <div className='px-2' style={{ color: "#1cb2e0" }}>
                        <p>190 <font size="1">cm</font> <br /> <font size="1" color="white">Height</font> </p>

                    </div>
                    <div style={{ borderLeft: "1px solid #1cb2e0", height: "20px" }}></div>
                    <div className='px-2' style={{ color: "#1cb2e0" }}>
                        <p>85 <font size="1">kg</font> <br /> <font size="1" color="white">Weight</font> </p>
                    </div>
                    <div style={{ borderLeft: "1px solid #1cb2e0", height: "20px" }}></div>
                    <div className='px-2' style={{ color: "#1cb2e0" }}>
                        <p>24<font size="1">y.o.</font> <br /> <font size="1" color="white">Age</font> </p>
                    </div>
                </div>
            </div>

            <div className='card'>
                <div className='card-header'>
                    Your monthyly goals
                </div>
                <div className='card-body pt-2' style={{ backgroundColor: "#2f556e" }}>
                    <div className='d-flex justify-content-between'>
                        <p>Sleep</p>
                        <p style={{ opacity: "0.5", paddingRight: "15px" }}>105/240<font size="1">hrs</font></p>
                    </div>
                    <div className='d-flex'>
                        <div style={{ width: "60px", height: "10px", backgroundColor: "#8C50FF" }}></div>
                        <div style={{ width: "120px", height: "10px", border: "1px #8C50FF solid" }}></div>
                    </div>


                    <div className='d-flex justify-content-between mt-4'>
                        <p>Drink water</p>
                        <p style={{ opacity: "0.5", paddingRight: "15px" }}>120/160<font size="1">ltr</font></p>
                    </div>
                    <div className='d-flex'>
                        <div style={{ width: "120px", height: "10px", backgroundColor: "#8C50FF" }}></div>
                        <div style={{ width: "60px", height: "10px", border: "1px #8C50FF solid" }}></div>
                    </div>

                    <div className='d-flex justify-content-between mt-4'>
                        <p>Run</p>
                        <p style={{ opacity: "0.5", paddingRight: "15px" }}>28/80<font size="1">km</font></p>
                    </div>
                    <div className='d-flex'>
                        <div style={{ width: "50px", height: "10px", backgroundColor: "#8C50FF" }}></div>
                        <div style={{ width: "130px", height: "10px", border: "1px #8C50FF solid" }}></div>
                    </div>

                    <div className='d-flex justify-content-between mt-4'>
                        <p>Lose weight</p>
                        <p style={{ opacity: "0.5", paddingRight: "15px" }}>4,5/5<font size="1">kg</font></p>
                    </div>
                    <div className='d-flex'>
                        <div style={{ width: "150px", height: "10px", backgroundColor: "#8C50FF" }}></div>
                        <div style={{ width: "30px", height: "10px", border: "1px #8C50FF solid" }}></div>
                    </div>
                    <br />
                    <br />
                    <div>
                        <p style={{ lineHeight: "20px" }}>
                            <div className='d-flex justify-content-between'>
                                <p>Task</p>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />

                                </div>
                            </div>
                            <font color="#1cb2e0" >Runninh</font>
                            <p style={{ fontSize: "12px" }}>15/12/21 am</p>
                        </p>

                    </div>


                </div>

            </div>

        </div>
    )
}

//