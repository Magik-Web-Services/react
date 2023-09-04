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
            setFHeader(res.data);
            navbar(res.data)
            setLoading('true')
        }).catch(err => {
            console.log('err', err.message);
        }
        )
    }, [])

    function navbar(res) {
        // console.log(res[0]);
        for (let i = 0; i < res.length; i++) {
            if (res.post_type === 0) {
                
            }
            console.log(res[i]);
        }
    }
    return (
        <header className="text-gray-600 body-font">
            <div className="container flex flex-wrap p-5 flex-col">
                <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-3xl font-bold">Empire Clinics</span>
                </Link>

                {
                    loading === 'true' ?
                        fHeader.map(nav => {
                            return (
                                <nav key={nav.ID} className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                                    <Link to='/' className="mr-5 hover:text-gray-900">{nav.title}</Link>
                                </nav>
                            )
                        })
                        : ''
                }

                {/* <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link to='/' className="mr-5 hover:text-gray-900">Blogs</Link>
                </nav> */}
            </div>
        </header>
    )
}

export default Nav
