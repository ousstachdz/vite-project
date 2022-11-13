import React, { useEffect, useState } from 'react'

export default function ImageSlider({ imgs }) {
  const [img, setImg] = useState(imgs[0])
  useEffect(() => {
    updateImg()
  }, [])
  let index = 0
  const updateImg = () => {
    setInterval(() => {
      setImg(imgs[index])
      if (index > imgs.length - 2) {
        index = 0
      } else {
        index++
      }
    }, 3000)
  }
  return <img className='w-96 rounded-lg' src={img} alt='product inmages' />
}
