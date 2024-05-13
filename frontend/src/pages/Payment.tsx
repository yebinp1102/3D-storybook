import { useNavigate } from "react-router-dom";
import OrderList from "../components/payment/OrderList";
import { useUserContext } from "../context/AuthContext";

const Payment = () => {
  const navigate = useNavigate();
  const { user } = useUserContext();

  return (
    <div className="max-w-6xl mx-auto w-full py-20">
      <div className="white-shadow-box flex_col p-8">
        <h1 className="pb-8 border-b-4 border-primary-main text-xl font-bold">
          나의 결제 내역
        </h1>

        <div className="flex_col gap-6 mt-6">
          {user.order.length > 0 ? (
            user.order.map((item, idx) => (
              <OrderList key={idx} idx={idx} order={item} />
            ))
          ) : (
            <div className="flex-center h-[50vh] text-gray-500 flex-col gap-4">
              <p className="text-2xl font-bold">결제 내역이 없습니다.</p>
              <p className="">
                결제 할만한 템플릿을 찾고 계신가요?{" "}
                <span className="text-primary-main cursor-pointer" onClick={() => navigate('/explore')} >
                  템플릿 둘러보기 &#8680;{" "}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payment;
