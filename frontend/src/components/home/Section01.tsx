import Reveal from "../Reveal";
import dots from '../../../public/images/dots.png';

const Section01 = () => {
  return (
    <div className="max-w-7xl mx-auto h-[1000px] pt-48 relative">
      <div className="flex_col pl-32 absolute top-[260px]">
        <Reveal>
          <h1 className="text-6xl font-black tracking-wide leading-tight">
            <span className="text-emerald-400 text-7xl">스파클 테일</span>
            에 &nbsp;오신 &nbsp;것을 <br />
            환영합니다<span className="text-emerald-400 text-7xl ml-1">.</span>
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-slate-700 mt-12 mb-16 font-semibold leading-[1.75] text-lg max-w-[750px]">
            빛나는 동화세계, 스파클 테일은 신비로운 동화를 3D로 구현해서
            제공하는 회사입니다. 저희의 열정은 꿈과 상상력을 실현하고자는
            바람에서 시작되었습니다. 스파클 테일은 어린이뿐 아니라 모든 연령대의
            이들에게 즐거움을 주고, 긍정적인 메시지와 가치관을 전달하는 문화를
            개척해 나가고 있습니다.
          </p>
        </Reveal>
        <button className="cursor-pointer w-fit transition-all hover:scale-105 text-lg font-semibold bg-emerald-400 text-white py-2 px-8 shadow-md border rounded-lg">
          둘러보기
        </button>
      </div>
      <img
        src={dots}
        alt="dots"
        className="absolute w-[50%] object-cover h-[600px] right-20 z-[1] opacity-40"
      />
    </div>
  );
};

export default Section01;
