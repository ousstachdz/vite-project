import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import ImageSlider from '../Commun/ImageSlider/ImageSlider'

import pic1 from '../../assets/images/pic1.png'
import pic2 from '../../assets/images/pic2.png'
import pic3 from '../../assets/images/pic3.png'
import sc1 from '../../assets/images/social1.jpg'
import sc2 from '../../assets/images/social2.jpg'

export default function Store() {
  const [discount, setDiscount] = useState(1160)
  const [quantity, setQuantity] = useState(2)
  const navigate = useNavigate()
  const formHandler = (e) => {
    if (e.target.value == 1) {
      setDiscount(0)
    }
    if (e.target.value == 2) {
      setDiscount(1160)
    }
    if (e.target.value == 3) {
      setDiscount(4640)
    }
    setQuantity(e.target.value)
  }
  return (
    <div className='flex justify-center items-center flex-col  dark:bg-gray-800 dark:text-gray-300'>
      <h2 className='w-96 text-lg text-gray-600 dark:text-gray-400 p-8 text-center font-semibold'>
        اختر أحد عروض البيع المتوفرة و اضغط على زر المواصلة
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          navigate('buy', { state: quantity })
          // console.log(value)
        }}
        method='post'
        className='w-96  bg-violet-100 dark:bg-gray-900 rounded-lg p-2 flex flex-col justify-evenly'
      >
        <div className='dark:bg-gray-800 flex flex-row-reverse justify-between items-center bg-white rounded-lg m-2  '>
          <img className='p-4' src={pic1} alt='' />
          <div className='flex flex-col items-end w-full'>
            <span className='font-bold text-lg'>(1) وسادة</span>
            <span>2900 دج للواحدة</span>
            <span className='p-1 bg-amber-200 rounded-lg text-sm text-amber-900'>
              العرض العادي
            </span>
          </div>
          <input
            className='m-4'
            onChange={formHandler}
            type='radio'
            name='quantity'
            value={1}
          />
        </div>

        <div className='dark:bg-gray-800 flex flex-row-reverse justify-between items-center bg-white rounded-lg m-2 '>
          <img className='p-4' src={pic2} alt='' />
          <div className='flex flex-col items-end'>
            <span className='font-bold text-lg'>(2) وسادتين</span>
            <span>
              دج للواحدة 2320
              <span className='font-semibold text-red-400'>(تخفيض 20%)</span>
            </span>
            <span className='p-1 bg-green-200 rounded-lg text-sm text-green-900'>
              العرض الأكثر طلبا
            </span>
          </div>
          <input
            className='m-4'
            onChange={formHandler}
            type='radio'
            name='quantity'
            value={2}
            checked
          />
        </div>
        <div className='dark:bg-gray-800 flex flex-row-reverse justify-between items-center bg-white rounded-lg m-2 '>
          <img className='p-4' src={pic3} alt='' />
          <div className='flex flex-col items-end'>
            <span className='font-bold text-lg'>(4) وسادات</span>
            <span>
              1740 دج للواحدة
              <span className='font-semibold text-red-400'>(تخفيض 40%)</span>
            </span>
            <span className='p-1 bg-violet-200 rounded-lg text-sm text-violet-900'>
              العرض الأكثر تخفيضا
            </span>
          </div>
          <input
            className='m-4'
            onChange={formHandler}
            type='radio'
            name='quantity'
            value={3}
          />
        </div>
        <input
          type='submit'
          value='مواصلة الطلب'
          className=' bg-violet-600 text-white font-bold rounded-lg p-2 m-2'
        />
        <div className='flex justify-between p-2'>
          <span className='p-1 bg-red-200 rounded-lg text-sm text-red-900 font-bold'>
            عرض حصري
          </span>
          <span className=' font-semibold'>
            قيمة التخفيض <span className='text-green-700 '>{discount} دج</span>
          </span>
        </div>
      </form>
      <h1 className='font-semibold text-sm p-2 mt-10'>اقرأ المزيد</h1>
      <svg
        strokeWidth='0'
        viewBox='0 0 24 24'
        focusable='false'
        className='animate-bounce w-8 h-8  fill-violet-600'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='m12 15.586-4.293-4.293-1.414 1.414L12 18.414l5.707-5.707-1.414-1.414z'></path>
        <path d='m17.707 7.707-1.414-1.414L12 10.586 7.707 6.293 6.293 7.707 12 13.414z'></path>
      </svg>

      <div className='mt-10'>
        <ImageSlider imgs={[sc1, sc2]} />
      </div>
    </div>
  )
}
