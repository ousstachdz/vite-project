import React from 'react'

import logoLight from '../../../assets/LogoLightFooter.png'
import logoDark from '../../../assets/LogoDarkFooter.png'

export default function Footer({ isDark }) {
  return (
    <footer className='bg-gray-200 dark:bg-gray-900 w-full  py-20  flex justify-center '>
      <div className='flex justify-between items-center w-96'>
        <div className='text-right '>
          <p className=' text-gray-500  dark:text-gray-300 p-1  text-sm'>
            رقم الهاتف
            <span className=' dark:text-white text-black font-bold p-4'>
              0794654188
            </span>
          </p>
          <p className=' text-gray-500  dark:text-gray-300 text-sm p-1 '>
            العنوان{' '}
            <span className='font-bold p-4 dark:text-white text-black '>
              المنطقة الصناعية بسطيف
            </span>
          </p>
          <p className=' text-gray-500  dark:text-gray-300 text-sm p-1 '>
            قوانين الاستخدام{' '}
            <span className='font-bold p-4 dark:text-white text-black '>
              بوليصة الخصوصية{' '}
            </span>
          </p>
        </div>
        <img className='w-16' src={isDark ? logoDark : logoLight} alt='' />
      </div>
    </footer>
  )
}
