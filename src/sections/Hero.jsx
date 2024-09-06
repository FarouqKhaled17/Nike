import React from 'react'
import Button from '../components/Button.jsx'
import { arrowRight } from '../assets/icons/index.js'
import { shoes, statistics } from '../constants/index.js'
import { bigShoe1 } from '../assets/images/index.js'

const Hero = () => {
  return <>
  <section id='home' className='w-full flex justify-center xl:flex-row flex-col gap-10 max-container min-h-screen ml-10'>
    <div className='relative xl:2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 '>
      <p className='text-lg font-montserrat text-coral-red'>Our summer collection</p>
      <h1  className='text-8xl mt-10 font-palanquin max-sm:text-[72] max-sm:leading-[82] font-bold'>
        <span className='xl:bg-white xl:whitespace-nowrap z-10 relative pr-10'>The new arrival</span>
        <br />
        <span className='mt-3 inline-block text-coral-red'>Nike</span> Shoes
      </h1>
      <p className='font-montserrat text-slate-gray text-lg mt-6 mb-14 sm:max-w-sm'>discover stylish nike arrivals,quality comfort,and innovation for your active life</p>
      <Button label="Show Now" iconUrl={arrowRight}/>
      <div className='flex w-full justify-start items-start gap-16 mt-20 flex-wrap'>
        {statistics.map((stat) => (
          <div key={stat.value}>
            <p className='text-4xl font-bold font-palanquin'>{stat.value}</p>
            <p className='leading-7 text-slate-gray font-montserrat'>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>

    <div className='relative flex  justify-center items-center  xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-center bg-cover'>
      <img src={bigShoe1} alt="shoe collection" width={910} height={600} className='object-contain relative z-10' />
    </div>

    <div>
      {shoes.map(shoe => (<div key={shoe}>
        <showCard imgUrl={shoe} changeBigShoeIcon={()=>{}} bigShoeImg=''/>
        </div>))}
    </div>
    </section> 
      </>
  
}

export default Hero
