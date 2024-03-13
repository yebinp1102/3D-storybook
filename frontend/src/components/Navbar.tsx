import { useNavigate, NavLink } from 'react-router-dom'
import logoIcon from '../../public/images/logo.svg'
import arrowUp from '../../public/images/arrowUp.svg'
import arrowDown from '../../public/images/arrowDown.svg'
import { INITIAL_USER, useUserContext } from '../context/AuthContext'

type Props = {
  toggleOn: boolean;
  setToggleOn: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar = ({toggleOn, setToggleOn} : Props) => {
  const navigate = useNavigate();
  const {user, setUser, setIsAuthenticated} = useUserContext();
  const isActiveStyle = `relative bg-primary-main text-white rounded-xl py-2.5 px-6 `

  const handleLogout = () => {
    setUser(INITIAL_USER);
    setIsAuthenticated(false);
    localStorage.removeItem('accessToken');
    navigate('/login');
  }

  return (
    <div className={`w-full z-[100] bg-white transition-all fixed top-0 left-0 ${!toggleOn && ' -translate-y-[80px]'}`}>
      {/* bottom nav */}
      <div className="max-w-7xl h-20 mx-auto flex items-center justify-between px-8">
        {/* logo */}
        <div 
          className="flex items-center h-full cursor-pointer relative bottom-1.5" 
          onClick={() => navigate('/')}
        >
          <img
            className='w-14'
            src={logoIcon}
            alt='logo'
          />
          <span className='relative -left-[18px] z-100 -bottom-2 text-[37px] font-black text-primary-main tracking-wide'>PARKLE</span>
        </div>
        <ul className='flex items-center gap-2 text-slate-600 text-[0.95rem] font-semibold h-full'>
          <NavLink 
            to="/"
            className={ ({isActive}) => isActive ? isActiveStyle : 'py-2 px-6'}
          >
            홈페이지
          </NavLink>
          <NavLink 
            to="/explore"
            className={ ({isActive}) => isActive ? isActiveStyle : 'py-2 px-6'}
          >
            둘러보기
          </NavLink>
          <NavLink 
            to="/cart"
            className={ ({isActive}) => isActive ? isActiveStyle : 'relative py-2 px-6'}
          >
            장바구니 
            <span className='absolute bg-blue-500 text-white -top-1 flex-center -right-1.5 border border-white h-7 w-7 rounded-full'>{`${user.cart.length}`}</span>
          </NavLink>
          {user.id && <li onClick={handleLogout} className='px-6 py-2'>로그아웃</li>}
        </ul>
      </div>
      <div 
        className={`w-11 h-11 rounded-b-md absolute border-t-0 -bottom-[44px] right-4 border border-slate-200 bg-white flex items-center justify-center`}
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