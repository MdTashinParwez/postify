// import React, {useEffect, useState} from 'react'
// import {Container, PostForm} from '../components'
// import appwriteService from "../appwrite/config";
// import { useNavigate,  useParams } from 'react-router-dom';

// function EditPost() {
//     const [post, setPosts] = useState(null)
//     const {slug} = useParams()
//     const navigate = useNavigate()

//     useEffect(() => {
//         if (slug) {
//             appwriteService.getPost(slug).then((post) => {
//                 if (post) {
//                     setPosts(post)
//                 }
//             })
//         } else {
//             navigate('/')
//         }
//     }, [slug, navigate])
//   return post ? (
//     <div className='py-8'>
//         <Container>
//             <PostForm post={post} />
//         </Container>
//     </div>
//   ) : null
// }

// export default EditPost

import React, { useEffect, useState } from 'react'
import { Container, PostForm } from '../components'
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPosts] = useState(null)
    const { slug } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])

    return post ? (
        <div className="py-10 bg-gray-50 min-h-screen">
            <Container>
                <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow-sm">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                        Edit Post
                    </h1>
                    <PostForm post={post} />
                </div>
            </Container>
        </div>
    ) : null
}

export default EditPost