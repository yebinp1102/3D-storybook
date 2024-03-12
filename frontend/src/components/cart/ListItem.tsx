import { useNavigate } from 'react-router-dom';
import removeIcon from '../../../public/images/close.svg';

type Props = {
  fileName: string;
  title: string;
  code: string;
  price: number;
  handleDeleteFromCart: any;
}

const ListItem = ({fileName, title, code, price, handleDeleteFromCart}: Props) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between p-4 border-slate-200 border-t">
    <div className='flex gap-8 items-center'>
      <img 
        src={`${import.meta.env.VITE_SERVER_URL}/${fileName}`}
        alt="item_img"
        className="border w-60 h-40 object-cover cursor-pointer"
        onClick={() => navigate(`/explore/detail/${code}`)}
      />

      <div className="flex flex-col text-slate-600 text-sm">
        <h3 className="font-bold text-lg text-black mb-2">{title}</h3>
        <p>상품코드: {code}</p>
      </div>
    </div>

    <div className="flex gap-8">
      <div className='w-52 text-emerald-500 font-bold'>
        {price.toLocaleString()} 원(won)
      </div>

      <img 
        src={removeIcon}
        alt='remove_icon'
        className='w-7 mr-1.5 cursor-pointer'
        onClick={(e) => handleDeleteFromCart(e, code)}
      />
    </div>
  </div>
  )
}

export default ListItem