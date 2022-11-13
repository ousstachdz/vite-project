import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Footer from './Commun/Footer/Footer'
import NavBar from './Commun/Navbar/NavBar'

import limg1 from '../assets/light/img1.svg'
import limg2 from '../assets/light/img2.svg'
import limg3 from '../assets/light/img3.svg'
import limg4 from '../assets/light/img4.svg'

import dimg1 from '../assets/dark/img1.svg'
import dimg2 from '../assets/dark/img2.svg'
import dimg3 from '../assets/dark/img3.svg'
import dimg4 from '../assets/dark/img4.svg'

export default function Buy({ toggleTheme, isDark }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [wilaya, setWilaya] = useState('')
  const { state } = useLocation()

  const navigate = useNavigate()
  useEffect(() => {
    state ? null : navigate('/')
  }, [])
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(name + ' ' + phone + ' ' + wilaya + ' ' + state)
  }
  return (
    <>
      <NavBar toggleTheme={toggleTheme} isDark={isDark} />
      <section className='w-full flex justify-center items-center text-black dark:bg-gray-800  dark:text-white '>
        <div className='w-96 flex flex-col items-center justify-center pt-10'>
          <h1 className='w-full text-center font-bold text-xl '>
            الآن أدخل معلوماتك
          </h1>
          <h2 className='w-72 text-center text-gray-600 dark:text-gray-300'>
            املؤوا الحقول أسفله ثم اضغطوا على زر المواصلة لاتمام عملية الطلب
          </h2>
          <form
            onSubmit={submitHandler}
            method='post'
            className='flex flex-col items-end w-full my-8'
          >
            <label htmlFor='name' className='font-bold pt-4'>
              <span className='text-red-600'>*</span>
              إسمكم الكامل
            </label>
            <input
              className='bg-gray-200   text-gray-600 rounded-lg w-full p-2 my-2 border-2 focus-within:border-violet-800 outline-none'
              placeholder='الإسم و اللقب'
              type='text'
              name='name'
              required
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
            <p className='text-sm text-gray-600 dark:text-gray-300 py-1'>
              حقل الإسم الكامل مطلوب
            </p>
            <label htmlFor='phone' className='font-bold pt-4'>
              <span className='text-red-600'>*</span>
              رقم هاتفكم
            </label>
            <input
              placeholder='رقم الهاتف بدون رمز الدولة'
              className='bg-gray-200 text-gray-600 rounded-lg w-full p-2 my-2 border-2 focus-within:border-violet-800 outline-none'
              type='text'
              name='phone'
              required
              onChange={(e) => {
                setPhone(e.target.value)
              }}
            />
            <p className='text-sm text-gray-600 dark:text-gray-300 py-1'>
              حقل رقم الهاتف لا بد منه لتوصيل طلبكم
            </p>
            <label htmlFor='wilaya' className='font-bold pt-4'>
              <span className='text-red-600'>*</span>
              الولاية
            </label>
            <select
              className='bg-gray-200  text-gray-600 rounded-lg w-full p-2 my-2 border-2 focus-within:border-violet-800 outline-none'
              name='wilaya'
              id='wilaya'
              required
              onChange={(e) => {
                setWilaya(e.target.value)
              }}
            >
              <option value=''>إختر ولاية التوصيل</option>
              <option value='1'>Adrar - أدرار</option>
              <option value='2'>Chlef - الشلف</option>
              <option value='3'>Laghouat - الأغواط</option>
              <option value='4'>Oum El Bouaghi - أم البواقي</option>
              <option value='5'>Batna - باتنة</option>
              <option value='6'>Béjaïa - بجاية</option>
              <option value='7'>Biskra - بسكرة</option>
              <option value='8'>Béchar - بشار</option>
              <option value='9'>Blida - البليدة</option>
              <option value='10'>Bouira - البويرة</option>
              <option value='11'>Tamanrasset - تمنراست</option>
              <option value='12'>Tébessa - تبسة</option>
              <option value='13'>Tlemcen - تلمسان</option>
              <option value='14'>Tiaret - تيارت</option>
              <option value='15'>Tizi Ouzou - تيزي وزو</option>
              <option value='16'>Alger - الجزائر العاصمة</option>
              <option value='17'>Djelfa - الجلفة</option>
              <option value='18'>Jijel - جيجل</option>
              <option value='19'>Sétif - سطيف</option>
              <option value='20'>Saïda - سعيدة</option>
              <option value='21'>Skikda - سكيكدة</option>
              <option value='22'>Sidi Bel Abbès - سيدي بلعباس</option>
              <option value='23'>Annaba - عنابة</option>
              <option value='24'>Guelma - قالمة</option>
              <option value='25'>Constantine - قسنطينة</option>
              <option value='26'>Médéa - المدية</option>
              <option value='27'>Mostaganem - مستغانم</option>
              <option value='28'>M'Sila - المسيلة</option>
              <option value='29'>Mascara - معسكر</option>
              <option value='30'>Ouargla - ورقلة</option>
              <option value='31'>Oran - وهران</option>
              <option value='32'>El Bayadh - البيض</option>
              <option value='33'>Illizi - إليزي</option>
              <option value='34'>Bordj Bou Arreridj - برج بوعريريج</option>
              <option value='35'>Boumerdès - بومرداس</option>
              <option value='36'>El Tarf - الطارف</option>
              <option value='37'>Tindouf - تندوف</option>
              <option value='38'>Tissemsilt - تيسمسيلت</option>
              <option value='39'>El Oued - الوادي</option>
              <option value='40'>Khenchela - خنشلة</option>
              <option value='41'>Souk Ahras - سوق أهراس</option>
              <option value='42'>Tipaza - تيبازة</option>
              <option value='43'>Mila - ميلة</option>
              <option value='44'>Aïn Defla - عين الدفلى</option>
              <option value='45'>Naâma - النعامة</option>
              <option value='46'>Aïn Témouchent - عين تموشنت</option>
              <option value='47'>Ghardaïa - غرداية</option>
              <option value='48'>Relizane - غليزان</option>
              <option value='49'>Timimoun - تيميمون</option>
              <option value='50'>B Badji Mokhtar - برج باجي مختار</option>
              <option value='51'>Ouled Djellal - أولاد جلال</option>
              <option value='52'>Beni Abbes - بني عباس</option>
              <option value='53'>In Salah - ان صالح</option>
              <option value='54'>In Guezzam - ان قزام</option>
              <option value='55'>Touggourt - توقرت</option>
              <option value='56'>Djanet - جانت</option>
              <option value='57'>El Mghair - المغير</option>
              <option value='58'>El Meniaa - المنيعة</option>
            </select>
            <p className='text-sm text-gray-600 dark:text-gray-300 py-1'>
              حقل الولاية مطلوب{' '}
            </p>{' '}
            <input
              type='submit'
              value='مواصلة الطلب'
              className='w-full bg-violet-600 text-white font-bold rounded-lg p-2 my-2'
            />
          </form>
          <div className='flex text-center'>
            <div className='w-1/4 p-2'>
              <img src={isDark ? dimg1 : limg1} />
              <p>استبدال واسترجاع سهل</p>
            </div>
            <div className='w-1/4 p-2'>
              <img src={isDark ? dimg2 : limg2} />

              <p>توصيل لباب المنزل (1-3 أيام)</p>
            </div>
            <div className='w-1/4 p-2'>
              <img src={isDark ? dimg3 : limg3} />
              <p>ضمان جودة عالية</p>
            </div>
            <div className='w-1/4 p-2'>
              <img src={isDark ? dimg4 : limg4} />
              <p>الدفع عند الاستلام</p>
            </div>
          </div>
        </div>
      </section>
      <Footer isDark={isDark} />
    </>
  )
}
