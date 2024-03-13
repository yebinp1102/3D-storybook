import { useNavigate } from "react-router-dom";
import cartIcon from "../../public/images/cartColor.svg";
import ListItem from "../components/cart/ListItem";
import Step from "../components/cart/Step";
import { useUserContext } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { useDeleteFromCart } from "../lib/queriesAndMutations";
import { TemplateItem } from "../types";
import { toast } from "react-toastify";

const Cart = () => {
  const navigate = useNavigate();
  // const [cartDetails, setCartDetails] = useState<TemplateItem[]>();
  const [total, setTotal] = useState<number>(0);
  const { user, checkAuthUser, cartDetails } = useUserContext();
  const {mutateAsync: deleteFromCart} = useDeleteFromCart();

  const handler = () => {
    if (user.cart.length > 0) {
      const sum = cartDetails.reduce((a:number, b: TemplateItem) => a + b.price, 0);
      setTotal(sum);
    }else{
      setTotal(0);
    }
  };

  const handleDeleteFromCart = async (e: React.MouseEvent<HTMLElement, MouseEvent>, code: string) => {
    e.preventDefault();
    const responseStatus = await deleteFromCart(code);
    if(responseStatus !== 200){
      toast.info('해당 템플릿을 카트에서 제거하는데 실패했습니다. 다시 시도해주세요.')
    }else{
      toast.info('해당 템플릿을 카트에서 제외시켰습니다.');
      checkAuthUser();
      handler();
    }
  }

  const handleRouteToOrder = () => {
    if(total > 0){
      navigate(`/order/`);
    }else{
      toast.info('장바구니 금액이 100원 이상이어야 주문이 가능합니다.')
    }
  }

  useEffect(() => {
    handler();
  }, [user, cartDetails]);

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
            <Step step={3} text="결제완료" isActive={false} />
          </div>
        </div>
      </div>

      {/* item 설명 */}
      <ul className="flex gap-7 text-white font-semibold bg-primary-main rounded-t-md py-2 px-4">
        <li className="w-60">
          상품 이미지{" "}
          <span className="font-medium text-slate-100 text-sm">
            (Product Image)
          </span>
        </li>
        <div className="flex flex-1 justify-between">
          <li>
            상품정보{" "}
            <span className="font-medium text-slate-100 text-sm">
              (Product Information)
            </span>
          </li>
          <li className="w-[270px]">
            가격{" "}
            <span className="font-medium text-slate-100 text-sm">(Price)</span>
          </li>
        </div>
      </ul>

      {/* items list */}
      <div className="flex flex-col bg-white shadow-md rounded-b-md">
        {cartDetails && user.cart.length ? cartDetails.map((detail:TemplateItem) => (
          <ListItem key={detail._id} title={detail.title} handleDeleteFromCart={handleDeleteFromCart} code={detail._id} price={detail.price} fileName={detail.images[0]} />
        )): (
          <div className="min-h-[280px] flex-col gap-4 flex-center text-xl font-semibold">
            아직 카트에 담긴 템플릿이 없습니다.
            <p className="cursor-pointer text-base text-blue-500" onClick={() => navigate('/explore')}>&gt; 다른 템플릿 구경하기</p>
          </div>
        )}
      </div>

      {/* total price caculator */}
      <div className="flex_col white-shadow-box font-bold mt-8 p-4 w-full">
        <div className="flex-between text-xl text-primary-main">
          <p className=" py-4">장바구니 총 금액 :</p>
          <p>{total.toLocaleString()} 원 (won)</p>
        </div>
        <div className="flex justify-end items-center gap-6 py-5 px-1 border-t-2 border-slate-300">
          <p className="font-normal text-sm text-slate-400">
            * 할인금액, 결제 방식에 따라 최종 결제 금액이 다를 수 있습니다.
          </p>
          <button
            className="bg-primary-main text-white w-fit py-2 px-8 place-self-end rounded-md"
            onClick={handleRouteToOrder}
          >
            주문하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
