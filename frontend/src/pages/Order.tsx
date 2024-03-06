import { useNavigate } from 'react-router-dom'
import IndicatorIcon from '../../public/images/Indicator.svg'
import CheckIcon from '../../public/images/check.svg'

import PriceList from '../components/cart/PriceList'
import Step from '../components/cart/Step'
import { useState } from 'react'
import PaymentMethod from '../components/order/PaymentMethod'
import PointUsage from '../components/order/PointUsage'
import CouponUsage from '../components/order/CouponUsage'
import AddressInfo from '../components/order/AddressInfo'
import CustomerInfo from '../components/order/CustomerInfo'

const Order = () => {
  const navigate = useNavigate();
  const [consent, setConsent] = useState<boolean>(false);

  return (
    <div className="w-full px-8 pb-20 flex flex-col">

      {/* banner : svg + progress */}
      <div className="flex justify-evenly my-12 w-full max-w-7xl mx-auto">
        {/* svg banner */}
        <img src={IndicatorIcon} alt="indicator_icon" className="w-60" />

        <div className="flex flex-col px-12 justify-center items-center">
          <h1 className=" text-4xl font-black mb-12">주문정보 입력</h1>
          {/* progress */}
          <div className="flex gap-28 relative z-[10]">
            <div className="absolute w-full top-5 right-0 bg-white border h-[8px]"></div>
            <Step step={1} text="장바구니" isActive={false} />
            <Step step={2} text="주문정보" isActive={true} />
            <Step step={3} text="결제하기" isActive={false} />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-8 justify-center max-w-[88rem] w-full mx-auto">
    
        {/* left */}
        <div className="max-w-[740px] w-full flex flex-col gap-8">
          {/* 주문 고객 */}
          <CustomerInfo />

          {/* 배송지 */}
          <AddressInfo />

          {/* 쿠폰할인 */}
          <CouponUsage />

          {/* 포인트 사용 */}
          <PointUsage />

          {/* 결제 방법 선택 */}
          <PaymentMethod />
        </div>

        {/* right */}
        <div className="flex flex-col gap-8 max-w-[740px] w-full xl:w-[360px]">

          {/* 최종 결제 금액 */}
          <div className="white-shadow-box h-fit font-bold p-4 w-full">
            <p className="border-b-[1.5px] border-slate-300 text-xl pt-0 py-4">
              최종 결제 금액 :
            </p>
            <ul className="py-6 border-b-2 border-slate-300 flex flex-col gap-4">
              <PriceList
                text="주문금액 총합"
                price={`${Number(24600).toLocaleString()} 원`}
              />
              <PriceList
                text="배송비"
                price={`+ ${Number(3000).toLocaleString()} 원`}
              />
              <PriceList
                text="쿠폰할인 금액"
                price={`- ${Number(0).toLocaleString()} 원`}
              />
              <PriceList
                text="포인트 사용금액"
                price={`- ${Number(0).toLocaleString()} P`}
              />
              <PriceList text="금액 총합" price={`27,600 원`} />
            </ul>
            <div className="flex flex-col gap-4 pt-5 pb-2">
              <div className='flex justify-between text-blue-600'>
                총 결제 예정 금액 :
                <p className="text-xl">27,600 원</p>
              </div>
              <div className="flex justify-between text-sm text-slate-400">
                적립 예정 Tale 포인트 :
                <span>276 P</span>
              </div>
            </div>
          </div>

          {/* 동의서 체크 */}
          <div className="white-shadow-box p-4 pb-7">
            <div className="flex items-center gap-4 cursor-pointer" onClick={() => setConsent(!consent)}>
              <img src={CheckIcon} alt='check' className={`${consent ? 'bg-blue-600' : 'bg-slate-300'} w-7 rounded-sm`} />
              <span className='font-bold'>구매조건 및 결제진행 동의</span>
            </div>
            <ul className='text-xs mt-4 flex_col gap-4 text-slate-400'>
              <li>* 주문할 상품의 상품명과 상품가격, 배송정보를 명확히 확인하였으며 구매진행에 동의합니다. (전자상거래법 6조 2항)</li>
              <li>* 간편 원클릭 결제시 일시불만 가능합니다.</li>
              <li>* Tale 포인트는 결제 후 적립되며, 환불 시 포인트가 차감됩니다.</li>
            </ul>
          </div>

          {/* 결제 버튼 */}
          <button
            className="bg-blue-600 text-white w-full py-3.5 shadow-lg rounded-md"
            onClick={() => navigate("/order")}
          >
            결제하기
          </button>

        </div>

      </div>
    </div>
  )
}

export default Order