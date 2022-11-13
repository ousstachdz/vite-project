import React from 'react'

import bed from '../../assets/bed.svg'
import icon1 from '../../assets/images/pic1.png'
import icon2 from '../../assets/images/pic2.png'
import icon3 from '../../assets/images/pic3.png'

import img1 from '../../assets/images/product-showcase-3.jpg'
import img2 from '../../assets/images/product-showcase-2.jpg'

import Card from './Card'
import CardBig from './CardBig'
import CardSmall from './CardSmall'

export default function Features() {
  return (
    <div className='flex flex-col items-center py-8  dark:bg-gray-800 dark:text-gray-300'>
      <img className='w-24 h-24 stroke-slate-200 p-2' src={bed} alt='' />
      <h2 className='text-center font-semibold text-xl p-2'>
        ما الذي يجعل
        <br />
        وسادة نابوفا مميزة جدا؟
      </h2>
      <p className='text-center w-80 p-2 text-sm font-semibold text-gray-500 dark:text-gray-400'>
        تتميز مادة المايكروفايبر بأنها ناعمة وداعمة في نفس الوقت، إذن فهي تحتضن
        الرأس والرقبة بلطف مع دعم عدم الضغط، ستنام بشكل مريح بغض النظر وعن وضعية
        نومك المفضلة.
      </p>
      <h3 className='text-center w-80 p-2  font-bold text-violet-700 '>
        ليست مجرد راحة، بل
        <br />
        💕 تحسين جودة النوم
      </h3>

      <Card img={icon1} title={'مناسبة للحساسية المفرطة'} />
      <Card img={icon2} title={'🇪🇸 جودة إسبانية ممتازة'} />
      <Card img={icon1} title={'مستخدمة في أرقى الفنادق'} />
      <Card img={icon3} title={'مصنوعة لتدوم '} />

      <CardBig
        img={img1}
        title={'تبقى باردة طوال الليل 🥶'}
        desc={
          'يعمل الميكروفايبر كشبكة تهوية ماصة للرطوبة يتيح تدفق الهواء بشكل مستمر حتى تتمكن من الحفاظ على برودة الراس طوال الليل.'
        }
      />
      <CardBig
        img={img2}
        title={'فائقة التحمل 💪🏻'}
        desc={
          'مصنعة من نسيج الميكروفايبر الذاكري، الذي يتميز بالمتانة الفائقة ، و يجعل الوسادة تحافظ على شكلها ليلة بعد ليلة.'
        }
      />
      <div className='flex w-96 my-10 items-start'>
        <CardSmall
          img={
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 24 24'
              focusable='false'
              className='w-10 h-10'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M19 3c-1.654 0-3 1.346-3 3 0 .502.136.968.354 1.385l-1.116 1.302A3.976 3.976 0 0 0 13 8c-.739 0-1.425.216-2.02.566L9.566 7.152A3.449 3.449 0 0 0 10 5.5C10 3.57 8.43 2 6.5 2S3 3.57 3 5.5 4.57 9 6.5 9c.601 0 1.158-.166 1.652-.434L9.566 9.98A3.972 3.972 0 0 0 9 12c0 .997.38 1.899.985 2.601l-1.692 1.692.025.025A2.962 2.962 0 0 0 7 16c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3c0-.476-.121-.919-.318-1.318l.025.025 1.954-1.954c.421.15.867.247 1.339.247 2.206 0 4-1.794 4-4a3.96 3.96 0 0 0-.439-1.785l1.253-1.462c.364.158.764.247 1.186.247 1.654 0 3-1.346 3-3s-1.346-3-3-3zM7 20a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM5 5.5C5 4.673 5.673 4 6.5 4S8 4.673 8 5.5 7.327 7 6.5 7 5 6.327 5 5.5zm8 8.5c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm6-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2z'></path>
            </svg>
          }
          value={'100%'}
          title={'ألياف المايكروجيل الدقيقة'}
        />
        <CardSmall
          img={
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 24 24'
              focusable='false'
              className='w-10 h-10'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='m21.406 6.086-9-4a1.001 1.001 0 0 0-.813 0l-9 4c-.02.009-.034.024-.054.035-.028.014-.058.023-.084.04-.022.015-.039.034-.06.05a.87.87 0 0 0-.19.194c-.02.028-.041.053-.059.081a1.119 1.119 0 0 0-.076.165c-.009.027-.023.052-.031.079A1.013 1.013 0 0 0 2 7v10c0 .396.232.753.594.914l9 4c.13.058.268.086.406.086a.997.997 0 0 0 .402-.096l.004.01 9-4A.999.999 0 0 0 22 17V7a.999.999 0 0 0-.594-.914zM12 4.095 18.538 7 12 9.905l-1.308-.581L5.463 7 12 4.095zM4 16.351V8.539l7 3.111v7.811l-7-3.11zm9 3.11V11.65l7-3.111v7.812l-7 3.11z'></path>
            </svg>
          }
          value={'3D'}
          title={'تكنولوجيا النسيج ثلاثي الأبعاد'}
        />
        <CardSmall
          img={
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 24 24'
              focusable='false'
              className='w-10 h-10'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z'></path>
            </svg>
          }
          value={'5000+'}
          title={'الكثير من الزبائن الراضين'}
        />
      </div>
    </div>
  )
}
