import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function Privateroute() {
    const isAuthenticated = !!localStorage.getItem('token');

  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

export default Privateroute