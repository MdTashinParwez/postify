// import React from 'react'
// import appwriteService from "../appwrite/config"
// import {Link} from 'react-router-dom'

// function PostCard({$id, title, featuredImage}) {
//     const imageSrc = appwriteService.getFilePreview(featuredImage);
    
//   return (
//     <Link to={`/post/${$id}`}>
//         <div className='w-full bg-gray-100 rounded-xl p-4'>
//             <div className='w-full justify-center mb-4'>
//                 {imageSrc ? (
//                     <img
//                     src={imageSrc}
//                     alt={title}
//                     className='rounded-xl'
//                     onError={(event) => {
//                         console.error("PostCard image failed:", event.currentTarget.src);
//                     }}
//                     />
//                 ) : (
//                     <div className='rounded-xl bg-gray-200 p-4 text-sm text-gray-600'>
//                         Image URL missing
//                     </div>
//                 )}

//             </div>
//             <h2
//             className='text-xl font-bold'
//             >{title}</h2>
//         </div>
//     </Link>
//   )
// }


// export default PostCard
import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
    const imageSrc = appwriteService.getFilePreview(featuredImage);

    return (
        <Link to={`/post/${$id}`}>
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden cursor-pointer">

                {/* Image */}
                <div className="w-full h-56 bg-gray-100">
                    {imageSrc ? (
                        <img
                            src={imageSrc}
                            alt={title}
                            className="w-full h-full object-cover"
                            onError={(event) => {
                                console.error("PostCard image failed:", event.currentTarget.src);
                            }}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-sm text-gray-500">
                            No Image
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
                        {title}
                    </h2>
                </div>

            </div>
        </Link>
    )
}

export default PostCard