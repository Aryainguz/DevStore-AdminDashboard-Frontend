import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy } from 'react'
import { Suspense } from 'react'

const Admin = lazy(() => import('./pages/Admin'))
const Product  = lazy(() => import('./pages/Product'))

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/devstore/admin" element={<Admin/>} />
        <Route path="/devstore/admin/products" element={<Product/>} />
        <Route path="/devstore/admin/customers" element={<Admin/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
