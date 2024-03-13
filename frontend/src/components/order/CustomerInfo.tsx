
type CustomerType = {
  name: string;
  phone: string[];
  email: string[];
}

type Props = {
  customer: CustomerType,
  setCustomer: React.Dispatch<React.SetStateAction<CustomerType>>
}

const CustomerInfo = ({setCustomer, customer}: Props) => {

  const handlePhoneNum = (e : React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const number:string[] = customer.phone;
    if(idx === 0){
      number[0] = e.target.value;
      
    }else if( idx === 1){
      number[1] = e.target.value;
    }else{
      number[2] = e.target.value;
    }

    setCustomer({...customer, phone: number});
  }

  return (
    <div className="white-shadow-box order-box-layout">
      <h1 className="order-box-title">주문 고객</h1>
      {/* 이름 */}
      <div className="flex gap-8 items-center">
        <span className="font-semibold mr-3.5">
          이름 <span className="text-red-500">*</span>
        </span>
        <input
          placeholder="성함을 입력해주세요."
          type="text"
          value={customer.name}
          className="border p-2 rounded-sm text-sm w-[415px]"
          onChange={(e) => setCustomer({...customer, name: e.target.value})  }
        />
      </div>

      {/* 연락처 */}
      <div className="flex gap-8 items-center">
        <span className="font-semibold">
          연락처 <span className="text-red-500">*</span>
        </span>
        <div className="flex gap-2 items-center">
          <input
            placeholder="010"
            type="number"
            className="border p-2 rounded-sm text-sm w-20"
            value={customer.phone[0]}
            onChange={(e) => handlePhoneNum(e, 0) }
          />{" "}
          -
          <input
            placeholder="1234"
            type="number"
            className="border p-2 rounded-sm text-sm w-36"
            value={customer.phone[1]}
            onChange={(e) => handlePhoneNum(e, 1) }
          />
          -
          <input
            placeholder="5678"
            type="number"
            className="border p-2 rounded-sm text-sm w-36"
            value={customer.phone[2]}
            onChange={(e) => handlePhoneNum(e, 2) }
          />
        </div>
      </div>

      {/* 이메일 */}
      <div className="flex gap-8 items-center pb-6">
        <span className="font-semibold">
          이메일 <span className="text-red-500">*</span>
        </span>
        <div className="flex items-center gap-3">
          <input
            placeholder="example"
            type="text"
            value={customer.email[0]}
            readOnly
            className="border p-2 rounded-sm text-sm w-[188px]"
          />
          @
          <input
            placeholder="naver.com"
            type="text"
            value={customer.email[1]}
            readOnly
            className="border p-2 rounded-sm text-sm w-[188px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
