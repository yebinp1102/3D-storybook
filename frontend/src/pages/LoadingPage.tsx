import Spinner from "../components/Spinner"

const LoadingPage = () => {
  return (
    <div className="w-screen h-screen flex flex-center gap-4">
      <Spinner />
      <h1 className="text-2xl animate-pulse">페이지 정보를 불러오는 중입니다. . .</h1>
    </div>
  )
}

export default LoadingPage