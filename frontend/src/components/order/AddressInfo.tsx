import { useState } from "react";
import arrowDown from "../../../public/images/downArrow.svg";
import arrowUp from "../../../public/images/upArrow.svg";

const AddressInfo = () => {
  const [addressToggle, setAddressToggle] = useState<boolean>(true);

  return (
    <div className="white-shadow-box order-box-layout">
      <div
        className={`${addressToggle && "border-b-4 pb-4"} flex justify-between`}
      >
        <h1 className="font-bold text-lg">배송지</h1>

        {/* toggle */}
        {addressToggle ? (
          <img
            src={arrowUp}
            alt="arrow-up"
            className="w-6 cursor-pointer"
            onClick={() => setAddressToggle(false)}
          />
        ) : (
          <img
            src={arrowDown}
            alt="arrow-down"
            className="w-6 cursor-pointer"
            onClick={() => setAddressToggle(true)}
          />
        )}
      </div>
      
      <div className={`${!addressToggle && "hidden"} flex flex-col gap-6`}>

        {/* 받는 분 */}
        <div className="flex gap-6 items-center">
          <span className="font-semibold mr-2.5">
            받는 분 <span className="text-red-500">*</span>
          </span>
          <input
            placeholder="12자 이내로 입력해주세요."
            type="text"
            className="border p-2 rounded-sm text-sm w-[415px]"
          />
        </div>

        {/* 주소 */}
        <div className="flex flex-col gap-3 pb-4">
          <div className="flex gap-6 items-center">
            <span className="font-semibold mr-7">
              주소 <span className="text-red-500">*</span>
            </span>
            <input
              placeholder="우편번호를 입력해주세요."
              type="text"
              className="border p-2 rounded-sm text-sm w-[279px]"
            />
            <button className="bg-primary-skyblue font-semibold text-sm text-blue-600 py-2.5 px-8 rounded-sm">
              우편번호
            </button>
          </div>
          <input
            placeholder="도로명을 입력해주세요."
            type="text"
            className="border p-2 rounded-sm text-sm w-[415px] ml-[90px]"
          />
          <input
            placeholder="상세 주소를 입력해주세요."
            type="text"
            className="border p-2 rounded-sm text-sm w-[415px] ml-[90px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AddressInfo;
