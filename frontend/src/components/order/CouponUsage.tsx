
const CouponUsage = () => {
  return (
    <div className=" white-shadow-box order-box-layout">
      <h1 className='order-box-title'>쿠폰 할인</h1>
      <div className="flex-between pb-4 font-semibold">
        <div className="flex gap-4 items-center">
          <span className='text-green-500'>쿠폰 할인 금액</span>
          <button
            className='bg-primary-main text-white rounded-sm py-2 px-4 text-sm'
          >쿠폰적용</button>
        </div>
        <span>- 0 원 (won)</span>
      </div>
    </div>
  )
}

export default CouponUsage