import React from 'react'
import SubFormFields from './Extra/SubFormFields'
import { FormControl } from '@mui/material';

const Appointment = () => {
    return (
        <section className="text-gray-600 body-font bg-[#383f4d]">
            <div className="container mx-auto flex px-5 py-24 flex-row-reverse items-center">

                <div className="lg:w-1/3 md:w-1/2 rounded-lg p-8 flex flex-col items-center md:ml-auto w-full mt-10 md:mt-0">
                    <h2 className="text-white text-3xl text-center font-medium title-font mb-3">SCHEDULE AN APPOINTMENT</h2>

                    <FormControl>
                        <SubFormFields firstField="First Name" firstFieldtype="text" secondField="Last Name" secondFieldtype="text" />
                        <SubFormFields firstField="Email Address" firstFieldtype="email" secondField="Phone Number" secondFieldtype="phone" />
                        <SubFormFields firstField="" firstFieldtype="date" secondField="Phone Number" secondFieldtype="phone" />
                    </FormControl>


                    {/* <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                    <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p> */}
                </div>

                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="rounded-full object-cover object-center" alt="hero" src="https://dummyimage.com/400" />
                </div>
            </div>
        </section>
    )
}

export default Appointment
