import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

const Leatest = (params) => {
    const [leatest, setLeatest] = useState([]);
    const [loading, setLoading] = useState('false');

    useEffect(() => {
        setLoading('false')

        // axios leatest Post
        const url = `${process.env.REACT_APP_URL}posts?status=publish&per_page=5`;
        axios.get(url).then(res => {
            setLeatest(res.data);
            setLoading('true')
        }).catch(err => {
            console.log('err', err.message);
        }
        )
    }, [])
    return (
        <>
            {loading === 'true' ?
                <>
                    <h3 className="border-solid border-2 ml-[10px] bg-[#d0cccc] py-2 text-center text-2xl">{params.title}</h3>
                    <ul className='mt-2 ml-2 w-[100%]'>
                        {
                            leatest.map((post) => {
                                return (
                                    <Link to={`/${post.id}`} key={post.id}>
                                    <li className='border-b-2 last:border-b-0 py-1'>
                                        <div className='flex gap-4  py-2 '>
                                            <figure>
                                                <img className="h-[40px] max-w-[40px] mt-2" src={post.jetpack_featured_media_url === '' ? 'https://dummyimage.com/300X200' : post.jetpack_featured_media_url} alt="Sunset in the mountains" />
                                            </figure>
                                            <div className='flex flex-wrap'>
                                                <small dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                                {params.date === 'yes' ? <small className='text-[#444]'>July 26, 2023</small> : ''}
                                            </div>
                                        </div>
                                    </li>
                                    </Link>
                                )
                            })
                        }
                    </ul>
                </> : ''
        }
        </>
    )
}

export default Leatest
