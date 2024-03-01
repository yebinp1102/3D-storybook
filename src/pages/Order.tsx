import { useNavigate } from 'react-router-dom'
import IndicatorIcon from '../../public/images/Indicator.svg'
import CheckIcon from '../../public/images/check.svg'
import PlusIcon from '../../public/images/plus.svg'
import arrowDown from '../../public/images/downArrow.svg'
import arrowUp from '../../public/images/upArrow.svg'
import moneyIcon from '../../public/images/money.svg';
import creditIcon from '../../public/images/creditCard.svg';
import accountIcon from '../../public/images/account.svg';

import PriceList from '../components/cart/PriceList'
import Step from '../components/cart/Step'
import { useState } from 'react'

const Order = () => {
  const navigate = useNavigate();
  const [addressToggle, setAddressToggle] = useState<boolean>(true);
  const [consent, setConsent] = useState<boolean>(false);
  const [paymethod, setPaymethod] = useState<number>(0);

  return (
    <div className="w-full px-8 pb-20 flex flex-col">

      {/* banner */}
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
          <div className="bg-white border py-4 px-8 shadow-md rounded-md flex flex-col gap-6">
            <h1 className='border-b-[3px] pb-4 font-bold text-lg'>주문 고객</h1>
            {/* 이름 */}
            <div className='flex gap-8 items-center'>
              <span className='font-semibold mr-3.5'>이름 <span className='text-red-500'>*</span></span>
              <input 
                placeholder='성함을 입력해주세요.'
                type='text'
                className='border p-2 rounded-sm text-sm w-[415px]'
              />
            </div>

            {/* 연락처 */}
            <div className='flex gap-8 items-center'>
              <span className='font-semibold'>연락처 <span className='text-red-500'>*</span></span>
              <div className="flex gap-2 items-center">
                <input 
                  placeholder='010'
                  type='number'
                  className='border p-2 rounded-sm text-sm w-20'
                /> -
                <input 
                  placeholder='1234'
                  type='number'
                  className='border p-2 rounded-sm text-sm w-36'
                />-
                <input 
                  placeholder='5678'
                  type='number'
                  className='border p-2 rounded-sm text-sm w-36'
                />
              </div>
            </div>

            {/* 이메일 */}
            <div className='flex gap-8 items-center pb-6'>
              <span className='font-semibold'>이메일 <span className='text-red-500'>*</span></span>
              <div className="flex items-center gap-3">
                <input 
                  placeholder='example'
                  type='text'
                  className='border p-2 rounded-sm text-sm w-[188px]'
                />@
                <input 
                  placeholder='naver.com'
                  type='text'
                  className='border p-2 rounded-sm text-sm w-[188px]'
                />
              </div>
            </div>
          </div>

          {/* 배송지 */}
          <div className="bg-white border py-4 px-8 shadow-md rounded-md flex flex-col gap-6">
            <div className={`${addressToggle && 'border-b-4 pb-4'} flex justify-between`}>
              <h1 className='font-bold text-lg'>배송지</h1>
              {addressToggle ? 
                <img src={arrowUp} alt='arrow-up' className='w-6 cursor-pointer' onClick={() => setAddressToggle(false)} /> : 
                <img src={arrowDown} alt='arrow-down' className='w-6 cursor-pointer' onClick={() => setAddressToggle(true)} />
              }
            </div>
            <div className={`${!addressToggle && 'hidden'} flex flex-col gap-6`}>
              <div className='flex gap-6 items-center'>
                <span className='font-semibold mr-2.5'>받는 분 <span className='text-red-500'>*</span></span>
                <input 
                  placeholder='12자 이내로 입력해주세요.'
                  type='text'
                  className='border p-2 rounded-sm text-sm w-[415px]'
                />
              </div>
              <div className="flex flex-col gap-3 pb-4">
                <div className='flex gap-6 items-center'>
                  <span className='font-semibold mr-7'>주소 <span className='text-red-500'>*</span></span>
                  <input 
                    placeholder='우편번호를 입력해주세요.'
                    type='text'
                    className='border p-2 rounded-sm text-sm w-[279px]'
                  />
                  <button className='bg-primary-skyblue font-semibold text-sm text-blue-600 py-2.5 px-8 rounded-sm'>우편번호</button>
                </div>
                <input 
                  placeholder='도로명을 입력해주세요.'
                  type='text'
                  className='border p-2 rounded-sm text-sm w-[415px] ml-[90px]'
                />
                <input 
                  placeholder='상세 주소를 입력해주세요.'
                  type='text'
                  className='border p-2 rounded-sm text-sm w-[415px] ml-[90px]'
                />
              </div>
            </div>
          </div>

          {/* 쿠폰할인 */}
          <div className="bg-white border py-4 px-8 shadow-md rounded-md flex flex-col gap-6">
            <h1 className='border-b-[3px] pb-4 font-bold text-lg'>쿠폰 할인</h1>
            <div className="flex justify-between pb-4 font-semibold text-blue-600">
            <div className="flex gap-4 items-center">
              <span className=''>쿠폰 할인 금액</span>
              <button
                className='bg-primary-skyblue rounded-sm py-2 px-4 text-sm'
              >쿠폰적용</button>
            </div>
            <span>- 0 원 (won)</span>
          </div>
          </div>

          {/* 포인트 사용 */}
          <div className="bg-white border py-4 px-8 shadow-md rounded-md flex flex-col gap-6">
            <h1 className='font-bold border-b-[3px] pb-4 text-lg'>포인트 사용</h1>
            <div className="flex items-start justify-between font-semibold ">
              <div className="flex items-center">
                <span className=''>Tale 포인트</span>
                <button
                  className='bg-primary-skyblue ml-4 mr-2 text-blue-600 rounded-sm py-2 px-4 text-sm'
                >모두사용</button>
              </div>

              {/* point */}
              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-2">
                  <input type="number" placeholder='0' className='border w-36 p-1 text-sm text-right pr-2'/>
                  <span>P (Point)</span>
                </div>
                <p className='text-sm text-slate-500 font-normal'>사용 가능한 포인트 4,750 p</p>
              </div>


            </div>
            <span className='text-red-400 font-normal text-sm'>* 환불 처리 시 포인트는 환불되지 않습니다.</span>
          </div>

          {/* 결제 방법 선택 */}
          <div className="bg-white border py-4 px-8 shadow-md rounded-md flex flex-col gap-6">
            <h1 className='border-b-[3px] pb-4 font-bold text-lg'>결제방법선택</h1>

            <div className="flex flex-col">

              {/* 결제방법 01 */}
              <div className="flex flex-col border-b pb-5">
                <div className="flex gap-4 items-center cursor-pointer" onClick={() => setPaymethod(0)}>
                  <p className={`${paymethod === 0 ? 'bg-blue-600' : 'bg-slate-400'} p-1 rounded-full`}>
                    <img
                      src={CheckIcon}
                      alt='check_icon'
                      className='w-6'
                    />
                  </p>
                  <p className={`${paymethod === 0 ? 'text-blue-600' : 'text-slate-400'} font-bold text-lg`}>간편한 원클릭 결제</p>
                </div>

                <div className={`${paymethod !== 0 && 'hidden'} cursor-pointer bg-slate-200 my-6 w-80 font-semibold h-48 rounded-lg text-xl flex flex-col items-center justify-center`}>
                  <img 
                    src={PlusIcon}
                    alt='plus_icon'
                    className='w-12 mb-1'
                  />
                  <p>카드추가</p>
                </div>
              </div>

              {/* 결제 방법 02 */}
              <div className="flex flex-col py-4">
                <div className="flex gap-4 items-center cursor-pointer" onClick={() => setPaymethod(1)}>
                  <p className={`${paymethod === 1 ? 'bg-blue-600' : 'bg-slate-400'} p-1 rounded-full`}>
                    <img
                      src={CheckIcon}
                      alt='check_icon'
                      className='w-6'
                    />
                  </p>
                  <p className={`${paymethod === 1 ? 'text-blue-600' : 'text-slate-400'} font-bold text-lg`}>다른 결제 수단</p>
                </div>

                <div className={`${paymethod !== 1 && 'hidden'} flex flex-col gap-4`}>
                  <ul className='flex gap-6 mt-4 ml-12'>
                    <li className='text-sm font-semibold cursor-pointer flex flex-col items-center border border-slate-700 text-slate-700 px-6 py-2 rounded-sm'>
                      <img src={creditIcon} alt='credit_card_icon' className='w-8' />
                      신용카드
                    </li>
                    <li className='text-sm font-semibold cursor-pointer flex flex-col items-center border border-slate-700 text-slate-700 px-6 py-2 rounded-sm'>
                      <img src={accountIcon} alt='credit_card_icon' className='w-8' />
                      가상계좌
                    </li>
                    <li className='text-sm font-semibold cursor-pointer flex flex-col items-center border border-slate-700 text-slate-700 px-6 py-2 rounded-sm'>
                      <img src={moneyIcon} alt='credit_card_icon' className='w-9' />
                      계좌이체
                    </li>
                  </ul>

                  <ul className='flex flex-col gap-1 text-xs text-slate-400 ml-12'>
                    <li>* 신용카드 포인트 사용은 결제창에서 사용하실 수 있습니다.</li>
                    <li>* 신용카드 할부는 결제 금액이 50,000원 이상인 경우에만 가능합니다.</li>
                    <li>* 30만원 이상 결제 시 공인인증서가 필요합니다.</li>
                    <li>* 신용카드 앱으로 결제 시 주문완료를 위하여 주문완료 페이지가 보여지기 전에 결제창을 닫지 마십시오.</li>
                    <li>* 세금계산서 반영을 원하실 경우, 고객센터 {'>'} 온라인문의에서 신청해주시기 바랍니다.</li>
                  </ul>
                </div>

              </div>


            </div>
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col gap-8 w-[360px]">

          {/* 최종 결제 금액 */}
          <div className="bg-white h-fit font-bold shadow-lg border rounded-lg p-4 w-full">
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
          <div className="bg-white p-4 pb-7 rounded-lg border shadow-lg">
            <div className="flex items-center gap-4 cursor-pointer" onClick={() => setConsent(!consent)}>
              <img src={CheckIcon} alt='check' className={`${consent ? 'bg-blue-600' : 'bg-slate-300'} w-7 rounded-sm`} />
              <span className='font-bold'>구매조건 및 결제진행 동의</span>
            </div>
            <ul className='text-xs mt-4 flex flex-col gap-4 text-slate-400'>
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