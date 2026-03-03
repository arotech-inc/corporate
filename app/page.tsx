export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden relative">

      {/* 배경 네온 글로우 */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-indigo-600 opacity-20 blur-[200px] -z-10" />

      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 w-full backdrop-blur-xl bg-black/40 border-b border-white/5 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold tracking-wide">AROTECH</h1>
          <nav className="hidden md:flex gap-8 text-sm opacity-80">
            <a href="#games" className="hover:opacity-100">Games</a>
            <a href="#vision" className="hover:opacity-100">Vision</a>
            <a href="#careers" className="hover:opacity-100">Careers</a>
            <a href="#contact" className="hover:opacity-100">Contact</a>
          </nav>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6">
          WE BUILD
          <br />
          <span className="text-indigo-500">GAME SYSTEMS</span>
        </h1>
        <p className="opacity-60 max-w-xl text-lg">
          구조와 전략이 살아있는 게임을 설계하는
          차세대 스튜디오
        </p>
      </section>

      {/* ================= DASHBOARD STYLE SECTION ================= */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900/70 p-8 rounded-2xl border border-white/10">
            <h3 className="text-3xl font-bold text-indigo-500">2</h3>
            <p className="opacity-60 mt-2">Active Projects</p>
          </div>

          <div className="bg-zinc-900/70 p-8 rounded-2xl border border-white/10">
            <h3 className="text-3xl font-bold text-indigo-500">100%</h3>
            <p className="opacity-60 mt-2">In-house Planning</p>
          </div>

          <div className="bg-zinc-900/70 p-8 rounded-2xl border border-white/10">
            <h3 className="text-3xl font-bold text-indigo-500">∞</h3>
            <p className="opacity-60 mt-2">Scalable Systems</p>
          </div>

        </div>
      </section>

      {/* ================= OUR GAMES ================= */}
      <section id="games" className="py-32 px-6 border-t border-white/5">
        <h2 className="text-4xl font-bold text-center mb-20">
          OUR PROJECTS
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          <div className="group relative bg-zinc-900 p-12 rounded-3xl border border-white/10 hover:border-indigo-500 transition duration-500">
            <h3 className="text-3xl font-bold mb-6">BCM</h3>
            <p className="opacity-60 mb-6">
              깊이 있는 운영 전략을 구현한
              야구 경영 시뮬레이션
            </p>
          </div>

          <div className="group relative bg-zinc-900 p-12 rounded-3xl border border-white/10 hover:border-pink-500 transition duration-500">
            <h3 className="text-3xl font-bold mb-6">Dear Idol</h3>
            <p className="opacity-60 mb-6">
              감성과 전략이 결합된
              아이돌 프로듀싱 프로젝트
            </p>
          </div>

        </div>
      </section>

      {/* ================= VISION ================= */}
      <section id="vision" className="py-32 px-6 border-t border-white/5 text-center">
        <h2 className="text-4xl font-bold mb-10">
          OUR VISION
        </h2>
        <p className="max-w-3xl mx-auto opacity-60 text-lg">
          우리는 단기 트렌드가 아닌,
          구조적 완성도를 통해 지속 가능한 IP를 구축합니다.
        </p>
      </section>

      {/* ================= CAREERS ================= */}
      <section id="careers" className="py-32 px-6 border-t border-white/5 text-center">
        <h2 className="text-4xl font-bold mb-10">
          CAREERS
        </h2>
        <p className="opacity-60 mb-8">
          함께 시스템을 설계할 동료를 찾습니다.
        </p>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-32 px-6 border-t border-white/5 text-center">
        <h2 className="text-4xl font-bold mb-6">
          CONTACT
        </h2>
        <p className="opacity-60">
          arotech@arotech.co.kr
        </p>
      </section>

    </main>
  );
}