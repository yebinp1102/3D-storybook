import Bg from '../../public/images/thumbnail.png'
import StarFull from '../../public/images/starFull.svg';
import StarHalf from '../../public/images/starHalf.svg';
import Eye from '../../public/images/eye.svg';
import Book from '../../public/images/book.svg';
import PlusCircle from '../../public/images/plusCircle.svg';
import Award from '../../public/images/award.svg'
import Plus from '../../public/images/plus.svg';
import Cart from '../../public/images/cart.svg';

const Detail = () => {
  return (
    <div>
      <div className="w-full flex_col relative pb-28 bg-indigo-300">
        <img 
          src={Bg}
          alt='bg_banner'
          className='absolute w-full object-cover h-[700px] top-0 left-0 z-1'
        />

        <div className='flex_col gap-12 mt-[400px] z-10 max-w-7xl w-full mx-auto p-8'>
          {/* 컨텐츠 소개 */}
          <div className="flex_col">
            <div className='flex-between border-b-2 border-primary-yellow pb-4'>
              <h1 className='text-2xl font-bold text-primary-yellow'>Story Title (2024)</h1>
              {/* btns */}
              <ul className='flex gap-4 text-sm'>
                
                <button className='bg-primary-yellow flex-center gap-2 text-slate-600 px-4 py-1 rounded-md'>
                  <img src={Award} alt='award_icon' className='w-5' />
                  Top 10
                </button>

                <button 
                  className='bg-white px-3 flex-center gap-1 py-1 bg-opacity-50 text-slate-600 rounded-md'
                >
                  <img src={Plus} alt='plus_icon' className='w-[18px]' />
                  리스트 추가
                </button>

                <button className='bg-white flex-center gap-1.5 px-6 py-1 bg-opacity-50 text-slate-600 rounded-md'>
                  <img src={Cart} alt='award_icon' className='w-[18px]' />
                  카트 담기
                </button>
              </ul>
            </div>

            <div className='py-4 flex gap-8'>

              {/* img */}
              <div className="flex_col gap-4">
                <img 
                  src={Bg}
                  alt='동화_이미지'
                  className='border min-w-[220px] h-[340px] relative w-full object-cover'
                />
                <ul className='flex_col gap-4'>
                  <button className='bg-primary-yellow border flex-center gap-1.5 text-slate-700 shadow-md py-1 rounded-md'>
                    <img src={Book} alt='book_icon' className='w-6' />
                    지금 읽기
                  </button>
                  <button className='bg-white border shadow-md py-1 rounded-md flex-center gap-1.5'>
                    <img src={Plus} alt='book_icon' className='w-4' />
                    리스트에 추가하기
                  </button>
                  <button className='bg-white border py-1 shadow-md rounded-md flex-center gap-1.5'>
                    <img src={Cart} alt='book_icon' className='w-[17px]' />
                    카트에 담기
                  </button>
                </ul>
              </div>

              {/* descript */}
              <div className="flex_col">
                {/* details */}
                <div className="flex gap-8 py-4">
                  <div className="flex_col w-full">
                    <div className="flex items-center gap-4">
                      <h3 className='text-xl'>Story Title</h3>
                      <span className='text-xs border border-primary-yellow text-primary-yellow px-3 py-0.5'>전체이용등급</span>
                    </div>
                    <p className='text-sm py-3 border-b border-primary-yellow'>스토리에 대한 한줄 설명 작성. 스토리에 대한 한줄 설명 작성. </p>
                    <ul className="flex gap-5 items-center text-sm border-b py-3 border-primary-yellow">
                      <li className='flex gap-2 text-primary-yellow'>
                        <img src={Eye} alt='eye' className='w-5' /> 35,437</li>
                      <li className='flex'>
                        <img src={StarFull} alt='star' className='w-5' />
                        <img src={StarFull} alt='star' className='w-5' />
                        <img src={StarFull} alt='star' className='w-5' />
                        <img src={StarFull} alt='star' className='w-5' />
                        <img src={StarHalf} alt='star' className='w-5' />
                      </li>
                      <p className='border-r border-primary-yellow pr-4'>전체이용가</p>
                      <p className='border-r border-primary-yellow pr-4'>지은이 이름</p>
                      <p>2024</p>
                    </ul>

                    {/* 디테일 & 등장인물 */}
                    <div className="flex items-center gap-20 p-4 px-8">
                      {/* detail */}
                      <div className="flex_col">
                        <h3 className='text-xl'>Detail</h3>
                        <ul className="flex_col text-sm font-semibold gap-3 mt-3">
                          <li>총괄: <span className='font-normal'>총괄자 이름</span></li>
                          <li>작가: <span className='font-normal'>작가 이름</span></li>
                          <li>언어: <span className='font-normal'>가능 언어 나열</span></li>
                          <li>출시: <span className='font-normal'>출시 일자</span></li>
                        </ul>
                      </div>

                      {/* 등장인물 */}
                      <div className="flex_col">
                        <h3 className='text-xl mb-4'>Cast</h3>
                        <ul className="flex_col gap-1.5">
                          <li className='flex gap-3 items-center text-sm'>
                            <div className="bg-white w-6 h-6 rounded-full"></div>
                            등장인물 01
                          </li>
                          <li className='flex gap-3 items-center text-sm'>
                            <div className="bg-white w-6 h-6 rounded-full"></div>
                            등장인물 01
                          </li>
                          <li className='flex gap-3 items-center text-sm'>
                            <div className="bg-white w-6 h-6 rounded-full"></div>
                            등장인물 01
                          </li>
                          <li className='flex gap-3 items-center text-sm'>
                            <div className="bg-white w-6 h-6 rounded-full"></div>
                            등장인물 01
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                  </div>

                  {/* gallery */}
                  <div className="flex_col gap-3 pb-4 max-w-[200px]">
                    <h1 className='text-xl'>갤러리</h1>
                    <img src={Bg} alt="갤러리01" className='min-w-[180px] w-full object-cover h-[100px] bg-black border' />
                    <ul className=" grid grid-cols-3 gap-3">
                      <img src={Bg} alt='갤02' className='w-full object-cover bg-black border h-[55px]' />
                      <img src={Bg} alt='갤03' className='w-full object-cover bg-black border h-[55px]' />
                      <div className='w-full bg-white border h-[55px] text-xs flex-center'>
                        <img src={Plus} alt='plus' className='w-3 mr-0.5' />
                        더보기
                      </div>
                    </ul>
                  </div>
                </div>

                {/* storyline */}
                <div className="flex_col gap-4 px-4 border-t pt-4 border-primary-yellow">
                  <h3 className='text-xl'>줄거리</h3>
                  <p>
                  우리는 Sparkle Tale에서 모든 제품을 제작할 때, 사랑과 행복을 중요시합니다. 
                  우리의 제품은 세계 각국의 다양한 문화와 역사를 담아 더욱 가치 있는 콘텐츠를 제공하고자 노력합니다.
                  우리는 이야기를 통해 아이들과 어른들 모두에게 즐거움을 주고, 어린이들에게 긍정적인 가치를 전달하고자 합니다. 
                  Sparkle Tale은 훌륭한 이야기와 흥미진진한 시각적 경험을 제공하여, 세계를 더 행복하고 환희로운 곳으로 만들기 위해 노력합니다.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* 추천 동화 */}
          <div className="flex_col gap-6">
            <div className="flex items-center gap-2 border-y border-primary-yellow p-3 ">
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