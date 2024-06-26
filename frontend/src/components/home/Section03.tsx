import { useNavigate } from 'react-router-dom';
import Template from '../../../public/images/thumbnail.png';
import {motion, useInView, useAnimation} from 'framer-motion'
import { useEffect, useRef } from 'react';

const Section03 = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if(isInView){
      mainControls.start("visible");
    }
  }, [isInView])


  return (
    <div className="h-[1000px] flex_col py-20 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold border-primary-main er border-b-4 pb-8">
        다양한 템플릿 예시
      </h1>
      <p className="w-[60%] text-slate-600 mt-6">
        새로운 시각적 경험을 제공하는 Sparkle Tale은 문학에 관심 없는 아이들에게도 
        문학의 새로운 매력을 제시합니다. 또한 시각적 효과로부터 얻게되는 창의성과 직접
        글을 작성해보는 경험을 통해 아이의 또다른 적성을 찾을 수 있습니다.
        모든 템플릿은 무료 체험판을 제공하며, 결제한 고객에 한해서 텍스트 수정 기능을 제공하고 있습니다.
      </p>
      <div ref={ref} className="bg-emerald-500 mt-20 h-[550px] max-w-[1000px] w-full self-end">
        <div className="flex w-full h-full py-20">
          <div className="border-white border-r-[12px] relative flex-1 overflow-hidden h-full">
            <motion.img
              src={Template}
              alt="template"
              className="w-full h-full object-cover"
              variants={{
                hidden: { x: 600 },
                visible: { x: 0 },
              }}
              transition={{ duration: 1.5, delay: 0.25 }}
              initial="hidden"
              animate={mainControls}
              style={{
                position: "absolute",
              }}
            />
          </div>
          <div className="flex_col flex-1 h-full">
            <div className="bg-emerald-600 text-white font-semibold flex-between p-8">
              <h1 className="text-xl ">뭉게 공항에 온 밍키</h1>
              <p>2024</p>
            </div>

            <div className="flex_col gap-2 px-10 pt-5 text-white">
              <h1 className=" text-primary-yellow font-semibold">
                템플릿 설명 :
              </h1>
              <p className="text-[0.9rem] mb-4">
                뭉게 공항에 첫 출근하게 된 밍키는 연습 비행을 하게 된다. 연습
                비행을 하며 큰 난관에 부딪히게 되는데! 과연 밍키는 이 난관을
                어떻게 해쳐 나갈까요? 밍키의 여정이 궁금하다면? 지금 구매하세요.
                해당 템플릿을 구매할 경우, 기존의 텍스트를 수정할 수 있습니다.
              </p>
              <h1 className="font-semibold text-primary-yellow ">출시일 :</h1>
              <p className="text-sm mb-4">2024</p>
              <p className="text-primary-yellow font-semibold">가격 :</p>
              <p className="text-sm">1,900 원(won)</p>
              <button 
                onClick={() => navigate('/explore/detail/65ee8680dc8b1eab40cb3ab2')}
                className="bg-primary-yellow text-green-700 font-semibold rounded-lg w-fit self-end justify-self-end px-6 py-1.5 text-sm">
                템플릿 보러가기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section03;
