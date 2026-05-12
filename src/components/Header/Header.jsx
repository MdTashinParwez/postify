// // import React from 'react'
// // import {Container, Logo, LogoutBtn} from '../index'
// // import { Link } from 'react-router-dom'
// // import {useSelector} from 'react-redux'
// // import { useNavigate } from 'react-router-dom'

// // function Header() {
// //   const authStatus = useSelector((state) => state.auth.status)
// //   const navigate = useNavigate()

// //   const navItems = [
// //     {
// //       name: 'Home',
// //       slug: "/",
// //       active: true
// //     }, 
// //     {
// //       name: "Login",
// //       slug: "/login",
// //       active: !authStatus,
// //   },
// //   {
// //       name: "Signup",
// //       slug: "/signup",
// //       active: !authStatus,
// //   },
// //   {
// //       name: "All Posts",
// //       slug: "/all-posts",
// //       active: authStatus,
// //   },
// //   {
// //       name: "Add Post",
// //       slug: "/add-post",
// //       active: authStatus,
// //   },
// //   ]


// //   return (
// //     <header className='py-3 shadow bg-gray-500'>
// //       <Container>
// //         <nav className='flex'>
// //           <div className='mr-4'>
// //             <Link to='/'>
// //               <Logo width='70px'   />

// //               </Link>
// //           </div>
// //           <ul className='flex ml-auto'>
// //             {navItems.map((item) => 
// //             item.active ? (
// //               <li key={item.name}>
// //                 <button
// //                 onClick={() => navigate(item.slug)}
// //                 className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
// //                 >{item.name}</button>
// //               </li>
// //             ) : null
// //             )}
// //             {authStatus && (
// //               <li>
// //                 <LogoutBtn />
// //               </li>
// //             )}
// //           </ul>
// //         </nav>
// //         </Container>
// //     </header>
// //   )
// // }

// // export default Header

// import React from 'react'
// import { Container, Logo, LogoutBtn } from '../index'
// import { Link, useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'

// function Header() {
//   const authStatus = useSelector((state) => state.auth.status)
//   const navigate = useNavigate()

//   const navItems = [
//     { name: 'Home', slug: "/", active: true },
//     { name: "Login", slug: "/login", active: !authStatus },
//     { name: "Signup", slug: "/signup", active: !authStatus },
//     { name: "All Posts", slug: "/all-posts", active: authStatus },
//     { name: "Add Post", slug: "/add-post", active: authStatus },
//   ]

//   return (
//     <header className="bg-white shadow-sm sticky top-0 z-50">
//       <Container>
//         <nav className="flex items-center justify-between py-4">

//           {/* Logo */}
//           <Link to="/">
//             <Logo width="120px" />
//           </Link>

//           {/* Nav Items */}
//           <ul className="flex items-center gap-3">
//             {navItems.map((item) =>
//               item.active ? (
//                 <li key={item.name}>
//                   <button
//                     onClick={() => navigate(item.slug)}
//                     className="px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition"
//                   >
//                     {item.name}
//                   </button>
//                 </li>
//               ) : null
//             )}

//             {authStatus && (
//               <li>
//                 <LogoutBtn />
//               </li>
//             )}
//           </ul>

//         </nav>
//       </Container>
//     </header>
//   )
// }

// export default Header
import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    { name: 'Home', slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <Container>
        <nav className="flex items-center justify-between py-3">

          {/* LEFT SIDE (Logo + Brand Text) */}
          <div className="flex items-center gap-2">
            <Link to="/">
              <Logo width="110px" />
            </Link>

            <span className="text-sm text-gray-500 hidden sm:block">
              Share your thoughts
            </span>
          </div>

          {/* RIGHT SIDE */}
          <ul className="flex items-center gap-2">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="px-3 py-1.5 text-sm font-medium text-gray-700 rounded-md hover:bg-indigo-50 hover:text-indigo-600 transition"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}

            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>

        </nav>
      </Container>
    </header>
  )
}

export default Header