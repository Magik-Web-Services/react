import React from 'react'

const Dropdown = ({ submenus }) => {
    return (
        <ul className="dropdown absolute z-10 bg-[#0393dd] w-max">
            {submenus.map((submenu, index) => (
                <li key={index} className="menu-items p-2 text-white">
                    <a href={submenu.url}>{submenu.title}</a>
                </li>
            ))}
        </ul>
    )
}

export default Dropdown
