import removeIcon from '../../../public/images/close.svg';

type Props = {
  img?: string;
  title: string;
  code: string;
  price: number;
}

const ListItem = ({img, title, code, price}: Props) => {
  return (
    <div className="flex items-center justify-between p-4 border-slate-200 border-t">
    <div className='flex gap-8 items-center'>
      <img 
        src={img}
        alt="item_img"
        className="border w-60 h-40"
      />

      <div className="flex flex-col">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p>상품코드: {code}</p>
      </div>
    </div>

    <div className="flex gap-8">
      <div className='w-52 text-blue-600 font-bold'>
        {price.toLocaleString()} 원(won)
      </div>

      <img 
        src={removeIcon}
        alt='remove_icon'
        className='w-7 cursor-pointer'
      />
    </div>
  </div>
  )
}

export default ListItem