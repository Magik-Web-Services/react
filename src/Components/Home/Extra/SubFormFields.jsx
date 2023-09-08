import React from 'react'

const SubFormFields = (props) => {
    return (
        <div class="flex flex-wrap m-x-2 mt-5">
            <div className="pr-2 w-1/2">
                <div className="relative">
                    <label for="name" className="leading-7 text-sm text-gray-600"></label>
                    <input type="text" id="name" name="name" placeholder={props.firstField} className="w-full h-[40px] pl-2 bg-[#444e60] text-[#384050] border-[#16181d] bg-opacity-50 rounded text-base outline-none leading-8 transition-colors duration-200 ease-in-out" />
                </div>
            </div>
            <div className="w-1/2">
                <div className="relative">
                    <label for="email" className="leading-7 text-sm text-gray-600"></label>
                    <input type="email" id="email" name="email" placeholder={props.secondField} className="w-full h-[40px] pl-2 bg-[#444e60] border-[#16181d] bg-opacity-50 rounded text-base outline-none text-[#384050] leading-8 transition-colors duration-200 ease-in-out" />
                </div>
            </div>
        </div>
    )
}

export default SubFormFields
