import React from 'react'
import '../styles/App.css'
import {Navbar, Welcome, Footer, Services, Transactions} from '../components';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />      
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}
