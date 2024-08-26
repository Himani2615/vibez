import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import MessageContainer from '../../components/messages/MessageContainer';

export const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className='relative flex h-[300px] sm:h-[450px] lg:h-[550px] rounded-lg overflow-hidden bg-green-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
      {/* Hamburger or Close Button */}
      <button
        className='absolute top-2 left-1 text-gray-600 hover:text-gray-700 focus:outline-none'
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
          </svg>
        ) : (
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
          </svg>
        )}
      </button>

      {/* Sidebar */}
      {isSidebarOpen && <Sidebar className="fixed inset-0 sm:static sm:w-1/4 lg:w-1/5 z-50" onClose={toggleSidebar} />}

      {/* Main Content */}
      <MessageContainer className="flex-1" />
    </div>
  )
}

export default Home;
