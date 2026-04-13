import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    const imageSrc = appwriteService.getFilePreview(featuredImage);
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                {imageSrc ? (
                    <img
                    src={imageSrc}
                    alt={title}
                    className='rounded-xl'
                    onError={(event) => {
                        console.error("PostCard image failed:", event.currentTarget.src);
                    }}
                    />
                ) : (
                    <div className='rounded-xl bg-gray-200 p-4 text-sm text-gray-600'>
                        Image URL missing
                    </div>
                )}

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard
