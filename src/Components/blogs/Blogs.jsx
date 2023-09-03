import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

const Posts = () => {
    const [status, setStatus] = useState('');
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState('false');

    useEffect(() => {
        setLoading('false')
        // axios res
        const url = `${process.env.REACT_APP_URL}posts?status=publish&page=${page}&search=${search}`;
        axios.get(url).then(res => {
            setPosts(res);
            setLoading('true')
        }).catch(err => {
            console.log('err', err.message);
        }
        )

        // axios next res
        const url2 = `${process.env.REACT_APP_URL}posts?status=publish&page=${page + 1}&search=${search}`;
        axios.get(url2).then(res => {
            setStatus(res.status)
        }).catch(err => {
            setStatus(err.request.status)
        }
        )
    }, [page, search])

    console.log(posts.data);
    return (
        <>
            <section className='flex'>
                {/* Posts */}
                <div className='w-[68%]'>
                    {
                        loading === 'true' ?
                            <>
                                <div className='flex flex-wrap ml-5'>
                                    {
                                        posts.data.length ? posts.data.map((post) => {
                                            return (
                                                <div key={post.id} className="max-w-sm rounded overflow-hidden shadow-lg m-5">
                                                    <Link to={`/post/${post.id}`}>
                                                        <img className="w-full" src={post.jetpack_featured_media_url === '' ? 'https://dummyimage.com/300X200' : post.jetpack_featured_media_url} alt="Sunset in the mountains" />
                                                        <div className="px-6 py-4">
                                                            <div className="font-bold text-xl mb-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                                            <p className="text-gray-700 text-base" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                                                        </div>
                                                    </Link>
                                                </div>
                                            )
                                        }) : 'Not Found...'
                                    }
                                </div>
                                {/* Prev and Next Btn */}
                                {
                                    posts.data.length ?
                                        <div className='flex justify-between m-2'>
                                            {
                                                page === 1 ? <Link></Link> : <button onClick={() => setPage(page - 1)} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Back</button>
                                            }
                                            {
                                                status === 200 ? <button onClick={() => setPage(page + 1)} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Next</button> : <div></div>
                                            }
                                        </div> : ''
                                }
                            </>
                            :
                            /* Loading */
                            <div role="status" className='flex justify-center'>
                                <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                    }
                </div>
                {/* Search */}
                <div className="flex justify-center ">
                    <div className="mb-3 xl:w-96">
                        <div className="input-group relative flex flex-wrap items-stretch mb-4">
                            <input type="search" onChange={(e) => setSearch(e.target.value)} className="form-control relative flex-auto min-w-0 block  px-3 py-1.5 text-base font-normal w-4/5  mr-1 ml-2 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                            <button className="btn  px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
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