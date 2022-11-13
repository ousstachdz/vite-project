import React from 'react'
import icon from './../../assets/ci3.svg'

export default function Comment({ username, content }) {
  return (
    <div className='flex flex-row-reverse w-96 text-right  m-2 border-t-2 pt-2 dark:border-gray-700 border-gray-100'>
      <div className='overflow-hidden'>
        <svg
          width='4rem'
          height='4rem'
          className=' p-2 bg-violet-700 rounded-full fill-white dark:fill-gray-900'
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 24 24'
          focusable='false'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z'></path>
        </svg>
      </div>

      <div className='p-2 w-72'>
        <h1 className='text-lg font-bold text-right py-2'>{username}</h1>
        <p className='font-semibold text-gray-500 dark:text-gray-300'>
          {content}
        </p>
      </div>
    </div>
  )
}
