"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

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

      <SiteHeader />

      {/* ================= HERO ================= */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20">

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

        <div className="relative z-10 text-center px-6 mt-[40vh] md:mt-0">
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight">
            BUILD THE SYSTEM
          </h1>
          <p className="mt-4 md:mt-6 opacity-70 max-w-xl mx-auto text-sm md:text-base">
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
            href="https://bcm-lovat.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 transition duration-500 hover:border-indigo-500 hover:scale-105"
          >
            <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden">
              <Image
                src="/bcm.png"
                alt="BCM Screenshot"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
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
            <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden">
              <Image
                src="/idol.jpg"
                alt="Dear Idol Visual"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
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
        className="py-40 px-6 border-t border-white/10"
      >
        <div className="relative w-full mb-20 overflow-hidden rounded-2xl">
          <Image
            src="/vision_title2.jpg"
            alt="AROTECH 비전 - Design, System, Experience"
            width={3200}
            height={1312}
            sizes="100vw"
            quality={80}
            className="w-full h-auto"
          />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-center">
              DESIGN. SYSTEM. EXPERIENCE.
            </h2>
            <p className="max-w-3xl mx-auto opacity-60 text-[3vw] sm:text-sm md:text-lg text-center whitespace-nowrap">
              우리는 구조적 완성도를 통해 오래 남는 게임을 만듭니다.
            </p>
          </div>
        </div>

        {/* 3 Vision Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-5 mb-20 text-left">

          {/* Card 01 */}
          <div className="relative bg-zinc-900/80 border border-white/10 rounded-2xl p-8 overflow-hidden">
            <span className="text-white/30 text-xs tracking-widest block mb-6">01</span>
            <div className="absolute top-6 right-6">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" style={{ filter: "drop-shadow(0 0 12px #38bdf8)" }}>
                <rect x="28" y="28" width="24" height="24" rx="3" stroke="#38bdf8" strokeWidth="1.5"/>
                <line x1="40" y1="10" x2="40" y2="28" stroke="#38bdf8" strokeWidth="1.5"/>
                <line x1="40" y1="52" x2="40" y2="70" stroke="#38bdf8" strokeWidth="1.5"/>
                <line x1="10" y1="40" x2="28" y2="40" stroke="#38bdf8" strokeWidth="1.5"/>
                <line x1="52" y1="40" x2="70" y2="40" stroke="#38bdf8" strokeWidth="1.5"/>
                <circle cx="40" cy="10" r="3" fill="#38bdf8"/>
                <circle cx="40" cy="70" r="3" fill="#38bdf8"/>
                <circle cx="10" cy="40" r="3" fill="#38bdf8"/>
                <circle cx="70" cy="40" r="3" fill="#38bdf8"/>
                <line x1="28" y1="28" x2="15" y2="15" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.5"/>
                <line x1="52" y1="28" x2="65" y2="15" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.5"/>
                <line x1="28" y1="52" x2="15" y2="65" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.5"/>
                <line x1="52" y1="52" x2="65" y2="65" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.5"/>
                <circle cx="15" cy="15" r="2.5" fill="#38bdf8" fillOpacity="0.6"/>
                <circle cx="65" cy="15" r="2.5" fill="#38bdf8" fillOpacity="0.6"/>
                <circle cx="15" cy="65" r="2.5" fill="#38bdf8" fillOpacity="0.6"/>
                <circle cx="65" cy="65" r="2.5" fill="#38bdf8" fillOpacity="0.6"/>
                <rect x="34" y="34" width="12" height="12" rx="2" fill="#38bdf8" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="1"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 pr-20">시스템 중심 설계</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              직감이 아닌 구조와 데이터로 게임을 설계합니다.<br />
              반복 가능한 재미를 만드는 것이 우리의 기준입니다.
            </p>
          </div>

          {/* Card 02 */}
          <div className="relative bg-zinc-900/80 border border-white/10 rounded-2xl p-8 overflow-hidden">
            <span className="text-white/30 text-xs tracking-widest block mb-6">02</span>
            <div className="absolute top-6 right-6">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" style={{ filter: "drop-shadow(0 0 12px #f59e0b)" }}>
                <circle cx="40" cy="28" r="10" stroke="#f59e0b" strokeWidth="1.5"/>
                <path d="M22 62 C22 50 58 50 58 62" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round"/>
                <rect x="30" y="24" width="20" height="8" rx="4" stroke="#f59e0b" strokeWidth="1.5" fill="none"/>
                <line x1="12" y1="28" x2="22" y2="32" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.5"/>
                <line x1="68" y1="28" x2="58" y2="32" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.5"/>
                <line x1="16" y1="50" x2="26" y2="48" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.5"/>
                <line x1="64" y1="50" x2="54" y2="48" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.5"/>
                <circle cx="12" cy="28" r="2.5" fill="#f59e0b" fillOpacity="0.7"/>
                <circle cx="68" cy="28" r="2.5" fill="#f59e0b" fillOpacity="0.7"/>
                <circle cx="16" cy="50" r="2.5" fill="#f59e0b" fillOpacity="0.5"/>
                <circle cx="64" cy="50" r="2.5" fill="#f59e0b" fillOpacity="0.5"/>
                <circle cx="40" cy="14" r="2" fill="#f59e0b" fillOpacity="0.8"/>
                <line x1="40" y1="12" x2="40" y2="6" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.5"/>
                <circle cx="40" cy="5" r="1.5" fill="#f59e0b" fillOpacity="0.4"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 pr-20">플레이어 경험 우선</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              모든 기획과 개발의 출발점은 플레이어입니다.<br />
              유저가 몰입하는 순간을 끊임없이 연구합니다.
            </p>
          </div>

          {/* Card 03 */}
          <div className="relative bg-zinc-900/80 border border-white/10 rounded-2xl p-8 overflow-hidden">
            <span className="text-white/30 text-xs tracking-widest block mb-6">03</span>
            <div className="absolute top-6 right-6">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" style={{ filter: "drop-shadow(0 0 12px #a78bfa)" }}>
                <circle cx="28" cy="40" r="16" stroke="#a78bfa" strokeWidth="1.5"/>
                <polygon points="23,33 23,47 35,40" fill="#a78bfa" fillOpacity="0.8"/>
                <path d="M52 24 A18 18 0 0 1 52 56" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M58 18 L52 24 L60 28" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M58 62 L52 56 L60 52" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 pr-20">빠른 실행, 빠른 검증</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              완벽한 기획보다 빠른 프로토타입을 믿습니다.<br />
              만들고, 테스트하고, 개선하는 사이클을 반복합니다.
            </p>
          </div>

        </div>

        {/* Stats Row */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-16 text-center">

          <div className="flex flex-col items-center gap-3">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ filter: "drop-shadow(0 0 6px #f59e0b)" }}>
              <path d="M20 4 L36 13 L36 27 L20 36 L4 27 L4 13 Z" stroke="#f59e0b" strokeWidth="1.5" fill="none"/>
              <path d="M20 4 L20 36" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.4"/>
              <path d="M4 13 L36 13" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.4"/>
              <path d="M4 27 L36 27" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.4"/>
            </svg>
            <p className="text-5xl font-extrabold">2022</p>
            <p className="text-white/40 text-sm">설립 연도</p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ filter: "drop-shadow(0 0 6px #f59e0b)" }}>
              <circle cx="20" cy="20" r="6" stroke="#f59e0b" strokeWidth="1.5"/>
              <path d="M20 4 L20 8 M20 32 L20 36 M4 20 L8 20 M32 20 L36 20" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M8.7 8.7 L11.5 11.5 M28.5 28.5 L31.3 31.3 M8.7 31.3 L11.5 28.5 M28.5 11.5 L31.3 8.7" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <p className="text-5xl font-extrabold">2+</p>
            <p className="text-white/40 text-sm">진행 프로젝트</p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ filter: "drop-shadow(0 0 6px #f59e0b)" }}>
              <circle cx="20" cy="13" r="5" stroke="#f59e0b" strokeWidth="1.5"/>
              <path d="M8 34 C8 25 32 25 32 34" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="10" cy="14" r="3.5" stroke="#f59e0b" strokeWidth="1.2" strokeOpacity="0.6"/>
              <circle cx="30" cy="14" r="3.5" stroke="#f59e0b" strokeWidth="1.2" strokeOpacity="0.6"/>
              <path d="M2 32 C2 26 10 24 10 24" stroke="#f59e0b" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.6"/>
              <path d="M38 32 C38 26 30 24 30 24" stroke="#f59e0b" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.6"/>
            </svg>
            <p className="text-5xl font-extrabold">40+</p>
            <p className="text-white/40 text-sm">팀원</p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ filter: "drop-shadow(0 0 8px #a78bfa)" }}>
              <path d="M5 20 C5 14 10 10 15 10 C18 10 21 12 23 15 C25 18 27 22 29 24 C31 26 33 28 35 28 C38 28 38 24 35 20 C33 17 30 16 27 18" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" fill="none"/>
              <path d="M35 20 C35 14 30 10 25 10 C22 10 19 12 17 15 C15 18 13 22 11 24 C9 26 7 28 5 28 C2 28 2 24 5 20 C7 17 10 16 13 18" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" fill="none"/>
            </svg>
            <p className="text-5xl font-extrabold">∞</p>
            <p className="text-white/40 text-sm">가능성</p>
          </div>

        </div>
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

          {/* 지원하기 버튼 */}
          <div className="text-center mt-20">
            <a
              href="/apply"
              className="inline-block bg-white text-black font-bold text-lg px-12 py-4 rounded-full hover:bg-white/90 transition duration-200"
            >
              지원하기
            </a>
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
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <iframe
              title="AROTECH 오피스 위치"
              src="https://maps.google.com/maps?q=%EC%84%9C%EC%9A%B8%EC%8B%9C+%EA%B5%AC%EB%A1%9C%EA%B5%AC+%EB%94%94%EC%A7%80%ED%84%B8%EB%A1%9C+34%EA%B8%B8+55&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <p className="opacity-70">
              서울시 구로구 디지털로 34길 55
            </p>
            <p className="opacity-70">
              contact@arotech.co.kr
            </p>
            <a
              href="/support"
              className="inline-block bg-white text-black font-bold px-10 py-3 rounded-full hover:bg-white/90 transition duration-200 mt-4"
            >
              문의하기
            </a>
          </div>
        </div>
      </motion.section>


      <SiteFooter />

    </motion.main>
  );
}