"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative bg-black text-white overflow-hidden"
    >
      <ParticlesBackground />

      {/* NAVBAR */}
      <header className="fixed top-0 w-full backdrop-blur-xl bg-black/50 border-b border-white/5 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold tracking-wide">AROTECH</h1>
          <nav className="hidden md:flex gap-8 text-sm text-white/70">
            <a href="#games" className="hover:text-white transition">Games</a>
            <a href="#vision" className="hover:text-white transition">Vision</a>
            <a href="#careers" className="hover:text-white transition">Careers</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-contain"
        >
          <source src="/logo.mp4" type="video/mp4" />
        </video>
      </section>

      {/* PROJECTS */}
      <motion.section
        id="games"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        variants={fadeUp}
        className="py-40 px-6 border-t border-white/5"
      >
        <h2 className="text-5xl font-bold text-center mb-24">
          OUR PROJECTS
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">

          {/* BCM */}
          <a
            href="https://bcm-game.com"
            className="group bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 transition duration-500 hover:border-indigo-500 hover:scale-105"
          >
            <div className="relative h-80 overflow-hidden">
              <Image
                src="/bcm.jpg"
                alt="BCM Screenshot"
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-10">
              <h3 className="text-3xl font-bold mb-4">BCM</h3>
              <p className="opacity-60">
                전략과 데이터 기반 운영이 결합된 차세대 야구 시뮬레이션.
              </p>
            </div>
          </a>

          {/* Dear Idol */}
          <a
            href="https://dearidol.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 transition duration-500 hover:border-pink-500 hover:scale-105"
          >
            <div className="relative h-80 overflow-hidden">
              <Image
                src="/idol.jpg"
                alt="Dear Idol Visual"
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-10">
              <h3 className="text-3xl font-bold mb-4">Dear Idol</h3>
              <p className="opacity-60">
                감성과 전략이 만나는 아이돌 프로듀싱 프로젝트.
              </p>
            </div>
          </a>

        </div>
      </motion.section>

      {/* VISION */}
      <motion.section
        id="vision"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        variants={fadeUp}
        className="py-40 px-6 border-t border-white/5 text-center"
      >
        <h2 className="text-6xl font-extrabold mb-10">
          DESIGN. SYSTEM. EXPERIENCE.
        </h2>
        <p className="max-w-3xl mx-auto opacity-60 text-lg">
          우리는 구조적 완성도를 통해 오래 남는 게임을 만듭니다.
        </p>
      </motion.section>

      {/* CAREERS (확장 구조) */}
      <motion.section
        id="careers"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        variants={fadeUp}
        className="py-40 px-6 border-t border-white/5"
      >
        <h2 className="text-4xl font-bold text-center mb-16">
          CAREERS
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 text-center">

          {/* 채용 포지션 */}
          <div className="bg-zinc-900 p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-semibold mb-4">채용 포지션</h3>
            <ul className="opacity-60 space-y-2">
              <li>Game Designer</li>
              <li>Client Developer</li>
              <li>UI/UX Designer</li>
            </ul>
          </div>

          {/* 복지 */}
          <div className="bg-zinc-900 p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-semibold mb-4">복지</h3>
            <ul className="opacity-60 space-y-2">
              <li>유연 근무제</li>
              <li>자율 복장</li>
              <li>성과 인센티브</li>
            </ul>
          </div>

          {/* 팀 문화 */}
          <div className="bg-zinc-900 p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-semibold mb-4">팀 문화</h3>
            <ul className="opacity-60 space-y-2">
              <li>자율적 의사결정</li>
              <li>수평적 소통</li>
              <li>빠른 실행</li>
            </ul>
          </div>

        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        variants={fadeUp}
        className="py-32 px-6 border-t border-white/5 text-center"
      >
        <h2 className="text-4xl font-bold mb-8">CONTACT</h2>
        <p className="opacity-60 mb-4">
          Business / Partnership 문의
        </p>
        <p className="text-lg font-semibold">
          contact@arotech.co.kr
        </p>
      </motion.section>

    </motion.main>
  );
}