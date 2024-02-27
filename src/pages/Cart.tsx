import removeIcon from '../../public/images/close.svg'
import indicatorIcon from '../../public/images/indicator.svg';

const Cart = () => {
  return (
    <div className="max-w-7xl mx-auto px-8">

      <div className="flex justify-evenly my-12">
        {/* svg banner */}
        <img 
          src={indicatorIcon}
          alt='indicator_icon'
          className='w-60'
        />

        <div className='flex flex-col px-12 justify-center items-center'>
          <h1 className=' text-4xl font-black mb-12'>나의 장바구니</h1>

          {/* progress */}
          <div className="flex gap-28 relative">
            <div className='absolute w-full top-5 right-0 bg-white border h-[8px]'></div>
            <div className='relative bg-white border-blue-400 w-12 h-12 flex items-center justify-center p-4 border rounded-full'>
              <div className='absolute flex items-center justify-center text-white text-lg font-bold bg-blue-700 w-8 h-8 rounded-full'>
                1
              </div>
              <div className="absolute w-16 -bottom-8 left-0 text-sm font-semibold text-blue-900">장바구니</div>
            </div>

            <div className='relative bg-white w-12 h-12 flex items-center justify-center p-4 border rounded-full'>
              <div className='absolute flex items-center justify-center text-blue-300 text-lg font-bold bg-primary-skyblue w-8 h-8 rounded-full'>
                2
              </div>
              <div className="absolute w-16 -bottom-8 left-0 text-sm font-semibold text-blue-300">주문정보</div>
            </div>

            <div className='relative bg-white w-12 h-12 flex items-center justify-center p-4 border rounded-full'>
              <div className='absolute flex items-center justify-center text-blue-300 text-lg font-bold bg-primary-skyblue w-8 h-8 rounded-full'>
                3
              </div>
              <div className="absolute w-16 -bottom-8 left-0 text-sm font-semibold text-blue-300">결제하기</div>
            </div>
          </div>


        </div>
      </div>


      {/* item 설명 */}
      <ul className="flex gap-7 text-blue-500 border font-semibold bg-primary-skyblue rounded-md py-2 px-4 shadow-md">
        <li className="w-60">상품 이미지 <span className="font-medium text-slate-400 text-sm">(Product Image)</span></li>
        <div className="flex flex-1 justify-between">
          <li>상품정보 <span className="font-medium text-slate-400 text-sm">(Product Information)</span></li>
          <li className="w-[270px]">가격 <span className="font-medium text-slate-400 text-sm">(Price)</span></li>
        </div>
      </ul>

      {/* item example */}
      <div className="flex items-center justify-between bg-white rounded-lg p-4 border-slate-200">
        <div className='flex gap-8 items-center'>
          <img 
            src=""
            alt="item_img"
            className="border w-60 h-40"
          />

          <div className="flex flex-col ">
            <h3 className="font-bold text-lg mb-2">뭉게공항에 온 밍키</h3>
            <p>상품코드: AGS36812</p>
          </div>
        </div>

        <div className="flex gap-8">
          <div className='w-52 text-blue-600 font-bold'>
            12,300 원(won)
          </div>

          <img 
            src={removeIcon}
            alt='remove_icon'
            className='w-7 cursor-pointer'
          />
        </div>
      </div>
      <div className="flex items-center justify-between bg-white rounded-lg p-4 border border-slate-200">
        <div className='flex gap-8 items-center'>
          <img 
            src=""
            alt="item_img"
            className="border w-60 h-40"
          />

          <div className="flex flex-col ">
            <h3 className="font-bold text-lg mb-2">뭉게공항에 온 밍키</h3>
            <p>상품코드: AGS36812</p>
          </div>
        </div>

        <div className="flex gap-8">
          <div className='w-52 text-blue-600 font-bold'>
            12,300 원(won)
          </div>

          <img 
            src={removeIcon}
            alt='remove_icon'
            className='w-7 cursor-pointer'
          />
        </div>
      </div>

      {/* total price */}
      <div className='w-full flex justify-end'>
        <div className='bg-white mt-8 shadow-lg border rounded-lg p-4 w-fit min-w-[30rem]'>
          <p className='border-b border-slate-300 py-4'>총 금액 :</p>
          <ul className='py-6 border-b border-slate-300 flex flex-col gap-4'>
            <li>장바구니 총합 : 24,600 원(won)</li>
            <li>배송비 : 3000 원(won)</li>
            <li>할인가격 : 0 원(won)</li>
            <li>전체 총합 : 27,600 원(won)</li>
          </ul>
          <p className='py-6'>최종 결제 금액 : 27,600 원(won)</p>
        </div>
      </div>

    </div>
  )
}

export default Cart