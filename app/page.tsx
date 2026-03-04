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

      {/* HERO (반응형 개선 버전) */}
      <section className="relative w-full pt-28 md:pt-40 overflow-hidden">

        {/* 모바일에서는 높이 줄임 */}
        <div className="relative w-full h-[70vh] md:h-screen">

          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/logo.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-8xl font-extrabold tracking-tight">
                BUILD THE SYSTEM
              </h1>
              <p className="mt-6 max-w-xl mx-auto opacity-70 text-base md:text-lg">
                구조와 전략이 살아있는 게임을 설계하는 차세대 스튜디오
              </p>
            </div>
          </div>

        </div>
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

          <div className="group bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 transition duration-500 hover:border-indigo-500 hover:scale-105">
            <div className="relative h-72 md:h-80 overflow-hidden">
              <Image
                src="/bcm.jpg"
                alt="BCM Screenshot"
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
            <div className="p-10">
              <h3 className="text-3xl font-bold mb-4">BCM</h3>
              <p className="opacity-60">
                전략과 데이터 기반 운영이 결합된 차세대 야구 시뮬레이션.
              </p>
            </div>
          </div>

          <div className="group bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 transition duration-500 hover:border-pink-500 hover:scale-105">
            <div className="relative h-72 md:h-80 overflow-hidden">
              <Image
                src="/idol.jpg"
                alt="Dear Idol Visual"
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
            <div className="p-10">
              <h3 className="text-3xl font-bold mb-4">Dear Idol</h3>
              <p className="opacity-60">
                감성과 전략이 만나는 아이돌 프로듀싱 프로젝트.
              </p>
            </div>
          </div>

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

      {/* CAREERS */}
      <motion.section
        id="careers"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        variants={fadeUp}
        className="py-40 px-6 border-t border-white/5 text-center"
      >
        <h2 className="text-4xl font-bold mb-10">CAREERS</h2>
        <p className="opacity-60 max-w-2xl mx-auto mb-8">
          AROTECH와 함께 새로운 경험을 설계할 동료를 찾습니다.
        </p>
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
          arotech@arotech.co.kr
        </p>
      </motion.section>

    </motion.main>
  );
}