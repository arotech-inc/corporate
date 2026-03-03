export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* ===== Background Gradient Glow ===== */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-zinc-900 via-black to-black" />
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-600 opacity-10 blur-[180px] -z-10" />

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6">
          AROTECH STUDIO
        </h1>
        <p className="text-lg md:text-xl opacity-60 max-w-2xl leading-relaxed mb-12">
          새로운 장르의 경험을 설계하는
          <br />
          차세대 게임 스튜디오
        </p>

        <div className="flex gap-6">
          <a
            href="#games"
            className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition duration-300"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-white/30 hover:bg-white hover:text-black transition duration-300"
          >
            Contact
          </a>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-36 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 tracking-tight">
            About
          </h2>
          <p className="opacity-60 text-lg leading-relaxed">
            AROTECH는 창의성과 시스템 설계를 기반으로
            깊이 있는 게임 경험을 만드는 스튜디오입니다.
            우리는 트렌드를 따르기보다,
            구조와 완성도를 통해 오래 남는 게임을 만듭니다.
          </p>
        </div>
      </section>

      {/* ================= OUR GAMES ================= */}
      <section
        id="games"
        className="py-36 px-6 border-t border-white/5"
      >
        <h2 className="text-4xl font-bold text-center mb-20 tracking-tight">
          Our Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">

          <div className="group relative bg-zinc-900/60 backdrop-blur-xl p-12 rounded-3xl border border-white/10 hover:border-white/30 transition duration-500">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
            <h3 className="text-3xl font-bold mb-6">BCM</h3>
            <p className="opacity-60 leading-relaxed mb-8">
              전략과 운영의 깊이를 담은
              차세대 야구 경영 시뮬레이션 게임.
            </p>
            <a
              href="https://bcm-game.com"
              className="underline opacity-70 hover:opacity-100 transition"
            >
              Visit Website →
            </a>
          </div>

          <div className="group relative bg-zinc-900/60 backdrop-blur-xl p-12 rounded-3xl border border-white/10 hover:border-white/30 transition duration-500">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
            <h3 className="text-3xl font-bold mb-6">Dear Idol</h3>
            <p className="opacity-60 leading-relaxed mb-8">
              감성과 전략이 결합된
              차세대 아이돌 프로듀싱 프로젝트.
            </p>
            <a
              href="https://dearidol.game"
              className="underline opacity-70 hover:opacity-100 transition"
            >
              Visit Website →
            </a>
          </div>

        </div>
      </section>

      {/* ================= VISION ================= */}
      <section className="py-36 px-6 border-t border-white/5 text-center">
        <h2 className="text-4xl font-bold mb-10 tracking-tight">
          Our Vision
        </h2>
        <p className="max-w-3xl mx-auto opacity-60 text-lg leading-relaxed">
          우리는 단기적인 유행보다,
          시간이 지나도 가치가 유지되는 구조를 설계합니다.
          지속 가능한 IP와 깊이 있는 플레이 경험이
          우리의 목표입니다.
        </p>
      </section>

      {/* ================= CAREERS ================= */}
      <section className="py-36 px-6 border-t border-white/5 text-center">
        <h2 className="text-4xl font-bold mb-10 tracking-tight">
          Careers
        </h2>
        <p className="opacity-60 mb-10 text-lg">
          AROTECH와 함께 새로운 경험을 설계할
          동료를 기다립니다.
        </p>
        <a
          href="mailto:contact@arotech.co.kr"
          className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition duration-300"
        >
          Apply Now
        </a>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="py-36 px-6 border-t border-white/5 text-center"
      >
        <h2 className="text-4xl font-bold mb-10 tracking-tight">
          Contact
        </h2>
        <p className="opacity-60 mb-6">
          Business / Publishing / Partnership 문의
        </p>
        <p className="text-xl font-semibold">
          contact@arotech.co.kr
        </p>
      </section>

    </main>
  );
}