"use client";

import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";

export default function Home() {
  return (
    <main className="relative bg-black text-white overflow-hidden">

      <ParticlesBackground />

      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 w-full backdrop-blur-xl bg-black/40 border-b border-white/5 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold tracking-wide text-white">
            AROTECH
          </h1>
          <nav className="hidden md:flex gap-8 text-sm text-white/70">
            <a href="#games" className="hover:text-white transition">Games</a>
            <a href="#vision" className="hover:text-white transition">Vision</a>
            <a href="#careers" className="hover:text-white transition">Careers</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center text-center pt-32 overflow-hidden">

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
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
            BUILD THE SYSTEM
          </h1>
          <p className="mt-6 max-w-xl mx-auto opacity-60 text-lg">
            구조와 전략이 살아있는 게임을 설계하는
            차세대 스튜디오
          </p>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-32 px-6 border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          <div className="bg-zinc-900/70 p-10 rounded-3xl border border-white/10">
            <h3 className="text-5xl font-bold text-indigo-500">2</h3>
            <p className="opacity-60 mt-4">Active Titles</p>
          </div>

          <div className="bg-zinc-900/70 p-10 rounded-3xl border border-white/10">
            <h3 className="text-5xl font-bold text-indigo-500">IP</h3>
            <p className="opacity-60 mt-4">Original Concepts</p>
          </div>

          <div className="bg-zinc-900/70 p-10 rounded-3xl border border-white/10">
            <h3 className="text-5xl font-bold text-indigo-500">∞</h3>
            <p className="opacity-60 mt-4">Scalable Systems</p>
          </div>

        </div>
      </motion.section>

      {/* ================= PROJECTS ================= */}
      <motion.section
        id="games"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-32 px-6 border-t border-white/5"
      >
        <h2 className="text-5xl font-bold text-center mb-24">
          OUR PROJECTS
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">

          <div className="bg-zinc-900 p-14 rounded-3xl border border-white/10 hover:border-indigo-500 transition">
            <h3 className="text-4xl font-bold mb-6">BCM</h3>
            <p className="opacity-60 mb-6">
              전략과 데이터 기반 운영이 결합된 야구 시뮬레이션.
            </p>
          </div>

          <div className="bg-zinc-900 p-14 rounded-3xl border border-white/10 hover:border-pink-500 transition">
            <h3 className="text-4xl font-bold mb-6">Dear Idol</h3>
            <p className="opacity-60 mb-6">
              감성과 전략이 만나는 아이돌 프로듀싱 프로젝트.
            </p>
          </div>

        </div>
      </motion.section>

      {/* ================= VISION ================= */}
      <motion.section
        id="vision"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-40 px-6 border-t border-white/5 text-center"
      >
        <h2 className="text-6xl font-extrabold mb-10">
          DESIGN. SYSTEM. EXPERIENCE.
        </h2>
        <p className="max-w-3xl mx-auto opacity-60 text-lg">
          우리는 구조적 완성도를 통해 오래 남는 게임을 만듭니다.
        </p>
      </motion.section>

      {/* ================= CAREERS ================= */}
      <motion.section
        id="careers"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-32 px-6 border-t border-white/5 text-center"
      >
        <h2 className="text-4xl font-bold mb-8">CAREERS</h2>
        <p className="opacity-60">
          함께 시스템을 설계할 동료를 찾습니다.
        </p>
      </motion.section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="py-32 px-6 border-t border-white/5 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">CONTACT</h2>
        <p className="opacity-60">arotech@arotech.co.kr</p>
      </section>

    </main>
  );
}