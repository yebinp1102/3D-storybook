import { useNavigate } from "react-router-dom";
import cartIcon from "../../public/images/cartColor.svg";
import ListItem from "../components/cart/ListItem";
import PriceList from "../components/cart/PriceList";
import Step from "../components/cart/Step";

const Cart = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto px-8 pb-20 flex flex-col">
      {/* banner */}
      <div className="flex justify-evenly my-12">
        {/* svg banner */}
        <img src={cartIcon} alt="indicator_icon" className="w-60" />

        <div className="flex flex-col px-12 justify-center items-center">
          <h1 className=" text-4xl font-black mb-12">나의 장바구니</h1>
          {/* progress */}
          <div className="flex gap-28 relative z-[10]">
            <div className="absolute w-full top-5 right-0 bg-white border h-[8px]"></div>
            <Step step={1} text="장바구니" isActive={true} />
            <Step step={2} text="주문정보" isActive={false} />
            <Step step={3} text="결제하기" isActive={false} />
          </div>
        </div>
      </div>

      {/* item 설명 */}
      <ul className="flex gap-7 text-blue-500 font-semibold bg-primary-skyblue rounded-t-md py-2 px-4">
        <li className="w-60">
          상품 이미지{" "}
          <span className="font-medium text-slate-400 text-sm">
            (Product Image)
          </span>
        </li>
        <div className="flex flex-1 justify-between">
          <li>
            상품정보{" "}
            <span className="font-medium text-slate-400 text-sm">
              (Product Information)
            </span>
          </li>
          <li className="w-[270px]">
            가격{" "}
            <span className="font-medium text-slate-400 text-sm">(Price)</span>
          </li>
        </div>
      </ul>

      {/* items list */}
      <div className="flex flex-col bg-white shadow-md rounded-b-md">
        <ListItem title="뭉게공항에 온 밍키" code="AGS36812" price={12300} />
        <ListItem title="뭉게공항에 온 밍키" code="AGS36812" price={12300} />
      </div>

      {/* total price caculator */}
      <div className="flex justify-end">
        <div className="bg-white font-bold mt-8 shadow-lg border rounded-lg p-4 min-w-[30rem]">
          <p className="border-b-2 border-slate-300 text-xl py-4">
            최종 결제 금액 :
          </p>
          <ul className="py-6 border-b-2 border-slate-300 flex flex-col gap-6">
            <PriceList
              text="주문금액 총합"
              price={`${Number(24600).toLocaleString()}`}
            />
            <PriceList
              text="배송비"
              price={`+ ${Number(3000).toLocaleString()}`}
            />
            <PriceList
              text="할인금액"
              price={`- ${Number(0).toLocaleString()}`}
            />
            <PriceList text="금액 총합" price={`27,600`} />
          </ul>
          <div className="py-8 flex justify-between text-blue-600">
            <p>총 결제 예정 금액 :</p>
            <p className="text-xl">27,600 원 (won)</p>
          </div>
          <button
            className="bg-blue-600 text-white w-full py-2.5 rounded-md mb-3"
            onClick={() => navigate("/order")}
          >
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
