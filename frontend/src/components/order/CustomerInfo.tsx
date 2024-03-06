const CustomerInfo = () => {
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
          className="border p-2 rounded-sm text-sm w-[415px]"
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
          />{" "}
          -
          <input
            placeholder="1234"
            type="number"
            className="border p-2 rounded-sm text-sm w-36"
          />
          -
          <input
            placeholder="5678"
            type="number"
            className="border p-2 rounded-sm text-sm w-36"
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
            className="border p-2 rounded-sm text-sm w-[188px]"
          />
          @
          <input
            placeholder="naver.com"
            type="text"
            className="border p-2 rounded-sm text-sm w-[188px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
