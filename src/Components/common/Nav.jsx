import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

const Nav = () => {
    const [fHeader, setFHeader] = useState([]);
    // const [subHeader, setSubHeader] = useState([]);
    const [loading, setLoading] = useState('false');

    useEffect(() => {
        setLoading('false')
        // axios fetch Header
        const url3 = `${process.env.REACT_APP_URL}header_menu`;
        axios.get(url3).then(res => {
            let navdata = res.data;
            mainHeaderFunc(navdata)
            setLoading('true')
        }).catch(err => {
            console.log('err', err.message);
        }
        )
    }, [])

    const mainHeaderFunc = (navdata) => {
        const data = [];
        for (let i = 0; i < navdata.length; i++) {
            // Get Headings
            if (navdata[i].menu_item_parent === '0') {
                let heading = navdata[i]
                // console.log(heading);
                // Get subHeadings
                const datasubmenu = [];
                for (let j = 0; j < navdata.length; j++) {
                    if (navdata[i].ID == navdata[j].menu_item_parent) {
                        let subHeading = navdata[j]
                        // console.log(subHeading);
                        datasubmenu.push(navdata[j]);
                    }
                }
                let fele =  navdata[i];

                data.push(fele)

            }
        }
        setFHeader(data)
        // setSubHeader(datasubmenu)
    };


    console.log(fHeader);
    return (
        <header className="text-gray-600 body-font">
            <div className="mx-auto flex p-5 justify-between align-center">
                <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-3xl font-bold">Empire Clinics</span>
                </Link>

                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <ul className="menus">
                        {
                            loading === 'true' ?
                                fHeader.map(nav => {
                                    return (
                                        <>
                                            <li className="meu-items">
                                                <Link key={nav.ID} to={nav.url} className="mr-5 hover:text-grey-900 hover:font-medium">{nav.title} </Link>

                                                {/* <ul>
                                                    {subHeader.map(nav2 => {
                                                        if (nav.ID == nav2.menu_item_parent) {
                                                            return (
                                                                <li className="meu-items"> <Link key={nav2.ID} to={nav2.url} className="mr-5 hover:text-grey-900 hover:font-medium">{nav2.title}</Link></li>
                                                            )

                                                        }
                                                    })
                                                    }
                                                </ul> */}

                                            </li>
                                        </>
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
