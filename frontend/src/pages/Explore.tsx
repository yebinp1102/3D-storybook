import Star from '../../public/images/starFull.svg';
import { useEffect, useState } from 'react';
import { useGetAllTemplates } from '../lib/queriesAndMutations';
import TemplateList from '../components/TemplateList';
import { TemplateItem } from '../types';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/AuthContext';
import ImageLoad from '../components/ImageLoad';
import ExploreLoading from './ExploreLoading';

const Explore = () => {
  const navigate = useNavigate();
  const [hoverIdx, setHoverIdx] = useState<number>(0);
  const {data: allTemplates, isPending: isGettingTemplates} = useGetAllTemplates()
  const {user} = useUserContext();

  const handleHover = (idx:number) => {
    if(hoverIdx !== idx) setHoverIdx(idx);
  }

  useEffect(() => {
    return () => setHoverIdx(0);
  }, [])

  if(isGettingTemplates || !allTemplates){
    return <ExploreLoading />
  }

  return (
    <div className="w-full flex_col relative transition-all">
      <ImageLoad 
        bgCSS="blur-load w-full right-0 h-[600px] bg-cover bg-center bg-no-repeat absolute z-0"
        bgImg={allTemplates[hoverIdx]?.images[1]}
        imgCSS="w-full right-0 h-full object-cover object-center"
        img={allTemplates[hoverIdx]?.images[0]}
      />

      <div className='bg-gradient-to-r from-white to-white/0 w-full h-[600px] absolute'></div>
      <div className='bg-gradient-to-r from-white/50 to-white/0 w-full h-[600px] absolute'></div>

      <div className='relative flex_col justify-center max-w-7xl p-12 w-full mx-auto h-[600px]'>
        <h1 className='text-4xl font-bold'>{allTemplates[hoverIdx]?.title}</h1>
        
        <div className="flex_col mt-8 text-slate-600">
          <ul className="flex gap-6 mb-12 items-center font-semibold">
            <li className='border-primary-main border-2 py-0.5 px-3.5 flex gap-1'>
            <img src={Star} alt="star" className='w-6' />전체이용가</li>
            <li className='flex gap-2 items-center'>
              판매량 : {allTemplates[hoverIdx]?.sold}
            </li>
            <li className='flex gap-2 items-center font-semibold'>
          </li>
          </ul>
        </div>

        <p className='w-[60%] text-slate-600'>{allTemplates[hoverIdx]?.description}</p>

        <div className="flex gap-6 mt-12">
          <button 
            className='border hover:scale-105 bg-primary-main text-white px-6 py-2.5 rounded-full shadow-lg border-white'>
              {allTemplates[hoverIdx]?.price.toLocaleString()} 원(won)
          </button>
          <button 
            onClick={() => navigate(`/explore/detail/${allTemplates[hoverIdx]?._id}`)}
            className='border w-fit hover:scale-105 bg-blue-500 text-white px-6 py-2.5 rounded-full shadow-lg border-white'
          >
              더보기 &nbsp; &gt; 
          </button>
        </div>

      </div>
      
      <div className='flex_col max-w-7xl mx-auto w-full relative white-shadow-box -top-20  p-8'>
        {user.isAdmin &&  
          <button 
            onClick={() => navigate('/upload_template')}
            className='border self-end border-primary-main w-fit text-primary-main py-1.5 px-6 rounded-lg mb-6'
          >
            + 새 템플릿 정보 등록
          </button>
        }
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
          {allTemplates.length > 0 && allTemplates?.map((temp: TemplateItem, idx: number) => (
            <TemplateList key={temp._id} temp={temp} handleHover={handleHover} idx={idx} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Explore