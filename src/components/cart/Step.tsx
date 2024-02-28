
type Props = {
  step: number;
  text: string;
  isActive: boolean;
}

const Step = ({step, text, isActive} : Props) => {
  return (
    <div className={`${isActive && 'border-blue-400'} relative bg-white w-12 h-12 flex items-center justify-center p-4 border rounded-full`}>
      <div className={`${isActive ? 'bg-blue-700 text-white' : 'text-blue-300 bg-primary-skyblue'} absolute flex items-center justify-center text-lg font-bold w-8 h-8 rounded-full`}>
        {step}
      </div>
      <div className={`${isActive ? 'text-blue-900' : 'text-blue-300'} absolute w-16 -bottom-8 left-0 text-sm font-semibold`}>{text}</div>
    </div>
  )
}

export default Step