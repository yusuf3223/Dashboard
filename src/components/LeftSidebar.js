import React from 'react'
import { AiTwotoneHome } from 'react-icons/ai'
import { FcComboChart } from 'react-icons/fc';
import { GoChecklist } from 'react-icons/go';
import { BiRun } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi'

function LeftSidebar() {
    return (
        <div className='leftSidebar'>

            <div className='row-icon '>
                <AiTwotoneHome className='icon' />
            </div>
            <div className='row-icon2 '>
                <FcComboChart className='icon' />
            </div>
            <div className='row-icon'>
                <GoChecklist />
            </div>
            <div className='row-icon'>
                <BiRun />
            </div>
            <div className='row-icon'>
                <FiSettings />
            </div>





        </div>
    )
}

export default LeftSidebar
