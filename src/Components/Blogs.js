import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
// import Next from './Next';

const Posts = () => {
    const [status, setStatus] = useState('');
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        // axios res
        const url = `${process.env.REACT_APP_URL}posts?status=publish&page=${page}`;
        axios.get(url).then(res => {
            setPosts(res.data);
        }).catch(err => {
            console.log('err', err.message);
        }
        )

        // axios next res
        const url2 = `${process.env.REACT_APP_URL}posts?status=publish&page=${page + 1}`;
        axios.get(url2).then(res => {
            setStatus(res.status)
        }).catch(err => {
            setStatus(err.request.status)
        }
        )
    }, [page, status])

    console.log(posts);

    return (
        <>
            <section className='flex'>
                {/* Posts */}
                <div className='w-[68%]'>
                    <div className='flex flex-wrap ml-5'>
                        {
                            Object.keys(posts).length ? posts.map((post) => {
                                /* console.log(post); */
                                return (
                                    <div key={post.id} className="max-w-sm rounded overflow-hidden shadow-lg m-5">
                                        <Link to={`/post/${post.id}`}>
                                            <img className="w-full" src={post.jetpack_featured_media_url} alt="Sunset in the mountains" />
                                            <div className="px-6 py-4">
                                                <div className="font-bold text-xl mb-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                                <p className="text-gray-700 text-base" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                                            </div>
                                        </Link>
                                    </div>
                                )
                            }) : 'Loading...'
                        }
                    </div>
                    <div className='flex justify-between m-2'>
                        {page === 1 ? <Link></Link> : <button onClick={() => setPage(page - 1)} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Back</button>}
                        {
                            status === 200 ? <button onClick={() => setPage(page + 1)} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Next</button> : <div></div>
                        }
                    </div>
                </div>
                {/* Search */}
                <div class="flex justify-center ">
                    <div class="mb-3 xl:w-96">
                        <div class="input-group relative flex flex-wrap items-stretch mb-4">
                            <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal w-4/5  mr-1 ml-2 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                                <button class="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                                    </svg>
                                </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Posts
