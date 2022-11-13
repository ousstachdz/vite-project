import React from 'react'

export default function Card({ img, title }) {
  return (
    <div className='my-2 bg-slate-100 flex w-96 rounded-xl justify-end overflow-hidden dark:bg-gray-900'>
      <div className='w-full text-center flex justify-center items-center h-20 font-bold text-sm text-gray-500 dark:text-gray-300'>
        {title}
      </div>
      <img
        className='p-4 w-20 h-20 bg-violet-200 dark:bg-violet-300'
        src={img}
        alt=''
      />
    </div>
  )
}
