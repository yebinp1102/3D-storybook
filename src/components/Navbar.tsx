import { useNavigate } from 'react-router-dom'
import logoIcon from '../../public/images/logo.svg'
import arrowUp from '../../public/images/arrowUp.svg'
import arrowDown from '../../public/images/arrowDown.svg'
import userIcon from '../../public/images/userIcon.svg'
import cartIcon from '../../public/images/cart.svg'
import searchIcon from '../../public/images/search.svg'

type Props = {
  toggleOn: boolean;
  setToggleOn: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar = ({toggleOn, setToggleOn} : Props) => {
  const navigate = useNavigate();

  return (
    <div className={`w-full bg-white border transition-all border-slate-300 fixed ${!toggleOn && ' -translate-y-[100px]'}`}>
      {/* top nav */}
      <div className="max-w-7xl mx-auto flex justify-between items-center p-2 px-8 border-b border-slate-300">
        <ul className="flex gap-7 text-sm text-slate-500">
          <li>사용법</li>
          <li>수상경력</li>
          <li>후기</li>
        </ul>
        <ul className="flex gap-5">
          <img src={searchIcon} alt='user_icon' className='w-5 mr-1.5 cursor-pointer' />
          <img src={userIcon} alt='user_icon' className='w-6 cursor-pointer' />
          <img src={cartIcon} alt='user_icon' onClick={() => navigate('/cart')} className='w-6 cursor-pointer' />
        </ul>
      </div>
      {/* bottom nav */}
      <div className="max-w-7xl h-20 mx-auto flex items-center justify-between px-8">
        {/* logo */}
        <div 
          className="flex items-center h-full cursor-pointer relative bottom-1.5" 
          onClick={() => navigate('/')}
        >
          <img
            className='w-12'
            src={logoIcon}
            alt='logo'
          />
          <span className='relative -left-3 z-100 -bottom-2 text-3xl font-black text-primary-yellow logo_shadow_menu tracking-wide'>PARKLE</span>
        </div>
        <ul className='flex items-center gap-6 text-slate-600 text-[0.95rem] font-semibold h-full'>
          <li className='border-r border-slate-300 pr-6'>홈페이지</li>
          <li className='border-r border-slate-300 pr-6'>둘러보기</li>
          <li className='border-r border-slate-300 pr-6'>회사소개</li>
          <li>연락</li>
        </ul>
      </div>
      <div 
        className={`w-11 h-11 rounded-b-md absolute border-t-0 -bottom-11 right-4 border border-slate-300 bg-white flex items-center justify-center`}
        onClick={() => setToggleOn(!toggleOn)}
      >
        {toggleOn ? 
          <img 
            className='w-8'
            src={arrowUp}
          />
        : 
          <img 
            className='w-8'
            src={arrowDown}
          />
        }
      </div>
    </div>
  )
}

export default Navbar