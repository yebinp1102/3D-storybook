import StarFull from '../../public/images/starFull.svg';
import StarHalf from '../../public/images/starHalf.svg';
import Eye from '../../public/images/eye.svg';
import Book from '../../public/images/book.svg';
import PlusCircle from '../../public/images/plusCircle.svg';
import Award from '../../public/images/award.svg'
import Plus from '../../public/images/plus.svg';
import Cart from '../../public/images/cart.svg';
import { useAddToCart, useGetTemplate } from '../lib/queriesAndMutations';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TemplateItem } from '../types';
import { toast } from 'react-toastify';
import { useUserContext } from '../context/AuthContext';

const Detail = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [template, setTemplate] = useState<TemplateItem>(null!);
  const {data: fetchedtemplate, isPending: isGettingTemplate} = useGetTemplate(id!);
  const {mutateAsync: addToCart} = useAddToCart();
  const {checkAuthUser} = useUserContext();

  const handleAddToCart = async (id: string) => {
    const responseStatus = await addToCart(id);
    if(responseStatus !== 200){
      toast.info(responseStatus);
    }else{
      toast.info('장바구니에 담겼습니다.');
      checkAuthUser();
    }
    
  }

  useEffect(() => {
    setTemplate(fetchedtemplate);
  },[fetchedtemplate])

  if(isGettingTemplate || !fetchedtemplate){
    return <h1>Loading . . .</h1>
  }


  return (
    <div>
      <div className="w-full flex_col relative pb-28">
        <img 
          src={`${import.meta.env.VITE_SERVER_URL}/${template?.images}`}
          alt='bg_banner'
          className='absolute w-full object-cover h-[700px] top-0 left-0 z-1'
        />
        <div className="w-full absolute mt-[300px] h-[400px] bg-gradient-to-t from-slate-100 to-slate-100/0"></div>

        <div className='flex_col gap-12 mt-[350px] z-10 max-w-7xl w-full mx-auto p-8'>
          {/* 컨텐츠 소개 */}
          <div className="flex_col">

            {/* top */}
            <div className='flex-between border-b-2 border-black pb-4'>

              <h1 className='text-3xl font-bold mb-2 '>{template?.title} (2024)</h1>

              {/* btns */}
              <ul className='flex gap-4 text-sm'>
                <button className='bg-primary-main flex-center gap-2 text-slate-600 px-4 py-1 rounded-md'>
                  <img src={Award} alt='award_icon' className='w-5' />
                  Top 10
                </button>

                <button className='bg-white border border-primary-main flex-center gap-1.5 px-6 py-1 bg-opacity-70 text-slate-600 rounded-md'>
                  <img src={Cart} alt='award_icon' className='w-[18px]' />
                  카트 담기
                </button>
              </ul>
            </div>

            {/* bottom */}
            <div className='py-4 flex flex_col lg:flex-row gap-8'>
              <div className="flex gap-8 flex-1">
                {/* img */}
                <div className="flex_col gap-4 w-[280px]">
                  <img 
                    src={`${import.meta.env.VITE_SERVER_URL}/${template?.images}`}
                    alt='동화_이미지'
                    className='border max-w-[280px] w-full h-[340px] relative object-cover'
                  />
                  <ul className='flex_col gap-4'>
                    <button onClick={() => navigate('/explore_projects')} className='bg-primary-main border flex-center gap-1.5 text-slate-700 shadow-md py-1 rounded-md'>
                      <img src={Book} alt='book_icon' className='w-6' />
                      지금 보기
                    </button>
                    <button 
                      onClick={() => handleAddToCart(template._id)}
                      className='bg-white border py-1 shadow-md rounded-md flex-center gap-1.5'
                    >
                      <img src={Cart} alt='book_icon' className='w-[17px]' />
                      카트에 담기
                    </button>
                  </ul>
                </div>

                {/* descript */}
                <div className="flex_col mt-10 flex-1">
                  {/* details */}
                  <div className="flex_col w-full">
                    <p className='text-lg font-semibold mb-4'>템플릿 관련 정보 </p>
                    <ul className="flex gap-5 items-center text-sm border-y py-3 border-black">
                      <li className='flex gap-2 text-slate-600'>
                        <img src={Eye} alt='eye' className='w-5' /> 35,437</li>
                      <li className='flex'>
                        <img src={StarFull} alt='star' className='w-5' />
                        <img src={StarFull} alt='star' className='w-5' />
                        <img src={StarFull} alt='star' className='w-5' />
                        <img src={StarFull} alt='star' className='w-5' />
                        <img src={StarHalf} alt='star' className='w-5' />
                      </li>
                      <p className='border-r border-slate-700 pr-4'>전체이용가</p>
                      <p>2024</p>
                    </ul>
                      
                    {/* storyline */}
                    <div className="flex_col gap-3 mt-8 ">
                      <h3 className='text-lg font-semibold text-emerald-500'>[ 상세정보 ]</h3>
                      <p className=' leading-8'>
                        {template?.description}
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* gallery */}
              <div className="flex_col gap-3 max-w-[200px]">
                <h1 className='text-xl'>갤러리</h1>
                <img 
                  src={`${import.meta.env.VITE_SERVER_URL}/${template?.images}`} 
                  alt="갤러리01" className='min-w-[180px] w-full object-cover h-[100px] bg-black border' 
                />
                <ul className=" grid grid-cols-3 gap-3">
                  <img src={`${import.meta.env.VITE_SERVER_URL}/${template?.images}`} alt='갤02' className='w-full object-cover bg-black border h-[55px]' />
                  <img src={`${import.meta.env.VITE_SERVER_URL}/${template?.images}`} alt='갤03' className='w-full object-cover bg-black border h-[55px]' />
                  <div className='w-full bg-white border h-[55px] text-xs flex-center'>
                    <img src={Plus} alt='plus' className='w-3 mr-0.5' />
                    더보기
                  </div>
                </ul>
              </div>
            </div>

          </div>

          {/* 추천 동화 */}
          <div className="flex_col gap-6">
            <div className="flex items-center gap-2 border-y border-slate-500 p-3 ">
              <img src={Book} alt='book' className='w-9' />
              <h3 className='font-semibold text-lg'>유사한 다른 동화</h3>
            </div>

            <ul className="flex gap-8 text-sm px-4">
              {/* 01 */}
              <li className='flex_col flex-1'>
                <div className="bg-white w-full h-[250px]"></div>
                <h3 className='mt-3 mb-1 text-base font-semibold'>Title 01</h3>
                <p className='text-slate-700'>Writer 01</p>
                <div className="flex mt-1">
                  <img src={StarFull} alt='star' className='w-4' />
                  <img src={StarFull} alt='star' className='w-4' />
                  <img src={StarFull} alt='star' className='w-4' />
                  <img src={StarFull} alt='star' className='w-4' />
                  <img src={StarFull} alt='star' className='w-4' />
                  <span className='ml-2'>4.5</span>
                </div>
              </li>

              {/* 02 */}
              <li className='flex_col flex-1'>
                <div className="bg-white w-full h-[250px]"></div>
                <h3 className='mt-3 mb-1 text-base font-semibold'>Title 01</h3>
                <p className='text-slate-700'>Writer 01</p>
                <div className="flex mt-1">
                  <img src={StarFull} alt='star' className='w-4' />
                  <img src={StarFull} alt='star' className='w-4' />
                  <img src={StarFull} alt='star' className='w-4' />
                  <img src={StarFull} alt='star' className='w-4' />
                  <img src={StarFull} alt='star' className='w-4' />
                  <span className='ml-2'>4.5</span>
                </div>
              </li>

              {/* 03 */}
              <li className='flex_col flex-1'>
                <div className="bg-white w-full h-[250px]"></div>
                <h3 className='mt-3 mb-1 text-base font-semibold'>Title 01</h3>
                <p className='text-slate-700'>Writer 01</p>
                <div className="flex mt-1">
                  <img src={StarFull} alt='star' className='w-4' />
                  <img src={StarFull} alt='star' className='w-4' />
                  <img src={StarFull} alt='star' className='w-4' />
                  <img src={StarFull} alt='star' className='w-4' />
                  <img src={StarFull} alt='star' className='w-4' />
                  <span className='ml-2'>4.5</span>
                </div>
              </li>

              {/* 04 */}
              <li className='flex_col flex-1'>
                <div className="bg-white w-full h-[250px]"></div>
                <h3 className='mt-3 mb-1 text-base font-semibold'>Title 01</h3>
                <p className='text-slate-700'>Writer 01</p>
                <div className="flex mt-1">
                  <img src={StarFull} alt='star' className='w-4' />
                  <img src={StarFull} alt='star' className='w-4' />
                  <img src={StarFull} alt='star' className='w-4' />
                  <img src={StarFull} alt='star' className='w-4' />
                  <img src={StarFull} alt='star' className='w-4' />
                  <span className='ml-2'>4.5</span>
                </div>
              </li>

              {/* 05 */}
              <li className='flex_col flex-1'>
                <div className="bg-white w-full h-[250px]"></div>
                <h3 className='mt-3 mb-1 text-base font-semibold'>Title 01</h3>
                <p className='text-slate-700'>Writer 01</p>
                <div className="flex mt-1">
                  <img src={StarFull} alt='star' className='w-4' />
                  <img src={StarFull} alt='star' className='w-4' />
                  <img src={StarFull} alt='star' className='w-4' />
                  <img src={StarFull} alt='star' className='w-4' />
                  <img src={StarFull} alt='star' className='w-4' />
                  <span className='ml-2'>4.5</span>
                </div>
              </li>
            </ul>

            <button className='bg-white py-2.5 rounded-md shadow-md my-3 flex-center gap-2.5'>
              <img src={PlusCircle} alt="plus" className='w-5' />
              다른 동화 둘러보기</button>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Detail