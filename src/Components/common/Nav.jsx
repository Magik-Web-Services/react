import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import axios from 'axios';
import Dropdown from './Dropdown';

const Nav = () => {
    const [fHeader, setFHeader] = useState([]);
    const [logo, setLogo] = useState('');
    // const [loading, setLoading] = useState('false');

    useEffect(() => {
        // setLoading('false')
        // axios fetch Header
        const url3 = `${process.env.REACT_APP_URL}header_menu`;
        axios.get(url3).then(res => {
            let navdata = res.data;
            mainHeaderFunc(navdata)
            // setLoading('true')
        }).catch(err => {
            console.log('err', err.message);
        })

        // axios fetch Header
        const url4 = `${process.env.REACT_APP_URL}media?search=empireclinics-logo.png`;
        axios.get(url4).then(res => {
            let imgs = res.data;
            setLogo(imgs)
        })
    }, [])

    // const mainHeaderFunc = (navdata) => {
    //     const data = [];
    //     for (let i = 0; i < navdata.length; i++) {
    //         if (navdata[i].menu_item_parent === '0') {
    //             data.push(navdata[i]);
    //         }
    //     }
    //     setFHeader(data)
    // };


    const mainHeaderFunc = (navdata) => {
        const data = [];
        for (let i = 0; i < navdata.length; i++) {
            // Get Headings
            if (navdata[i].menu_item_parent === '0') {
                let heading = navdata[i]
                const datasubmenu = [];
                for (let j = 0; j < navdata.length; j++) {
                    if (navdata[i].ID === parseInt(navdata[j].menu_item_parent)) {
                        datasubmenu.push(navdata[j]);
                    }
                }
                heading['submenu'] = datasubmenu;
                data.push(heading);
            }
        }
        setFHeader(data)
    };

    // console.log(fHeader);
    return (
        <header className="text-gray-600 body-font">
            <div className="mx-auto flex justify-around align-center h-[90px]">
                <NavLink to='/' className="flex title-font font-medium items-center w-fit text-gray-900 pt-[20px]">
                    {typeof (logo) === 'object' ?
                        <img src={logo[0]['source_url']} alt="" className='w-auto h-36 text-white p-2' /> : <span className="mt-3 text-3xl font-bold">Empire Clinics</span>
                    }
                </NavLink>
                {/* how to  */}
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <ul className='flex relative'>
                    {
                        fHeader ?
                            fHeader.map(nav => {
                                return (
                                    <li className='navLink' key={nav.ID}>
                                        <NavLink to={nav.url !== '#' ? nav.url.replace('https://empireclinics.com/', '') : '/services'}
                                            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "mr-5 text-[#0393dd] flex justify-center items-center gap-1" : "mr-5 hover:text-[#0393dd] lex justify-center items-center gap-1"}
                                        >{nav.title} {nav.submenu.length > 0 ? <i className="text-xs menu-icon fa fa-angle-down pt-1"/> : '' }</NavLink>
                                        {nav.submenu.length > 0 ? <Dropdown submenus={nav.submenu} /> : ''}
                                    </li>
                                )
                            })
                            : ''
                    }
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Nav