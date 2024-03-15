import { useNavigate } from "react-router-dom";
import { OrderItem } from "../../types";

const PTag = ({title, text}: {title: string, text: string}) => {
  return (
    <div className="flex gap-2 items-center">
      <p className=" font-semibold text-base">{title}</p>
      <p>{text}</p>
    </div>
  )
}

const OrderList = ({ order, idx }: { order: OrderItem, idx:number }) => {
  const navigate = useNavigate();
  return (
    <div className="p-4 flex_col border border-primary-main text-slate-600 rounded-lg">
      <div className="flex_col gap-2 text-sm">
        <p className="font-bold text-xl mb-4">0{idx+1}.</p>
        <PTag title={'결제날짜 :'} text={order.product[0].dateOfPurchase.split("T")[0]} />
        <PTag title={'결제시간 :'} text={order.product[0].dateOfPurchase.split("T")[1].split('.')[0]} />
        <PTag title={'결제고객 :'} text={order.user.name + ' 님'} />
        <PTag title={'결제코드 :'} text={order.product[0].paymentId} />

      </div>
      <div className="flex_col mt-8">
          <p className="font-semibold text-lg ml-2 text-emerald-600">결제 상품 정보</p>

          <div className="flex flex-wrap gap-4">
            {order.product.map((item) => (
              <div
                key={item.id}
                className="flex_col rounded-lg min-w-[180px] font-semibold text-white mt-3 cursor-pointer bg-primary-main gap-2 border p-2"
              >
                <p className="text-center mt-2 text-base"> {`< ${item.title} >`}</p>
                <p className="mt-3 text-end">{item.price.toLocaleString()} 원(won)</p>
                <button 
                  onClick={() => navigate(`/explore/detail/${item.id}`)}
                  className="bg-white text-primary-main py-1 rounded-lg my-2">제품 상세정보</button>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default OrderList;
