import React from 'react'
import Footer from '../Commun/Footer/Footer'
import Comment from './Comment'

export default function FeedBack() {
  return (
    <div className='flex flex-col items-center justify-center  dark:bg-gray-800 dark:text-gray-300'>
      <h1 className='py-8 w-96  text-end font-bold text-2xl'>
        ماذا قال زبائننا عن منتجاتنا؟
      </h1>
      <Comment
        username={'Fatma, Boumerdas'}
        content={
          'اليوم 60 ليلة من استعمالي لنابوفا , خليني نكون صريحة طولت باه والفت بيها لكن غير توالفها مابدلوهاش ,أكثر حاجا عجبتني القماش لي مخدومة بيها تاع صيف يعطيك واحد الاحساس تاع البرود في الراسو الرقبة ننصحكم بيها لبنات'
        }
      />
      <Comment
        username={'Rachid, Tizi Ouzou'}
        content={
          "j'en ai commandé 2 avec 20% de réduction et ils ont été livrés en 48h L'oreiller le plus confortable de tous les temp"
        }
      />
    </div>
  )
}
