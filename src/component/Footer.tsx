import React from 'react'

const Footer = () => {
  return (
   <footer className='mt-24 border-t border-white/10'>
    <div className='max-w-7xl mx-auto px-6 lg:px-8 py-8 text-center '>
      <p className='text-xs text-white/40'>© {new Date().getFullYear()} Kazi Tahia Idris.All Rights Reserved</p>
    </div>
   </footer>
  )
}

export default Footer