import Layer01 from '../../public/images/home_layout/layer01.png'
import Layer02 from '../../public/images/home_layout/layer02.png'
import Layer03 from '../../public/images/home_layout/layer03.png'
import Layer04 from '../../public/images/home_layout/layer04.png'
import Layer05 from '../../public/images/home_layout/layer05.png'
import Layer06 from '../../public/images/home_layout/layer06.png'
import Layer07 from '../../public/images/home_layout/layer07.png'
import Layer08 from '../../public/images/home_layout/layer08.png'

const Home = () => {
  return (
    <div>

      {/* Banner Image */}
      <div className="relative h-[1000px] w-screen bg-gradient-to-b from-[#81CA43] to-[#FFE3DD]">
        <img src={Layer01} alt='layer_01' className='w-full h-full object-cover absolute' />
        <img src={Layer02} alt='layer_02' className='w-full h-full object-cover absolute' />
        <img src={Layer03} alt='layer_03' className='w-full h-full object-cover absolute' />
        <img src={Layer04} alt='layer_04' className='w-full h-full object-cover absolute' />
        <img src={Layer05} alt='layer_05' className='w-full h-full object-cover absolute' />
        <img src={Layer06} alt='layer_06' className='w-full h-full object-cover absolute -bottom-40' />
        <img src={Layer07} alt='layer_07' className='w-full h-full object-cover absolute' />
        <img src={Layer08} alt='layer_08' className='w-full h-full object-cover absolute' />

      </div>

      <div className='w-full h-[1000px] bg-gradient-to-b from-[#81CA43] to-[#FFE3DD]'>
        content
      </div>
    </div>
  )
}

export default Home