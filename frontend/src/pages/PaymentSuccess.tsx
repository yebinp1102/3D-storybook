import Step from "../components/cart/Step";
import Wallet from "../../public/images/Wallet.svg";
import { useUserContext } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const PTag = ({title, text}: {title: string, text: string}) => {
  return (
    <div className="flex-between w-full font-semibold">
      <p className="text-slate-500">{title}</p>
      <p>{text}</p>
    </div>
  )
}

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const {user} = useUserContext();
  const [order, setOrder] = useState();

  useEffect(() => {
    let lastIdx = user.order.length-1;
    setOrder(user.order[lastIdx]);
  },[user]);


  if(!order){
    return (
      <h1>Loading ...</h1>
    )
  }

  return (
    <div>

      {/* banner : svg + progress */}
      <div className="flex justify-evenly my-12 w-full max-w-7xl mx-auto">
        {/* svg banner */}
        <img src={Wallet} alt="indicator_icon" className="w-60" />
        <div className="flex flex-col px-12 justify-center items-center">
          <h1 className=" text-4xl font-black mb-12">결제 완료</h1>
          {/* progress */}
          <div className="flex gap-28 relative z-[10]">
            <div className="absolute w-full top-5 right-0 bg-white border h-[8px]"></div>
            <Step step={1} text="장바구니" isActive={false} />
            <Step step={2} text="주문정보" isActive={false} />
            <Step step={3} text="결제완료" isActive={true} />
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="w-full flex_col max-w-6xl mb-20 p-8 flex-center mx-auto white-shadow-box">
        <div className="border-b-2 text-slate-700 font-semibold flex-between w-full border-primary-main p-6">
          <p>결제 코드 :</p>
          {order.product[0].paymentId}</div>
        <h1 className="font-bold text-2xl mt-8 mb-4">구매 감사합니다. {user.name} 님!</h1>
        <p>구매하신 템플릿은 바로 수정 가능한 상태로 변합니다.</p>

        <div className="flex_col gap-6 max-w-[700px] w-full my-32">
          <PTag title="구매자 정보 :" text={order.user.name} />
          <PTag title="결제일 :" text={order.product[0].dateOfPurchase.split('T')[0]} />
          <PTag title="상품명 :" text={order.product.length === 1 ? `"${order.product[0].title}"` : `"${order.product[0].title}" 외 ${order.product.length} 개의 상품`} />
          <PTag title="주문한 상품 개수 :" text={order.product.length + ' 개'} />
          <div className="flex-between text-lg w-full font-semibold mt-4">
            <p>결제금액 :</p>
            <p className="text-emerald-500">{(order.product.reduce((a,b) => a+b.price ,0).toLocaleString()) + ' 원(won)'}</p>
          </div>
        </div>

        <p>결제 내역이 궁금하신가요? 아래 버튼을 누르면 결제 내역 페이지로 이동합니다.</p>
        <button 
          className="bg-primary-main text-white px-8 py-2 rounded-lg shadow-md mt-6 mb-8"
          onClick={() => navigate('/payment')}
        >
          결제 내역 보기
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
