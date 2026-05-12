// import React, { useState, useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import './App.css'
// import authService from "./appwrite/auth"
// import {login, logout} from "./store/authSlice"
// import { Footer, Header } from './components'
// import { Outlet } from 'react-router-dom'

// function App() {
//   const [loading, setLoading] = useState(true)
//   const dispatch = useDispatch()

//   const serializeUser = (userData) => ({
//     $id: userData.$id,
//     name: userData.name,
//     email: userData.email,
//     phone: userData.phone,
//     emailVerification: userData.emailVerification,
//     phoneVerification: userData.phoneVerification,
//     prefs: userData.prefs,
//     accessedAt: userData.accessedAt,
//     registration: userData.registration,
//     status: userData.status,
//     labels: userData.labels,
//   })

//   useEffect(() => {
//     authService.getCurrentUser()
//     .then((userData) => {
//       if (userData) {
//         dispatch(login({userData: serializeUser(userData)}))
//       } else {
//         dispatch(logout())
//       }
//     })
//     .finally(() => setLoading(false))
//   }, [])
  
//   return !loading ? (
//     <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
//       <div className='w-full block'>
//         <Header />
//         <main>
//         <Outlet />
//         </main>
//         <Footer />
//       </div>
//     </div>
//   ) : null
// }

// export default App
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  const serializeUser = (userData) => ({
    $id: userData.$id,
    name: userData.name,
    email: userData.email,
    phone: userData.phone,
    emailVerification: userData.emailVerification,
    phoneVerification: userData.phoneVerification,
    prefs: userData.prefs,
    accessedAt: userData.accessedAt,
    registration: userData.registration,
    status: userData.status,
    labels: userData.labels,
  })

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData: serializeUser(userData)}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-col bg-gradient-to-br from-gray-100 via-white to-gray-200'>

      
      <Header />

     
      <main className='flex-1 w-full px-4 sm:px-6 lg:px-8 py-6'>
        <div className='max-w-6xl mx-auto'>
          <Outlet />
        </div>
      </main>

     
      <Footer />

    </div>
  ) : (
    
    <div className='h-screen flex items-center justify-center bg-gray-50'>
      <div className='text-center'>
        
        <div className='relative'>
          <div className='w-14 h-14 border-4 border-gray-200 border-t-black rounded-full animate-spin'></div>
        </div>

        <p className='mt-4 text-gray-600 font-medium tracking-wide'>
          Loading your experience...
        </p>

        <p className='text-xs text-gray-400 mt-1'>
          Please wait a moment
        </p>

      </div>
    </div>
  )
}

export default App