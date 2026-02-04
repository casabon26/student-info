import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import StudentDetail from './pages/StudentDetail'
import Students from './pages/Students'
import HeaderComponent from './components/Header'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <HeaderComponent />
        <main style={{padding:16}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/students/:id" element={<StudentDetail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
