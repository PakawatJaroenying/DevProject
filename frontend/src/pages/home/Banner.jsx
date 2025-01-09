import React from 'react'
import bannerImg from "../../assets/banner1.png"

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse py-14 
    justify-between items-center gap-12'>
        <div className='md:w-1/2 w-full flex items-center 
        md:justify-end'>
            <img src={bannerImg} alt=""/>
        </div>
        
        <div className='md:w-1/2 w-full'>
            <h1 className='md:text-5xl text-2xl font-medium
            mb-7'>หนังสือใหม่ประจำสัปดาห์</h1>
            <p>It's time to update your reading list with some of 
                the latest and greatest releases in the literary world. 
                From heart-pumping thrillers to captivating memoirs, 
                this week's new releases offer something for everyone
            </p>
            
            <button className='btn-primary mt-5 font-bold'>เลือกซื้อ</button>
        </div>

        
    </div>
  )
}

export default Banner