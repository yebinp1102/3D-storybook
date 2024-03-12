
type Props = {
  step: number;
  text: string;
  isActive: boolean;
}

const Step = ({step, text, isActive} : Props) => {
  return (
    <div className={`${isActive && 'border-green-400'} relative bg-white w-12 h-12 flex items-center justify-center p-4 border rounded-full`}>
      <div className={`${isActive ? 'bg-primary-main text-white' : 'text-emerald-400 bg-emerald-100'} absolute flex items-center justify-center text-lg font-bold w-8 h-8 rounded-full`}>
        {step}
      </div>
      <div className={`${isActive ? 'text-emerald-700' : 'text-emerald-400'} absolute w-16 -bottom-8 left-0 text-sm font-bold`}>{text}</div>
    </div>
  )
}

export default Step