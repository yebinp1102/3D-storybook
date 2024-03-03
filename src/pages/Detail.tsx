import Bg from '../../public/images/Royal_Heath.png'
import StarFull from '../../public/images/starFull.svg';
import StarHalf from '../../public/images/starHalf.svg';
import Eye from '../../public/images/eye.svg';
import Book from '../../public/images/book.svg';
import PlusCircle from '../../public/images/plusCircle.svg';

const Detail = () => {
  return (
    <div>
      <div className="w-full flex_col relative bg-blue-500 pb-28">
        <img 
          src={Bg}
          alt='bg_banner'
          className='absolute w-full object-cover h-[700px] top-0 left-0 z-1'
        />

        <div className='flex_col gap-12 mt-[400px] z-10 bg-white bg-opacity-40 max-w-7xl w-full mx-auto p-8'>
          {/* 컨텐츠 소개 */}
          <div className="flex_col">
            <div className='flex-between border-b-2 border-white pb-4'>
              <h1>Story Title (2024) </h1>
              <ul className='flex gap-4 text-sm'>
                <button className='bg-white px-6 py-0.5 rounded-md'>버튼1</button>
                <button className='bg-white px-6 py-0.5 bg-opacity-60 rounded-md'>버튼2</button>
                <button className='bg-white px-6 py-0.5 bg-opacity-60 rounded-md'>버튼3</button>
              </ul>
            </div>
            <div className='py-4 flex gap-8'>

              {/* img */}
              <div className="flex_col gap-4">
                <img 
                  src=""
                  alt='동화_이미지'
                  className='bg-white w-[220px] h-[340px]'
                />
                <ul className='flex_col gap-4'>
                  <button className='bg-white py-1 rounded-md'>지금 읽기</button>
                  <button className='bg-white bg-opacity-60 py-1 rounded-md'>리스트에 추가하기</button>
                  <button className='bg-white bg-opacity-60 py-1 rounded-md'>카트에 담기</button>
                </ul>
              </div>

              {/* descript */}
              <div className="flex_col">
                {/* details */}
                <div className="flex gap-8 py-4">
                  <div className="flex_col w-full">
                    <div className="flex items-center gap-4">
                      <h3 className='text-xl'>Story Title</h3>
                      <span className='text-xs border border-blue-600 text-blue-600 px-3 py-0.5'>전체이용등급</span>
                    </div>
                    <p className='text-sm py-3 border-b border-white'>스토리에 대한 한줄 설명 작성. 스토리에 대한 한줄 설명 작성. </p>
                    <ul className="flex gap-5 items-center text-sm border-b py-3 border-white">
                      <li className='flex gap-2'><img src={Eye} alt='eye' className='w-5' /> 35,437</li>
                      <li className='flex'>
                        <img src={StarFull} alt='star' className='w-5' />
                        <img src={StarFull} alt='star' className='w-5' />
                        <img src={StarFull} alt='star' className='w-5' />
                        <img src={StarFull} alt='star' className='w-5' />
                        <img src={StarHalf} alt='star' className='w-5' />
                      </li>
                      <p className='border-r border-white pr-4'>전체이용가</p>
                      <p className='border-r border-white pr-4'>지은이 이름</p>
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
                  <div className="flex_col gap-3 pb-4">
                    <h1 className='text-xl'>갤러리</h1>
                    <img src="" alt="갤러리01" className='w-[180px] h-[100px] border' />
                    <ul className="flex gap-3">
                      <img src='' alt='갤02' className='w-1/3 border h-[55px]' />
                      <img src='' alt='갤03' className='w-1/3 border h-[55px]' />
                      <img src='' alt='더보기' className='w-1/3 bg-primary-darkred border h-[55px]' />
                    </ul>
                  </div>
                </div>

                {/* storyline */}
                <div className="flex_col gap-4 px-4 border-t pt-4 border-white">
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
            <div className="flex items-center gap-2 border-y border-white p-3 ">
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