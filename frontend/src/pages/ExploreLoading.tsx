import TemplateSkeleton from "../components/TemplateSkeleton";

const ExploreLoading = () => {
  return (
    <div className="w-full flex_col relative transition-all">
      {/* 상단 배경 */}
      <div className="w-full right-0 h-[600px] bg-primary-main animate-pulse absolute z-0" />

      {/* 상단 텍스트 */}
      <div className="relative flex_col gap-4 justify-center max-w-7xl p-12 w-full mx-auto h-[600px]">
        <h1 className="text-3xl font-semibold text-slate-600">
          템플릿 정보를 불러오는 중입니다. . .
        </h1>

        <div className="flex gap-5 mt-6">
          <div className="h-7 w-[150px] bg-slate-100 rounded-md" />
          <div className="h-7 w-[180px] bg-slate-100 rounded-md" />
        </div>

        <div className="flex flex-col gap-6 mt-10">
          <div className="h-6 w-[650px] bg-slate-100 rounded-full" />
          <div className="h-6 w-[500px] bg-slate-100 rounded-full" />
          <div className="h-6 w-[600px] bg-slate-100 rounded-full" />
        </div>
      </div>

      <div className="flex_col max-w-7xl mx-auto w-full relative white-shadow-box -top-20  p-8">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {[...Array(6)].map(() => (
            <TemplateSkeleton />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreLoading;
