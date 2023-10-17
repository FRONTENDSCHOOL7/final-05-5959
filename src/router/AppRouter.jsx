import LoginEmailPage from 'pages/LoginEmailPage'
import LoginMainPage from 'pages/LoginMainPage'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginMainPage />} />
            <Route path="/login" element={<LoginEmailPage />} />
        </Routes>
    </BrowserRouter>
  )
}
