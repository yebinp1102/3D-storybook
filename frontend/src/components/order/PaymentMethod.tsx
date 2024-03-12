import { useState } from 'react';
import CheckIcon from '../../../public/images/check.svg'
import PlusIcon from '../../../public/images/plus.svg'
import moneyIcon from '../../../public/images/money.svg';
import moneyGreen from '../../../public/images/moneyGreen.svg';
import creditIcon from '../../../public/images/creditCard.svg';
import creditGreen from '../../../public/images/creditGreen.svg';
import accountIcon from '../../../public/images/account.svg';
import accountGreen from '../../../public/images/accountGreen.svg';

type IconProps = {
  text:string;
  icon: string;
  isActive?: boolean;
}

type TitleProps = {
  text: string;
  paymethod: number;
  index: number;
  setPaymethod: React.Dispatch<React.SetStateAction<number>>
}

const PayMethodIcon = ({text, icon, isActive = false}: IconProps) => {
  return (
    <li className={`${isActive ? 'text-primary-main border-primary-main' : 'border-slate-700 text-slate-700'} text-sm font-bold cursor-pointer flex flex-col items-center border-[1.5px] px-6 py-2 rounded-sm`}>
      <img src={icon} alt='credit_card_icon' className='w-8' />
      {text}
    </li>
  )
}

const PayMethodTitle = ({text, paymethod, setPaymethod, index}: TitleProps) => {
  return (
    <div className="flex gap-4 items-center cursor-pointer" onClick={() => setPaymethod(index)}>
      <p className={`${paymethod === index ? 'bg-primary-main' : 'bg-slate-400'} p-1 rounded-full`}>
        <img
          src={CheckIcon}
          alt='check_icon'
          className='w-6'
        />
      </p>
      <p className={`${paymethod === index ? 'text-primary-main' : 'text-slate-400'} font-bold text-lg`}>{text}</p>
    </div>
  )
}

const PaymentMethod = () => {
  const [paymethod, setPaymethod] = useState<number>(0);
  const [diffPaymethod, setDiffpaymethod] = useState<number>(0);

  return (
    <div className="white-shadow-box flex_col gap-6 py-4 px-8">
      <h1 className='order-box-title'>결제방법선택</h1>

      <div className="flex_col">

        {/* 결제방법 01 */}
        <div className="flex_col border-b pb-5">
          <PayMethodTitle text={'간편한 원클릭 결제'} index={0} paymethod={paymethod} setPaymethod={setPaymethod} />
          <div className={`${paymethod !== 0 && 'hidden'} ml-12 cursor-pointer bg-slate-200 my-6 w-80 font-semibold h-48 rounded-lg text-xl flex flex-col items-center justify-center`}>
            <img 
              src={PlusIcon}
              alt='plus_icon'
              className='w-12 mb-1'
            />
            <p>카드추가</p>
          </div>
        </div>

        {/* 결제 방법 02 */}
        <div className="flex_col py-4">
          <PayMethodTitle text={'다른 결제 수단'} index={1} paymethod={paymethod} setPaymethod={setPaymethod} />
          <div className={`${paymethod !== 1 && 'hidden'} flex flex-col gap-4`}>

            {/* 결제 수단 선택 */}
            <ul className='flex gap-6 mt-4 ml-12'>
              <div onClick={() => setDiffpaymethod(0)}>
                {diffPaymethod === 0 ? 
                  <PayMethodIcon text={'신용카드'} icon={creditGreen} isActive={true} />:
                  <PayMethodIcon text={'신용카드'} icon={creditIcon} />
                }
              </div>
              <div onClick={() => setDiffpaymethod(1)}>
                {diffPaymethod === 1 ? 
                  <PayMethodIcon text={'가상계좌'} icon={accountGreen} isActive={true} /> :
                  <PayMethodIcon text={'가상계좌'} icon={accountIcon} />
                }
              </div>
              <div onClick={() => setDiffpaymethod(2)}>
                {diffPaymethod === 2 ? 
                  <PayMethodIcon text={'계좌이체'} icon={moneyGreen} isActive={true} />:
                  <PayMethodIcon text={'계좌이체'} icon={moneyIcon} />
                }
              </div>
            </ul>
            
            {/* 주의 사항 */}
            <ul className='flex_col gap-1 text-xs text-slate-400 ml-12'>
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
  )
}

export default PaymentMethod