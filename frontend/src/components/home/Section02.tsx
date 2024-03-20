import Love from "../../../public/images/love.png";
import Dream from "../../../public/images/dream.png";
import Product from "../../../public/images/product.png";
import {motion, useInView, useAnimation} from 'framer-motion';
import { useEffect, useRef } from "react";

const Section02 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if(isInView){
      mainControls.start("visible");
    }
  }, [isInView])

  return (
    <div className="w-full h-[1100px] pt-16 bg-primary-emrald text-white">
      <div ref={ref} className="max-w-6xl mx-auto">

        {/* text */}
        <div className="flex_col">
            <p 
              className="text-4xl leading-[1.25] font-black border-l-[5px] pl-8 border-white"
            >
              스파클 테일의<br />비전
            </p>
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 75},
                visible: {opacity: 1, y: 0},
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="pl-10 mt-6 text-[1.1rem] w-[70%]"
            >
              Sparkle Tale은 아름다운 동화와 전설을 모두에게 공유하여, 서로의 다양성을 존중하고 이해하는데 기여하고자 합니다.
              우리의 꿈은 템플릿을 제공함으로써 사용자가 직접 동화를 만들어 볼 수 있으며, 궁극적으로 사랑과 행복으로 가득 찬 동화를 통해 세계를 하나로 만드는 것을 기대합니다. 
              함께 동화세계를 만들어가며, 우리의 꿈을 이루어나가고자 합니다.
            </motion.p>
        </div>

        <div className="flex-center gap-12 relative top-20 flex-wrap">

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 75},
              visible: {opacity: 1, y: 0},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1, delay: 1 }}
            className="flex_col flex-1 w-[380px] bg-emerald-700 p-5 shadow-lg border-white border rounded-md"
          >
            <h1 className="text-xl font-bold">01.</h1>
            <div className="relative flex-center mt-4">
              <div className="flex-center bg-primary-main relative w-64 h-64 rounded-full">
                <img src={Product} alt="product" className="w-48" />
              </div>
            </div>
            <h3 className="text-2xl tracking-wider font-black text-center mt-8 mb-4">
              Product
            </h3>
            <div className="flex-center"></div>
            <p className="text-sm px-8 text-center">
              스파클 테일은 아름다운 3D 동화를 제공합니다. 이는 색다른 시각적
              경험을 제공합니다. 이야기에서 비롯되는 교훈과 가치를 공유하며
              서로에게 긍정적인 영향을 줍니다.
            </p>
            <div className="flex-center">
              <button className="cursor-pointer bg-primary-main w-fit py-1.5 px-8 mb-4 shadow-md rounded-md mt-8 font-semibold">
                더보기
              </button>
            </div>
          </motion.div>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 75},
              visible: {opacity: 1, y: 0},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex_col flex-1 w-[380px] bg-emerald-700 p-5 shadow-lg border-white border rounded-md"
          >
            <h1 className="text-xl font-bold">02.</h1>
            <div className="relative flex-center mt-4">
              <div className="flex-center bg-primary-main relative w-64 h-64 rounded-full">
                <img src={Love} alt="product" className="w-48" />
              </div>
            </div>
            <h3 className="text-2xl tracking-wider font-black text-center mt-8 mb-4">
              Happiness
            </h3>
            <div className="flex-center"></div>
            <p className="text-sm px-8 text-center">
              스파클 테일은 아름다운 3D 동화를 제공합니다. 이는 색다른 시각적
              경험을 제공합니다. 이야기에서 비롯되는 교훈과 가치를 공유하며
              서로에게 긍정적인 영향을 줍니다.

              우리는 이야기를 통해 아이들에게 즐거움을 주고, 
              긍정적인 가치를 전달하고자 합니다. 또한 Sparkle Tale은 
              훌륭한 이야기와 흥미진진한 시각적 경험을 제공하여, 행복과 즐거움을 주기 위해 노력합니다.
            </p>
            <div className="flex-center">
              <button className="cursor-pointer bg-primary-main w-fit py-1.5 px-8 mb-4 shadow-md rounded-md mt-8 font-semibold">
                더보기
              </button>
            </div>
          </motion.div>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 75},
              visible: {opacity: 1, y: 0},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1, delay: 2 }}
            className="flex_col flex-1 w-[380px] bg-emerald-700 p-5 shadow-lg border-white border rounded-md"
          >
            <h1 className="text-xl font-bold">03.</h1>
            <div className="relative flex-center mt-4">
              <div className="flex-center bg-primary-main relative w-64 h-64 rounded-full">
                <img src={Dream} alt="product" className="w-48" />
              </div>
            </div>
            <h3 className="text-2xl tracking-wider font-black text-center mt-8 mb-4">
              Dream
            </h3>
            <div className="flex-center"></div>
            <p className="text-sm px-8 text-center">
              세계 각국의 다양한 문화를 모두에게 알리고자 하는 꿈을 가지고 있습니다. 
              또한 즐거움으로 가득 찬 동화를 공유하여, 다양성을 존중하고 이해하는데 기여하고자 합니다.
            </p>
            <div className="flex-center">
              <button className="cursor-pointer bg-primary-main w-fit py-1.5 px-8 mb-4 shadow-md rounded-md mt-8 font-semibold">
                더보기
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Section02;
