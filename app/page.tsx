"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
      className="bg-black text-white overflow-hidden"
    >

      {/* ================= HEADER ================= */}
      <header className="fixed top-0 w-full bg-black/70 backdrop-blur-lg border-b border-white/10 z-50">
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

      {/* ================= HERO ================= */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-20">

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

        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
            BUILD THE SYSTEM
          </h1>
          <p className="mt-6 opacity-70 max-w-xl mx-auto">
            구조와 전략이 살아있는 게임을 설계하는 차세대 스튜디오
          </p>
        </div>

      </section>

      {/* ================= PROJECTS ================= */}
      <motion.section
        id="games"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        variants={fadeUp}
        className="py-40 px-6 border-t border-white/10"
      >
        <h2 className="text-5xl font-bold text-center mb-24">
          OUR PROJECTS
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">

          {/* BCM */}
          <a
            href="https://bcm-game.com"
            target="_blank"
            rel="noopener noreferrer"
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

      {/* ================= VISION ================= */}
      <motion.section
        id="vision"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        variants={fadeUp}
        className="py-40 px-6 border-t border-white/10 text-center"
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
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        variants={fadeUp}
        className="py-40 px-6 border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-24">
            <h2 className="text-5xl font-bold mb-6">CAREERS</h2>
            <p className="opacity-60 max-w-2xl mx-auto text-lg">
              AROTECH와 함께 새로운 경험을 설계할 동료를 찾습니다.
            </p>
          </div>

          {/* 채용 포지션 */}
          <div className="mb-24">
            <p className="text-xs tracking-widest text-white/40 uppercase mb-8">Open Positions</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { role: "Game Designer", type: "정규직", desc: "시스템 설계, 밸런싱, 콘텐츠 기획 전반을 담당합니다." },
                { role: "Unity Developer", type: "정규직", desc: "게임 클라이언트 개발 및 최적화를 담당합니다." },
                { role: "Backend Engineer", type: "정규직", desc: "서버 아키텍처 설계 및 API 개발을 담당합니다." },
                { role: "2D Artist", type: "계약직 · 프리랜서", desc: "캐릭터, UI, 배경 아트워크 제작을 담당합니다." },
              ].map(({ role, type, desc }) => (
                <div
                  key={role}
                  className="group flex flex-col gap-3 bg-zinc-900 border border-white/10 rounded-2xl px-8 py-6 hover:border-white/30 transition duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">{role}</span>
                    <span className="text-xs text-white/40 border border-white/10 rounded-full px-3 py-1">{type}</span>
                  </div>
                  <p className="text-white/50 text-sm">{desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-white/30 text-sm">
              지원 문의: <a href="mailto:contact@arotech.co.kr" className="text-white/50 hover:text-white transition">contact@arotech.co.kr</a>
            </p>
          </div>

          {/* 복지 */}
          <div className="mb-24">
            <p className="text-xs tracking-widest text-white/40 uppercase mb-8">Benefits</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: "👕", label: "자율복장", desc: "복장 제한 없음" },
                { icon: "🖥️", label: "장비 지원", desc: "고사양 개발 장비 제공" },
                { icon: "🎁", label: "경조사비 지원", desc: "각종 경조사 지원" },
                { icon: "🎮", label: "게임 지원", desc: "스팀·콘솔 게임 구매 지원" },
              ].map(({ icon, label, desc }) => (
                <div key={label} className="bg-zinc-900 border border-white/10 rounded-2xl px-6 py-6 text-center">
                  <div className="text-3xl mb-3">{icon}</div>
                  <p className="font-semibold text-sm mb-1">{label}</p>
                  <p className="text-white/40 text-xs">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 팀 문화 */}
          <div>
            <p className="text-xs tracking-widest text-white/40 uppercase mb-8">Team Culture</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "자율적 의사결정", body: "각자의 영역에서 스스로 판단하고 실행합니다. 보고를 위한 보고는 없습니다." },
                { title: "수평적 소통", body: "직급보다 논리가 먼저입니다. 누구나 의견을 내고, 최선의 답을 함께 찾습니다." },
                { title: "직접 만들고 검증한다", body: "아이디어는 빠르게 프로토타입으로, 결과는 플레이어의 반응으로 검증합니다." },
              ].map(({ title, body }) => (
                <div key={title} className="border-l-2 border-white/20 pl-6 py-2">
                  <h4 className="font-bold mb-3">{title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </motion.section>

      {/* ================= CONTACT ================= */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        variants={fadeUp}
        className="py-32 px-6 border-t border-white/10 text-center"
      >
        <h2 className="text-4xl font-bold mb-10">CONTACT</h2>
        <div className="max-w-5xl mx-auto text-center mb-10">
          <p className="opacity-70 mb-2">
            서울시 구로구 디지털로 34길 55
          </p>
          <p className="opacity-70 mb-12">
            contact@arotech.co.kr
          </p>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <iframe
              src="https://maps.google.com/maps?q=%EC%84%9C%EC%9A%B8%EC%8B%9C+%EA%B5%AC%EB%A1%9C%EA%B5%AC+%EB%94%94%EC%A7%80%ED%84%B8%EB%A1%9C+34%EA%B8%B8+55&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </motion.section>


          <div className="py-16 flex justify-center gap-8 text-sm text-white/40">
            <a href="#games" className="hover:text-white transition">Games</a>
            <a href="#vision" className="hover:text-white transition">Vision</a>
            <a href="#careers" className="hover:text-white transition">Careers</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>

          <footer className="py-20 border-t border-white/10 bg-black">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-sm opacity-70">

          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <p>주식회사 에이로테크</p>
            <p>대표자: 김기영</p>
            <p>사업자등록번호: 787-86-02754</p>
            <p>통신판매업 신고번호: 제2025-서울구로-0000호</p>
            <p>서울시 구로구 디지털로 34길 55</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <p><a href="/terms" className="hover:text-white">이용약관</a></p>
            <p><a href="/privacy" className="hover:text-white">개인정보처리방침</a></p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Support</h4>
            <p><a href="https://dearidol.vercel.app/customer-service" className="hover:text-white">고객지원</a></p>
            <p>contact@arotech.co.kr</p>
          </div>

        </div>

        <p className="mt-16 text-center text-xs opacity-50">
          © 2022 AROTECH. All rights reserved.
        </p>

      </footer>

    </motion.main>
  );
}