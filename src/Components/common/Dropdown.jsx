import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({ submenus }) => {
    return (
        <ul className="dropdown absolute z-10 bg-[#0393dd] w-max">
            {submenus.map((submenu, index) => (
                <li key={index} className="menu-items p-2 text-white">
                    <Link to={ submenu.url.replace('https://empireclinics.com/', '')}>{submenu.title}</Link>
                </li>
            ))}
        </ul>
    )
}

export default Dropdown
