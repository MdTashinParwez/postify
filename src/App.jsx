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
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
