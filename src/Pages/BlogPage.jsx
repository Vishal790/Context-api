import React, { useContext, useState } from 'react'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { baseUrl } from '../baseUrl';
import { useEffect } from 'react';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';

const Blogpage = () => {

    const [blog, setBlog] = useState(null)
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation()
    const navigation = useNavigate()
    const { setLoading, loading } = useContext(AppContext);

    const blogId = location.pathname.split('/').at(-1);

    const newurl = "https://codehelp-apis.vercel.app/api/";

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newurl}get-blog?blogId=${blogId}`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch (err) {
            console.log("Error");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);

    }

    useEffect(() => {
        if (blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname])

    return (
        <div>
            <Header />
            <div onClick={() => navigation(-1)}>
                <button>
                    Back
                </button>
            </div>
            {
                loading ? <p>Loading</p> :
                    blog ? (
                        <div>
                            <BlogDetails  post={blog} />
                            <h2>Related Blogs</h2>
                            {
                                relatedBlogs.map((post, index) => (
                                    <div key={post.id}>
                                        <BlogDetails  post={post} />
                                    </div>
                                ))
                            }
                        </div>

                    ) : (
                        <div>
                            <h2>Blog not found</h2>
                        </div>
                    )

            }

        </div>
    )
}

export default Blogpage