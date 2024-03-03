import Logo from '../../public/images/logo.svg';
import LinkedIn from '../../public/images/linkedIn.svg';
import Twitter from '../../public/images/twitter.svg';
import FaceBook from '../../public/images/facebook.svg';

const Footer = () => {
  return (
    <div className="relative bg-primary-skyblue text-blue-600 text-sm z-50">
      <div className="max-w-6xl w-full mx-auto flex_col items-center py-4">
        <div className="flex-between max-w-5xl py-8 w-full">
          {/* company */}
          <div className="flex_col max-w-[240px]">
            {/* logo */}
            <div className="flex">
              <img src={Logo} alt='logo' className='w-9 mb-4' />
              <span 
                className='relative -left-2.5 z-100 -bottom-[7px] text-2xl font-black text-primary-yellow sm_logo_shadow_menu tracking-wide'>
                  PARKLE TALE
              </span>
            </div>
            <p>빛나는 동화세계, Sparkle Tale은 신비롭고 장엄한 동화 세계를 
              담은 3D 애니메이션 동화를 판매하는 새로운 문화 회사입니다.
            </p>
            <ul className='flex gap-3 mt-4'>
              <img 
                src={FaceBook}
                alt='facebook'
                className='w-6'
              />
              <img src={LinkedIn} alt="linked_in" className='w-6' />
              <img src={Twitter} alt="twitter" className='w-7' />
            </ul>
          </div>


          <div className="flex gap-20">
            {/* Explore */}
            <ul className="flex_col gap-2">
              <h3 className='mb-2 font-bold text-base'>Explore</h3>
              <li>작품 둘러보기</li>
              <li>작품 둘러보기</li>
              <li>작품 둘러보기</li>
              <li>작품 둘러보기</li>
            </ul>

            {/* About */}
            <ul className="flex_col gap-2">
              <h3 className='mb-2 font-bold text-base'>About</h3>
              <li>회사 소개</li>
              <li>인재 채용</li>
              <li>이용약관</li>
              <li>제휴제안</li>
            </ul>

            {/* Know more */}
            <ul className="flex_col gap-2">
              <h3 className='mb-2 font-bold text-base'>Know more</h3>
              <li>스파클테일정책</li>
              <li>고객센터</li>
              <li>청소년보호정책</li>
              <li>개인정보처리방침</li>
            </ul>
          </div>

        </div>
        <p className="border-t max-w-5xl w-full border-blue-600 py-4">copyright &copy; by Designart All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer