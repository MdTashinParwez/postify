// // import React, {useEffect, useState} from 'react'
// // import appwriteService from "../appwrite/config";
// // import {Container, PostCard} from '../components'

// // function Home() {
// //     const [posts, setPosts] = useState([])

// //     useEffect(() => {
// //         appwriteService.getPosts().then((posts) => {
// //             if (posts) {
// //                 setPosts(posts.documents)
// //             }
// //         })
// //     }, [])
  
// //     if (posts.length === 0) {
// //         return (
// //             <div className="w-full py-8 mt-4 text-center">
// //                 <Container>
// //                     <div className="flex flex-wrap">
// //                         <div className="p-2 w-full">
// //                             <h1 className="text-2xl font-bold hover:text-gray-500">
// //                                 Login to read posts
// //                             </h1>
// //                         </div>
// //                     </div>
// //                 </Container>
// //             </div>
// //         )
// //     }
// //     return (
// //         <div className='w-full py-8'>
// //             <Container>
// //                 <div className='flex flex-wrap'>
// //                     {posts.map((post) => (
// //                         <div key={post.$id} className='p-2 w-1/4'>
// //                             <PostCard {...post} />
// //                         </div>
// //                     ))}
// //                 </div>
// //             </Container>
// //         </div>
// //     )
// // }

// // export default Home
// import React, { useEffect, useState } from 'react'
// import appwriteService from "../appwrite/config";
// import { Container, PostCard } from '../components'

// function Home() {
//     const [posts, setPosts] = useState([])

//     useEffect(() => {
//         appwriteService.getPosts().then((posts) => {
//             if (posts) {
//                 setPosts(posts.documents)
//             }
//         })
//     }, [])

//     if (posts.length === 0) {
//         return (
//             <div className="min-h-screen flex items-center justify-center bg-gray-50">
//                 <Container>
//                     <div className="text-center">
//                         <h1 className="text-2xl font-semibold text-gray-700 mb-2">
//                             No posts available
//                         </h1>
//                         <p className="text-gray-500">
//                             Login to read and explore posts
//                         </p>
//                     </div>
//                 </Container>
//             </div>
//         )
//     }

//     return (
//         <div className="py-10 bg-gray-50 min-h-screen">
//             <Container>

//                 <h1 className="text-2xl font-semibold text-gray-800 mb-6">
//                     Latest Posts
//                 </h1>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {posts.map((post) => (
//                         <PostCard key={post.$id} {...post} />
//                     ))}
//                 </div>

//             </Container>
//         </div>
//     )
// }

// export default Home
import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <Container>
                    <div className="text-center max-w-md mx-auto">

                        <img
                            src="https://illustrations.popsy.co/gray/remote-work.svg"
                            alt="No posts"
                            className="w-64 mx-auto mb-6"
                        />

                        
                        <h1 className="text-2xl font-bold text-gray-800 mb-2">
                            No Posts Yet 😅
                        </h1>

                        
                        <p className="text-gray-500 mb-4">
                            Seems like this place is quieter than your group chat 👀  
                            Be the first one to drop something interesting!
                        </p>

                       
                        <p className="text-indigo-600 font-medium">
                            Login & start sharing your thoughts 🚀
                        </p>

                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className="py-10 bg-gray-50 min-h-screen">
            <Container>

                <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                    Latest Posts
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <PostCard key={post.$id} {...post} />
                    ))}
                </div>

            </Container>
        </div>
    )
}

export default Home