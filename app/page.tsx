"use client";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";

<motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="py-32 px-6 border-t border-white/5"
></motion.section>

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden relative">
      <ParticlesBackground />

      {/* ================= BACKGROUND FX ================= */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-zinc-950 to-black" />
      <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-indigo-600 opacity-20 blur-[220px] -z-10" />

      {/* ================= HERO ================= */}
<section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover opacity-40"
  >
    <source src="/logo.mp4" type="video/mp4" />
  </video>

  <div className="relative z-10 px-6">
    <h1 className="text-7xl md:text-9xl font-extrabold">
      BUILD THE SYSTEM
    </h1>
  </div>

</section>

      {/* ================= STUDIO STATS ================= */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          <div className="bg-zinc-900/60 backdrop-blur-xl p-10 rounded-3xl border border-white/10 hover:border-indigo-500 transition">
            <h3 className="text-5xl font-bold text-indigo-500">2</h3>
            <p className="opacity-60 mt-4">Active Titles</p>
          </div>

          <div className="bg-zinc-900/60 backdrop-blur-xl p-10 rounded-3xl border border-white/10 hover:border-indigo-500 transition">
            <h3 className="text-5xl font-bold text-indigo-500">IP</h3>
            <p className="opacity-60 mt-4">Original Concepts</p>
          </div>

          <div className="bg-zinc-900/60 backdrop-blur-xl p-10 rounded-3xl border border-white/10 hover:border-indigo-500 transition">
            <h3 className="text-5xl font-bold text-indigo-500">∞</h3>
            <p className="opacity-60 mt-4">Scalable Systems</p>
          </div>

        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="games" className="py-32 px-6 border-t border-white/5">
        <h2 className="text-5xl font-bold text-center mb-24 tracking-tight">
          OUR PROJECTS
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">

          {/* BCM */}
          <div className="relative group bg-zinc-900 rounded-3xl p-14 border border-white/10 hover:border-indigo-500 transition duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
            <h3 className="text-4xl font-bold mb-6">BCM</h3>
            <p className="opacity-60 mb-10 text-lg">
              전략과 데이터 기반 운영이 결합된
              차세대 야구 시뮬레이션.
            </p>
            <a className="text-indigo-400 underline hover:opacity-100 opacity-70 transition">
              Explore →
            </a>
          </div>

          {/* Dear Idol */}
          <div className="relative group bg-zinc-900 rounded-3xl p-14 border border-white/10 hover:border-pink-500 transition duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
            <h3 className="text-4xl font-bold mb-6">Dear Idol</h3>
            <p className="opacity-60 mb-10 text-lg">
              감성과 전략이 만나는
              차세대 아이돌 프로듀싱 프로젝트.
            </p>
            <a className="text-pink-400 underline hover:opacity-100 opacity-70 transition">
              Explore →
            </a>
          </div>

        </div>
      </section>

      {/* ================= VISION ================= */}
      <section className="py-40 px-6 border-t border-white/5 text-center">
        <h2 className="text-6xl font-extrabold tracking-tight mb-10">
          DESIGN. SYSTEM. EXPERIENCE.
        </h2>
        <p className="max-w-3xl mx-auto opacity-60 text-lg leading-relaxed">
          우리는 단기 유행이 아닌,
          구조적 완성도를 통해 오래 남는 게임을 만듭니다.
        </p>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-32 px-6 border-t border-white/5 text-center">
        <h2 className="text-4xl font-bold mb-8">
          CONTACT
        </h2>
        <p className="opacity-60">
          arotech@arotech.co.kr
        </p>
      </section>

    </main>
  );
}