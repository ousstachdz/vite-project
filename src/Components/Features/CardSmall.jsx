import React from 'react'

export default function CardSmall({ value, img, title }) {
  return (
    <div className='flex flex-col items-center justify-center'>
      {/* <img className='h-8' src={img} alt='' /> */}
      {img}
      <h1 className='font-bold text-lg  text-center text-rose-500'>{value}</h1>
      <h2 className='font-bold text-lg  text-center'>{title}</h2>
    </div>
  )
}
