import Star from '../../public/images/starFull.svg';
import { useEffect, useState } from 'react';
import { useGetAllTemplates } from '../lib/queriesAndMutations';
import TemplateList from '../components/TemplateList';
import { TemplateItem } from '../types';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/AuthContext';

const Explore = () => {
  const navigate = useNavigate();
  const [templates, setTemplates] = useState<TemplateItem[]>();
  const [hoverIdx, setHoverIdx] = useState<number>(0);
  const {data: allTemplates, isPending: isGettingTemplates} = useGetAllTemplates()
  const {user} = useUserContext();

  const handleHover = (idx:number) => {
    if(hoverIdx !== idx) setHoverIdx(idx);
  }

  useEffect(() => {
    setTemplates(allTemplates);
    return () => setHoverIdx(0);
  }, [allTemplates])

  if(isGettingTemplates || !templates){
    return <h1>Loading...</h1>
  }

  return (
    <div className="w-full flex_col relative transition-all">
      <img 
        src={`${import.meta.env.VITE_SERVER_URL}/${templates[hoverIdx]?.images[0]}`}
        alt='banner'
        className='w-full right-0 h-[600px] object-cover absolute'
      />
      <div className='bg-gradient-to-r from-white to-white/0 w-full h-[600px] absolute'></div>
      <div className='bg-gradient-to-r from-white/50 to-white/0 w-full h-[600px] absolute'></div>

      <div className='relative flex_col justify-center max-w-7xl p-12 w-full mx-auto h-[600px]'>
        <h1 className='text-4xl font-bold'>{templates[hoverIdx]?.title}</h1>
        
        <div className="flex_col mt-8 text-slate-600">
          <ul className="flex gap-6 mb-12 items-center font-semibold">
            <li className='border-primary-main border-2 py-0.5 px-4'>전체이용가</li>
            <li className='flex gap-2 items-center'>
              $ 판매량 : {templates[hoverIdx]?.views}
            </li>
            <li className='flex gap-2 items-center font-semibold'>
            <img src={Star} alt="star" className='w-6' />별점 : 4.5
          </li>
          </ul>
        </div>

        <p className='w-[60%] text-slate-600'>{templates[hoverIdx]?.description}</p>

        <div className="flex gap-6 mt-12">
          <button 
            className='border hover:scale-105 bg-primary-main text-white px-6 py-2.5 rounded-full shadow-lg border-white'>
              {templates[hoverIdx]?.price.toLocaleString()} 원(won)
          </button>
          <button 
            onClick={() => navigate(`/explore/detail/${templates[hoverIdx]?._id}`)}
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
            + 새로운 템플릿 추가하기
          </button>
        }
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-8  h-full w-full'>
          {templates?.map((temp: TemplateItem, idx: number) => (
            <TemplateList key={temp._id} temp={temp} handleHover={handleHover} idx={idx} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Explore