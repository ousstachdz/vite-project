import React from 'react'

export default function CardBig({ img, title, desc }) {
  return (
    <div className='w-96 justify-center flex flex-col items-center my-4'>
      <img className='rounded-xl' src={img} alt='' />
      <h1 className='text-center font-semibold text-violet-700 p-4'>{title}</h1>
      <p className=' text-center w-72 font-semibold text-sm text-gray-500 dark:text-gray-300'>
        {desc}
      </p>
    </div>
  )
}
