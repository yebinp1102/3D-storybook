import { TemplateItem } from '../types';

type Props = {
  temp: TemplateItem,
  idx: number,
  handleHover: any;
}

const TemplateList = ({temp, handleHover, idx} : Props) => {
  return (
    <div 
      onMouseOver={() => handleHover(idx)}
      className="h-[250px] relative w-full rounded-lg overflow-hidden transition-all shadow-lg border-white border-2 bg-black/50 hover:border-primary-main hover:scale-105"
    >
      {temp.images[0] ? (
        <img 
          src={`${import.meta.env.VITE_SERVER_URL}/${temp.images[0]}`}
          alt='thumbnail'
          className='w-full h-full object-cover absolute'
        />
      ): (
        <div className='font-bold text-lg w-full h-full flex-center bg-slate-700 text-white'>
          Comming soon
        </div>
      )}
      <div className='absolute text-white bg-primary-main w-16 h-16 bottom-0 left-0 rounded-tr-full'>
        <p className='left-2 top-6 font-semibold absolute'>NEW</p>
      </div>
    </div>
  )
}

export default TemplateList