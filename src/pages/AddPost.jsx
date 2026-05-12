// import React from 'react'
// import { Container, PostForm } from '../components'

// function AddPost() {
//   return (
//     <div className='py-8'>
//         <Container>
//             <PostForm />
//         </Container>
//     </div>
//   )
// }

// export default AddPostimport React from 'react'
import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div className="py-10 bg-gray-50 min-h-screen">
      <Container>
        <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow-sm">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">
            Create New Post
          </h1>
          <PostForm />
        </div>
      </Container>
    </div>
  )
}

export default AddPost