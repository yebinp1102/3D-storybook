import { useNavigate } from 'react-router-dom';
import { TemplateItem } from '../types';

type Props = {
  temp: TemplateItem,
  idx: number,
  handleHover: any;
}

const TemplateList = ({temp, handleHover, idx} : Props) => {
  const navigate = useNavigate();
  return (
    <div 
      onMouseOver={() => handleHover(idx)}
      className="h-[250px] cursor-pointer relative w-full rounded-lg overflow-hidden transition-all shadow-lg border-white border-2 bg-black/50 hover:border-primary-main hover:scale-105"
      onClick={() => navigate(`/explore/detail/${temp._id}`)}
    >
      <img 
        src={`${temp.images[0]}`}
        alt='thumbnail'
        className='w-full h-full object-cover absolute'
      />
      
      {!temp.isAvailable && (
        <h1 className='absolute bg-gray-900 text-white bg-opacity-80 w-full h-full flex-center'>Comming Soon</h1>
      )}

      <div className='absolute text-white bg-primary-main w-16 h-16 bottom-0 left-0 rounded-tr-full'>
        <p className='left-2 top-6 font-semibold absolute'>NEW</p>
      </div>
    </div>
  )
}

export default TemplateList