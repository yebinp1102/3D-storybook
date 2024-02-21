import AuthForm from "../components/AuthForm"

const Register = () => {
  return (
    <div className="border w-full h-full flex items-center justify-center">
      
      <section className="flex flex-col max-w-xl w-full text-center">
        <p className="text-xl text-gray-700 font-semibold">Welcome to</p>
        <h1 className=" text-5xl font-black mb-6 text-orange-600">Pixel Story</h1>
        <p className="text-gray-700 text-[0.9rem] mb-16">아름다운 동화의 모든 부분을 픽셀로 표현하는 
          저희 픽셀 스토리는 아이들뿐만 아니라 성인들의 상상력과 감수성을 자극 한답니다.
          픽셀 스토리의 회원이 되시면 많은 혜택을 받을 수 있습니다!
        </p>
        
        <AuthForm type={"Register"} />
      </section>
      
    </div>
  )
}

export default Register