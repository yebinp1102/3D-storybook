import OrderList from "../components/payment/OrderList"
import { useUserContext } from "../context/AuthContext"


const Payment = () => {
  const {user} = useUserContext();

  return (
    <div className="max-w-6xl mx-auto w-full py-20">
      <div className="white-shadow-box flex_col p-8">
        <h1 className="pb-8 border-b-4 border-primary-main text-xl font-bold">나의 결제 내역</h1>
        
        <div className="flex_col gap-6 mt-6">
          {user.order.map((item, idx) => (
            <OrderList key={idx} idx={idx} order={item} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Payment