
const PointUsage = () => {
  return (
    <div className="white-shadow-box order-box-layout">
      <h1 className='order-box-title'>포인트 사용</h1>
      <div className="flex items-start justify-between font-semibold">
        <div className="flex items-center">
          <span className=''>Tale 포인트</span>
          <button
            className='bg-primary-skyblue ml-4 mr-2 text-blue-600 rounded-sm py-2 px-4 text-sm'
          >모두사용</button>
        </div>

        {/* point */}
        <div className="flex_col items-end gap-2">
          <div className="flex items-center gap-2">
            <input type="number" placeholder='0' className='border w-36 p-1 text-sm text-right pr-2'/>
            <span>P (Point)</span>
          </div>
          <p className='text-sm text-slate-500 font-normal'>사용 가능한 포인트 4,750 p</p>
        </div>
      </div>

      <span className='text-red-400 font-normal text-sm'>* 환불 처리 시 포인트는 환불되지 않습니다.</span>
    </div>
  )
}

export default PointUsage