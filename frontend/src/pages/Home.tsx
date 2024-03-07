import { useEffect, useState } from 'react'

// layer images
import Layer01 from '../../public/images/home_layout/layer01.png'
import Layer02 from '../../public/images/home_layout/layer02.png'
import Layer03 from '../../public/images/home_layout/layer03.png'
import Layer04 from '../../public/images/home_layout/layer04.png'
import Layer05 from '../../public/images/home_layout/layer05.png'
import Layer06 from '../../public/images/home_layout/layer06.png'
import Layer07 from '../../public/images/home_layout/layer07.png'
import Layer08 from '../../public/images/home_layout/layer08.png'
import dots from '../../public/images/dots.png';
import Reveal from '../components/Reveal'

import Love from '../../public/images/love.png';
import Dream from '../../public/images/dream.png';
import Product from '../../public/images/product.png';

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

      <div className='max-w-7xl mx-auto h-[1000px] pt-48 relative'>
        <div className="flex_col pl-32 absolute top-[260px]">
          <Reveal>
            <h1 className='text-6xl font-black tracking-wide leading-tight'>
              <span className='text-emerald-400 text-7xl'>스파클 테일</span>
              에 &nbsp;오신 &nbsp;것을 <br/>환영합니다<span className='text-emerald-400 text-7xl ml-1'>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <p className='text-slate-700 mt-12 mb-16 font-semibold leading-[1.75] text-lg max-w-[750px]'>
              빛나는 동화세계, 스파클 테일은 신비로운 동화를 3D로 구현해서 제공하는 회사입니다.
              저희의 열정은 꿈과 상상력을 실현하고자는 바람에서 시작되었습니다. 스파클 테일은 어린이뿐 아니라 모든 연령대의 이들에게 즐거움을 주고, 
              긍정적인 메시지와 가치관을 전달하는 문화를 개척해 나가고 있습니다.
            </p>
          </Reveal>
          <button className='cursor-pointer w-fit transition-all hover:scale-105 text-lg font-semibold bg-emerald-400 text-white py-2 px-8 shadow-md border rounded-lg'>둘러보기</button>
        </div>
        <img
          src={dots}
          alt='dots'
          className='absolute w-[50%] object-cover h-[600px] right-20 z-[1] opacity-40'
        />
      </div>

      <div className="w-full h-[1000px] pt-16 bg-primary-emrald text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex_col">
            <Reveal>
              <p className='text-4xl leading-[1.25] font-black border-l-[5px] pl-8 border-white'>스파클 테일의<br/>비전</p>
            </Reveal>
            <Reveal>
              <p className='pl-10 mt-6 text-[1.1rem] w-[70%]'>
              뽀줄도갈고 섭기뀽뎐셔도, 퇄커앙은 내그간에다 귕잘면 내노돊는 르비피핸오를. 
              쁘웅질궐 입세 공맜동 서러셔인란아서 로바어로 긍즈뎌믐홍이 대댜말자 홌툑서어다 질껬과 갠액도 극즉은. 
              나년뜨을어 허깅잣이가 고힏난아 라한눌다 댄드 촐잔의, 초미누읏에 과디요 겐노사차새오도 띤우으라, 요활오에에. 
              츤징쟁네가 공역캘벼의 도러안지 소겨고 도심알으로서 려란디에의. 
              </p>
            </Reveal>
          </div>

          <div className='flex-center gap-12 relative top-20 flex-wrap'>
            <div className='flex_col flex-1 w-[380px] bg-emerald-700 p-5 shadow-lg border-white border rounded-md'>
              <h1 className='text-xl font-bold'>01.</h1>
              <div className="relative flex-center mt-4">
                <div className="flex-center bg-primary-main relative w-64 h-64 rounded-full">
                  <img src={Product} alt="product" className='w-48' />
                </div>
              </div>
              <h3 className='text-2xl tracking-wider font-black text-center mt-8 mb-4'>Product</h3>
              <div className="flex-center">

              </div>
              <p className='text-sm px-8 text-center'>스파클 테일은 아름다운 3D 동화를 제공합니다. 이는 색다른 시각적 경험을 제공합니다. 
                이야기에서 비롯되는 교훈과 가치를 공유하며 서로에게 긍정적인 영향을 줍니다.
              </p>
              <div className="flex-center">
                <button className='cursor-pointer bg-primary-main w-fit py-1.5 px-8 mb-4 shadow-md rounded-md mt-8 font-semibold'>더보기</button>
              </div>
            </div>

            <div className='flex_col flex-1 w-[380px] bg-emerald-700 p-5 shadow-lg border-white border rounded-md'>
              <h1 className='text-xl font-bold'>02.</h1>
              <div className="relative flex-center mt-4">
                <div className="flex-center bg-primary-main relative w-64 h-64 rounded-full">
                  <img src={Love} alt="product" className='w-48' />
                </div>
              </div>
              <h3 className='text-2xl tracking-wider font-black text-center mt-8 mb-4'>Happiness</h3>
              <div className="flex-center">

              </div>
              <p className='text-sm px-8 text-center'>스파클 테일은 아름다운 3D 동화를 제공합니다. 이는 색다른 시각적 경험을 제공합니다. 
                이야기에서 비롯되는 교훈과 가치를 공유하며 서로에게 긍정적인 영향을 줍니다.
              </p>
              <div className="flex-center">
                <button className='cursor-pointer bg-primary-main w-fit py-1.5 px-8 mb-4 shadow-md rounded-md mt-8 font-semibold'>더보기</button>
              </div>
            </div>

            <div className='flex_col flex-1 w-[380px] bg-emerald-700 p-5 shadow-lg border-white border rounded-md'>
              <h1 className='text-xl font-bold'>03.</h1>
              <div className="relative flex-center mt-4">
                <div className="flex-center bg-primary-main relative w-64 h-64 rounded-full">
                  <img src={Dream} alt="product" className='w-48' />
                </div>
              </div>
              <h3 className='text-2xl tracking-wider font-black text-center mt-8 mb-4'>Dream</h3>
              <div className="flex-center">

              </div>
              <p className='text-sm px-8 text-center'>스파클 테일은 아름다운 3D 동화를 제공합니다. 이는 색다른 시각적 경험을 제공합니다. 
                이야기에서 비롯되는 교훈과 가치를 공유하며 서로에게 긍정적인 영향을 줍니다.
              </p>
              <div className="flex-center">
                <button className='cursor-pointer bg-primary-main w-fit py-1.5 px-8 mb-4 shadow-md rounded-md mt-8 font-semibold'>더보기</button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="h-[1000px] max-w-7xl mx-auto">
        hi
      </div>
    </div>
  )
}

export default Home