import { useEffect, useState } from 'react'
import Layer01 from '../../public/images/home_layout/layer01.png'
import Layer02 from '../../public/images/home_layout/layer02.png'
import Layer03 from '../../public/images/home_layout/layer03.png'
import Layer04 from '../../public/images/home_layout/layer04.png'
import Layer05 from '../../public/images/home_layout/layer05.png'
import Layer06 from '../../public/images/home_layout/layer06.png'
import Layer07 from '../../public/images/home_layout/layer07.png'
import Layer08 from '../../public/images/home_layout/layer08.png'

const Home = () => {
  const [offset, setOffset] = useState<number>(0);

  const handleScroll = () => setOffset(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[])


  return (
    <div>

      {/* Banner Image */}
      <div className="relative h-[110vh] overflow-hidden w-screen bg-gradient-to-b from-[#81CA43] to-[#FFE3DD]">
        <img src={Layer01} alt='layer_01' className='w-full h-full object-cover absolute z-0' />
        <img src={Layer02} alt='layer_02' className='w-full h-full object-cover absolute z-[3]' style={{transform: `translate(${offset/2}px, -${offset/10}px)`}} />
        <img src={Layer03} alt='layer_03' className='w-full h-full object-cover absolute z-[4]' style={{transform: `translate(-${offset/2}px, -${offset/15}px)`}} />
        <img src={Layer04} alt='layer_04' className='w-full h-full object-cover absolute z-[5]' style={{transform: `translate(0, -${offset/15}px)`}} />
        <img src={Layer05} alt='layer_05' className='w-full h-full object-cover absolute z-[6]' style={{transform: `translate(0, ${offset/6}px)`}} />
        <img 
          src={Layer06} 
          alt='layer_06' 
          className='w-[80%] object-cover absolute -bottom-20 -right-24 z-[7]' 
          style={{transform: `(0, ${offset/6}px)`}}
        />
        <div 
          className='absolute w-full font-bold flex-center top-[26%] left-10 mx-auto z-[5]'
          style={{transform: `translate(0, ${offset}px)`}}
        >
          <div className="flex_col text-[200px] text-center leading-none font-black lg_logo_shadow text-white">
            <span>SPARKLE</span>
            <span>TALE</span>
          </div>
        </div>
        <img 
          src={Layer07} 
          alt='layer_07' 
          className={`w-full h-full object-cover absolute -left-8 inset-0 z-[8]`} 
          style={{
            translate: -(offset/5),
          }} 
        />
        <img
          src={Layer08} 
          alt='layer_08' 
          className='w-full h-full object-cover left-10 absolute z-[9]' 
          style={{
            translate: (offset/5),
          }}
        />

      </div>

      <div className='w-full h-[1000px]  relative z-[1]'>
        content
      </div>
    </div>
  )
}

export default Home