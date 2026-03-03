export default function Home() {
  return (
    <main className="bg-black text-white scroll-smooth">

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          AROTECH STUDIO
        </h1>
        <p className="text-lg md:text-xl opacity-70 max-w-2xl mb-10 leading-relaxed">
          새로운 장르의 경험을 설계하는 게임 스튜디오
        </p>

        <div className="flex gap-6">
          <a
            href="#games"
            className="px-8 py-3 bg-white text-black rounded-xl font-semibold hover:opacity-80 transition"
          >
            Our Games
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition"
          >
            Contact
          </a>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-28 px-6 bg-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">About</h2>
          <p className="opacity-70 leading-relaxed text-lg">
            AROTECH는 창의성과 시스템 설계를 기반으로
            깊이 있는 게임 경험을 만드는 스튜디오입니다.
            우리는 장르에 갇히지 않고,
            플레이어가 오래 즐길 수 있는 구조와
            지속 가능한 콘텐츠를 연구합니다.
          </p>
        </div>
      </section>

      {/* ================= OUR GAMES ================= */}
      <section id="games" className="py-28 px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Games
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* BCM */}
          <div className="bg-zinc-900 p-10 rounded-2xl hover:scale-105 transition duration-300 border border-zinc-800">
            <h3 className="text-2xl font-bold mb-4">BCM</h3>
            <p className="opacity-70 mb-6">
              전략과 운영의 깊이를 담은
              차세대 야구 경영 시뮬레이션 게임.
            </p>
            <a
              href="https://bcm-game.com"
              className="text-white underline opacity-80 hover:opacity-100"
            >
              Visit Website →
            </a>
          </div>

          {/* Dear Idol */}
          <div className="bg-zinc-900 p-10 rounded-2xl hover:scale-105 transition duration-300 border border-zinc-800">
            <h3 className="text-2xl font-bold mb-4">Dear Idol</h3>
            <p className="opacity-70 mb-6">
              감성과 전략이 결합된
              차세대 아이돌 프로듀싱 프로젝트.
            </p>
            <a
              href="https://dearidol.game"
              className="text-white underline opacity-80 hover:opacity-100"
            >
              Visit Website →
            </a>
          </div>

        </div>
      </section>

      {/* ================= VISION ================= */}
      <section className="py-28 px-6 bg-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Our Vision</h2>
          <p className="opacity-70 leading-relaxed text-lg">
            우리는 단기적인 트렌드를 따르기보다,
            시간이 지나도 가치가 유지되는 게임을 만듭니다.
            시스템의 완성도와 플레이어 경험의 깊이를 통해
            지속 가능한 IP를 구축하는 것이 우리의 목표입니다.
          </p>
        </div>
      </section>

      {/* ================= CAREERS ================= */}
      <section className="py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Careers</h2>
          <p className="opacity-70 mb-8 text-lg">
            AROTECH와 함께 새로운 게임 경험을 만들어갈
            인재를 기다립니다.
          </p>
          <a
            href="mailto:contact@arotech.co.kr"
            className="px-8 py-3 bg-white text-black rounded-xl font-semibold hover:opacity-80 transition"
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-28 px-6 bg-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Contact</h2>
          <p className="opacity-70 text-lg">
            Business / Partnership / Publishing 문의는 아래 이메일로 연락해주세요.
          </p>
          <p className="mt-6 text-xl font-semibold">
            contact@arotech.co.kr
          </p>
        </div>
      </section>

    </main>
  );
}