import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

const Nav = () => {
    const [fHeader, setFHeader] = useState([]);
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
            if (navdata[i].menu_item_parent === '0') {
                data.push(navdata[i]);
            }
        }
        setFHeader(data)
    };
    return (
        <header className="text-gray-600 body-font">
            <div className="mx-auto flex p-5 justify-between align-center">
                <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-3xl font-bold">Empire Clinics</span>
                </Link>

                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    {
                        loading === 'true' ?
                            fHeader.map(nav => {
                                return (
                                    <Link key={nav.ID} to={nav.url} className="mr-5 hover:text-gray-900">{nav.title}</Link>
                                )
                            })
                            : ''
                    }
                </nav>
            </div>
        </header>
    )
}

export default Nav
