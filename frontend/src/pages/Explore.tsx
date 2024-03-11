import Eye from '../../public/images/eye.svg';
import Star from '../../public/images/starFull.svg';
import { useEffect, useState } from 'react';
import { useGetAllTemplates } from '../lib/queriesAndMutations';
import TemplateList from '../components/TemplateList';
import { TemplateItem } from '../types';

const Explore = () => {
  const [templates, setTemplates] = useState<TemplateItem[]>([]);
  const [hoverIdx, setHoverIdx] = useState<number>(0);
  const {data: allTemplates, isPending: isGettingTemplates} = useGetAllTemplates()

  const handleHover = (idx:number) => {
    if(hoverIdx !== idx) setHoverIdx(idx);
  }

  useEffect(() => {
    setTemplates(allTemplates);
    return () => setHoverIdx(0);
  }, [allTemplates])

  if(isGettingTemplates && !templates){
    return <h1>Loading...</h1>
  }

  return (
    <div className="w-full flex_col relative transition-all">
      <img 
        src={`${import.meta.env.VITE_SERVER_URL}/${templates[hoverIdx].images[0]}`}
        alt='banner'
        className='w-full h-[600px] object-cover absolute'
      />
      <div className='bg-gradient-to-r from-white to-white/0 w-full h-[600px] absolute'></div>

      <div className='relative flex_col justify-center gap-8 max-w-7xl p-12 w-full mx-auto h-[600px]'>
        <h1 className='text-4xl font-bold mb-6'>{templates[hoverIdx].title}</h1>
        
        <div className="flex_col gap-3.5">
          <ul className="flex gap-8 text-primary-main items-center text-lg font-semibold">
            <li className='border-primary-main border-2 py-1 px-5'>전체이용가</li>
            <li className='flex gap-2 items-center'>
              <img src={Eye} className='w-8' />조회수 : {templates[hoverIdx].views}
            </li>
          </ul>
          <li className='flex gap-2 text-primary-main items-center text-lg font-semibold'>
            <img src={Star} alt="star" className='w-8' />
            별점 : 4.5
          </li>
        </div>

        <div className="flex gap-6 mt-6">
          <button 
            className='border hover:scale-105 bg-primary-main text-white px-6 py-2.5 rounded-full shadow-lg border-white'>
              {templates[hoverIdx].price} 원(won)
          </button>
          <button 
            className='border w-fit hover:scale-105 bg-blue-500 text-white px-6 py-2.5 rounded-full shadow-lg border-white'>
              더보기 &nbsp; &gt; 
          </button>
        </div>

      </div>
      
      <div className='max-w-7xl mx-auto w-full relative'>
        <div className='grid grid-cols-3 gap-8 p-8 relative h-full -top-20 white-shadow-box w-full'>
          {templates?.map((temp: TemplateItem, idx: number) => (
            <TemplateList key={temp._id} temp={temp} handleHover={handleHover} idx={idx} />
          ))}


        </div>
      </div>
    </div>
  )
}

export default Explore