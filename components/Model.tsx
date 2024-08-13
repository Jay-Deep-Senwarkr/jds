import Image from 'next/image'
import React from 'react'

const Model = () => {
  return (
    <div className='relative flex justify-end items-end h-full'>
      {/* <div className='absolute w-[28rem] h-[28rem] rounded-full bg-[#FBB040]' style={{ top: '85%', left: '85%', transform: 'translate(-50%, -50%)' }}></div> */}
      <Image 
        src="/image.png"
        height={449}
        width={449}
        alt="Model"
        className='relative'
      />
    </div>
  )
}

export default Model;
