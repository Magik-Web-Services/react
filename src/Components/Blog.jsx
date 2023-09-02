import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Link } from "react-router-dom";

const Blog = () => {
    const { id } = useParams();
    const [post, setPost] = useState([]);

    useEffect(() => {
        const url = `${process.env.REACT_APP_URL}posts/${id}`;
        axios.get(url).then(res => {
            setPost(res.data);
        }).catch(err => {
            console.log('err', err.message);
        }
        )
    }, [id])
    // console.log(post);
    return (
        <div>
            {
                Object.keys(post).length ?
                    (<section className="text-gray-600 body-font">
                        <div className="flex flex-col px-5 py-24 justify-start items-center">
                            <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={post.jetpack_featured_media_url} />
                            <div className="w-full md:w-2/3 flex flex-col mb-16 ml-4">
                            <h1 className='text-4xl mb-5 ' dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                <span className="text-left" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                                <p className="mb-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                                <div className="flex">
                                    <Link to={'/'}>
                                        <button className="text-white text-center bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Back</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    )
                    : ('loading...')
            }
        </div>
    )
}

export default Blog
