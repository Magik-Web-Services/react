import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

const Nav = () => {
    const [fHeader, setFHeader] = useState([]);
    const [logo, setLogo] = useState('');
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
        })

        // axios fetch Header
        const url4 = `${process.env.REACT_APP_URL}media?search=empireclinics-logo.png`;
        axios.get(url4).then(res => {
            let imgs = res.data;
            setLogo(imgs)
        })
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
            <div className="mx-auto flex justify-around align-center">
                <Link to='/' className="flex title-font font-medium items-center w-fit text-gray-900 mb-4 md:mb-0">
                    {typeof(logo) === 'object' ?
                        <img src={logo[0]['source_url']} alt="" className='w-auto h-36 text-white p-2' /> : <span className="mt-3 text-3xl font-bold">Empire Clinics</span>
                    }
                </Link>
                {/* how to  */}
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    {
                        loading === 'true' ?
                            fHeader.map(nav => {
                                return (
                                    <Link key={nav.ID} to={nav.url !== '#' ? nav.url.replace('https://empireclinics.com/', '') : '/services'} className="mr-5 hover:text-gray-900">{nav.title}</Link>
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