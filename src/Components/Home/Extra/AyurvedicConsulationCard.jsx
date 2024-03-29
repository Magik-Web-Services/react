import React from 'react'
import { Link } from "react-router-dom";

const AyurvedicConsulationCard = (props) => {
    return (
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow min-h-[318px] dark:bg-gray-800 dark:border-gray-700 w-[25%]">
            <a href="/">
                <h5 className="mb-2 text-[16px] font-bold tracking-tight text-gray-900 dark:text-white text-center">{props.heading}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">{props.para}</p>
            <div className='flex justify-center'>
                <Link to="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default AyurvedicConsulationCard
