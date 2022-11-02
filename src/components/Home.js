import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { Main } from './Main'

export const Home = () => {
  return (
    <div className='min-h-screen'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}