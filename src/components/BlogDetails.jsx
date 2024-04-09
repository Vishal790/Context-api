import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({ post }) => {
    return (
        <div>
            <NavLink to={`/blog/${post.id}`} >
                <p className='font-bold text-lg'>{post.title}</p>
            </NavLink>
            
                <p className='text-sm mt-[4px]'>
                    By <span className=' italic'>{post.author}</span> on 
                    <NavLink to ={`/categories/${post.category.replaceAll(" ","-")}`}>
                    <span className=' underline font-bold'>{post.category}</span>

                    </NavLink>
                    
                </p>
                <p className=' text-sm mt-[4px]'>Posted on {post.date}</p>
                <p className=' text-md mt-[14px]'>{post.content}</p>
                <div className='flex gap-x-3 mt-[4px]'>
                    {post.tags.map((tag, index) => (
                        <NavLink to = {`/tags/${tag.replaceAll(" ","-")}`}>
                            <span key={index} className=' text-blue-700 underline font-bold text-xs' >#{tag} </span>
                        </NavLink> 
                    ))}
                </div>

           
        </div>
    )
}

export default BlogDetails