
type Props = {
  text: string;
  price: string;
}

const PriceList = ({text, price} : Props) => {
  return (
    <li className='flex justify-between'>
      <span>{text} :</span> 
      <span className=" font-semibold text-slate-500 text-[0.9rem]">{price.toLocaleString()}</span>
    </li>
  )
}

export default PriceList