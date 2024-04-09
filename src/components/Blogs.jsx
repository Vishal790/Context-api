import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';

const Blogs = () => {

  const { posts, loading } = useContext(AppContext);

  return (
    <div className='w-11/12 max-w-[680px] flex flex-col gap-y-7 py-8 mt-[60px] mb-[60px] mx-auto'>
      {
        loading
          ? (<div className=' flex justify-center items-center w-11/12 max-w-[680px] h-dvh  ml-[40px]'>
            <Spinner />
          </div>)
          : (
            posts.length === 0 ? (
              <div>
                <p>No Posts found</p>
              </div>
            ) : (
              posts.map((post) => (
               <BlogDetails key={post.id} post={post}/>
              ))
            )
          )
      }

    </div>
  )
}

export default Blogs