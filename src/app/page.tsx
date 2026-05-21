const previewCells = [
  "bg-emerald-200",
  "bg-emerald-300",
  "bg-emerald-400",
  "bg-slate-900",
  "bg-rose-300",
  "bg-amber-200",
  "bg-cyan-200",
  "bg-indigo-300",
  "bg-emerald-500",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-slate-950">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-between px-6 py-8 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="grid size-9 grid-cols-3 overflow-hidden rounded border-2 border-slate-950 shadow-[3px_3px_0_#0f172a]">
              {previewCells.map((color, index) => (
                <div key={`${color}-${index}`} className={color} />
              ))}
            </div>
            <span className="text-lg font-black tracking-normal">Deebi</span>
          </div>
          <span className="rounded-full border border-slate-300 bg-white px-3 py-1 text-sm font-semibold text-slate-700">
            MVP 준비 중
          </span>
        </header>

        <div className="grid items-center gap-10 py-14 lg:grid-cols-[1fr_360px]">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-normal text-emerald-700">
              GitHub activity pet dashboard
            </p>
            <h1 className="text-5xl font-black leading-tight tracking-normal sm:text-6xl">
              커밋을 돌보면 도트 펫도 살아난다.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              GitHub 커밋 활동으로 건강도가 오르고, 포인트를 모아 도트 아이템을
              뽑아 꾸미는 작은 대시보드입니다. 방치하면 수염이 자라고, 꾸준히
              커밋하면 다시 말끔해집니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                disabled
                className="rounded-md border-2 border-slate-950 bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-[4px_4px_0_#10b981] opacity-80"
              >
                GitHub 로그인 준비 중
              </button>
              <a
                href="#setup"
                className="rounded-md border-2 border-slate-950 bg-white px-5 py-3 text-sm font-bold text-slate-950 shadow-[4px_4px_0_#94a3b8]"
              >
                준비 항목 보기
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm">
            <div className="border-2 border-slate-950 bg-white p-5 shadow-[8px_8px_0_#0f172a]">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-600">현재 상태</span>
                <span className="text-sm font-black text-emerald-700">HEALTH 82</span>
              </div>
              <div className="grid aspect-square grid-cols-8 border-2 border-slate-950 bg-sky-100">
                {Array.from({ length: 64 }).map((_, index) => {
                  const row = Math.floor(index / 8);
                  const col = index % 8;
                  const isBody = row >= 2 && row <= 6 && col >= 2 && col <= 5;
                  const isEye = row === 3 && (col === 3 || col === 5);
                  const isSmile = row === 5 && col >= 3 && col <= 5;
                  const isSpark = (row === 1 && col === 1) || (row === 0 && col === 6);

                  let color = "bg-sky-100";
                  if (isBody) color = "bg-emerald-300";
                  if (row === 2 && col >= 2 && col <= 5) color = "bg-emerald-500";
                  if (isEye) color = "bg-slate-950";
                  if (isSmile) color = "bg-rose-400";
                  if (isSpark) color = "bg-amber-300";

                  return <div key={index} className={`${color} border border-sky-200`} />;
                })}
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2 text-center text-sm">
                <div className="border border-slate-200 bg-slate-50 p-3">
                  <div className="font-black">12</div>
                  <div className="text-slate-500">오늘 커밋</div>
                </div>
                <div className="border border-slate-200 bg-slate-50 p-3">
                  <div className="font-black">5일</div>
                  <div className="text-slate-500">streak</div>
                </div>
                <div className="border border-slate-200 bg-slate-50 p-3">
                  <div className="font-black">240</div>
                  <div className="text-slate-500">포인트</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="setup" className="grid gap-3 border-t border-slate-300 pt-6 text-sm text-slate-700 sm:grid-cols-3">
          <div>
            <div className="font-black text-slate-950">Phase 01</div>
            <p>Next.js, TypeScript, Tailwind 기반을 구성합니다.</p>
          </div>
          <div>
            <div className="font-black text-slate-950">환경 변수</div>
            <p>GitHub OAuth, Supabase, 세션 secret 이름을 고정합니다.</p>
          </div>
          <div>
            <div className="font-black text-slate-950">다음 단계</div>
            <p>검토 후 DB 스키마와 items seed를 이어서 진행합니다.</p>
          </div>
        </section>
      </section>
    </main>
  );
}
