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

        <div className="relative z-10 text-center px-6">
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
            className="group bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 transition duration-500 hover:scale-105"
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
            className="group bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 transition duration-500 hover:scale-105"
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
        <div className="relative w-full mb-20 overflow-hidden rounded-2xl" style={{ aspectRatio: "3200 / 1177" }}>
          <Image
            src="/vision_title2.jpg"
            alt="AROTECH 비전 - Design, System, Experience"
            fill
            sizes="100vw"
            quality={80}
            className="object-contain"
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
              <Image src="/v_icon1.png" alt="시스템 중심 설계" width={90} height={90} />
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
              <Image src="/v_icon2.png" alt="플레이어 경험 우선" width={90} height={90} />
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
              <Image src="/vision_icon3.png" alt="빠른 실행, 빠른 검증" width={90} height={90} />
            </div>
            <h3 className="text-xl font-bold mb-3 pr-20">빠른 실행, 빠른 검증</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              완벽한 기획보다 빠른 프로토타입을 믿습니다.<br />
              만들고, 테스트하고, 개선하는 사이클을 반복합니다.
            </p>
          </div>

        </div>

        {/* Stats Row */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-16 text-center items-end">

          <div className="flex flex-col items-center gap-3">
            <Image src="/v_icon4.png" alt="설립 연도" width={65} height={65} />
            <p className="text-5xl font-extrabold">2022</p>
            <p className="text-white/40 text-base">설립 연도</p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <Image src="/v_icon5.png" alt="진행 프로젝트" width={65} height={65} />
            <p className="text-5xl font-extrabold">2+</p>
            <p className="text-white/40 text-base">진행 프로젝트</p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <Image src="/v_icon6.png" alt="팀원" width={65} height={65} />
            <p className="text-5xl font-extrabold">40+</p>
            <p className="text-white/40 text-base">팀원</p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <Image src="/v_icon7.png" alt="가능성" width={130} height={130} />
            <p className="text-white/40 text-base">가능성</p>
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
          <div className="relative rounded-3xl overflow-hidden mb-24">
            <div className="relative h-64 md:h-80">
              <Image
                src="/office.jpg"
                alt="AROTECH Office"
                fill
                sizes="100vw"
                quality={85}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
              <h2 className="text-5xl font-bold mb-6">CAREERS</h2>
              <p className="opacity-60 max-w-2xl mx-auto text-lg text-center">
                AROTECH와 함께 새로운 경험을 설계할 동료를 찾습니다.
              </p>
            </div>
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
            <p className="mt-8 text-white/40 text-sm">
              채용 진행중인 포지션은 아래 채용 사이트에서 확인 가능합니다.
            </p>
            <div className="flex gap-3 mt-3">
              {[
                { name: "GAMEJOB", href: "https://www.gamejob.co.kr", logo: (
                  <div className="flex items-center gap-1.5">
                    <svg width="18" height="18" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#00B4D8"/><path d="M10 11l6 5-6 5V11z" fill="#fff"/><path d="M16 11l6 5-6 5V11z" fill="#fff" opacity=".6"/></svg>
                    <span className="text-xs font-extrabold tracking-tight">GAMEJOB</span>
                  </div>
                )},
                { name: "JOBKOREA", href: "https://www.jobkorea.co.kr", logo: (
                  <div className="flex items-center gap-1.5">
                    <svg width="18" height="18" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#2B64CE"/><text x="16" y="22" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">J</text></svg>
                    <span className="text-xs font-extrabold tracking-tight">JOBKOREA</span>
                  </div>
                )},
                { name: "saramin", href: "https://www.saramin.co.kr", logo: (
                  <div className="flex items-center gap-1.5">
                    <div className="flex flex-col gap-px">
                      <div className="flex gap-px">
                        <span className="w-2 h-2 rounded-full bg-[#7B68EE]" />
                        <span className="w-2 h-2 rounded-full bg-[#7B68EE] opacity-50" />
                      </div>
                      <div className="flex gap-px">
                        <span className="w-2 h-2 rounded-full bg-[#00D4AA] opacity-50" />
                        <span className="w-2 h-2 rounded-full bg-[#00D4AA]" />
                      </div>
                    </div>
                    <span className="text-xs font-bold">saramin</span>
                  </div>
                )},
              ].map(({ name, href, logo }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg px-3 py-2 flex items-center justify-center text-black hover:scale-105 transition duration-300"
                >
                  {logo}
                </a>
              ))}
            </div>
          </div>

          {/* 팀 문화 */}
          <div className="mb-24">
            <p className="text-xs tracking-widest text-white/40 uppercase mb-8">Team Culture</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "자율적 의사결정", body: "각자의 영역에서 스스로 판단하고 실행합니다. 보고를 위한 보고는 없습니다." },
                { title: "수평적 소통", body: "직급보다 논리가 먼저입니다. 누구나 의견을 내고, 최선의 답을 함께 찾습니다." },
                { title: "성장을 위한 투자", body: "컨퍼런스, 도서, 교육비를 지원합니다. 개인의 성장이 곧 팀의 성장입니다." },
              ].map(({ title, body }) => (
                <div key={title} className="border-l-2 border-white/20 pl-6 py-2">
                  <h4 className="font-bold mb-3">{title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 복지 */}
          <div>
            <p className="text-xs tracking-widest text-white/40 uppercase mb-8">Benefits</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "자율복장", desc: "복장 제한 없음", icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C9.5 2 8 3.5 8 5c0 1 .5 2 1.5 2.5L4 10v4l3-1v9h10v-9l3 1v-4l-5.5-2.5C15.5 7 16 6 16 5c0-1.5-1.5-3-4-3z"/></svg>
                )},
                { label: "장비 지원", desc: "고사양 개발 장비 제공", icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                )},
                { label: "경조사비 지원", desc: "각종 경조사 지원", icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12v10H4V12"/><path d="M2 7h20v5H2z"/><path d="M12 22V7"/><path d="M12 7c-1.5-2-3-3-5-3 1 0 3.5.5 5 3"/><path d="M12 7c1.5-2 3-3 5-3-1 0-3.5.5-5 3"/></svg>
                )},
                { label: "게임 지원", desc: "스팀·콘솔 게임 구매 지원", icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="3"/><circle cx="17" cy="10" r="1" fill="currentColor"/><circle cx="15" cy="14" r="1" fill="currentColor"/><line x1="6" y1="10" x2="10" y2="10"/><line x1="8" y1="8" x2="8" y2="12"/></svg>
                )},
                { label: "저녁식사 지원", desc: "야근 시 저녁 식대 제공", icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3"/><path d="M16 15v7"/></svg>
                )},
                { label: "안마의자 제공", desc: "사무실 내 안마의자 비치", icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 4c0-1.1.9-2 2-2h4a2 2 0 012 2v2a4 4 0 01-4 4 4 4 0 01-4-4V4z"/><path d="M6 10c-2 0-3 1.5-3 3v3a2 2 0 002 2h1"/><path d="M18 10c2 0 3 1.5 3 3v3a2 2 0 01-2 2h-1"/><path d="M6 18v3"/><path d="M18 18v3"/><path d="M6 14h12v4H6z"/></svg>
                )},
                { label: "다양한 간식 제공", desc: "음료 및 스낵바 상시 운영", icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a4 4 0 00-8 0v2"/><path d="M8 12h2"/><path d="M14 12h2"/><path d="M10 16h4"/></svg>
                )},
                { label: "상담 프로그램", desc: "전문 심리 상담 지원", icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"/></svg>
                )},
              ].map(({ icon, label, desc }) => (
                <div key={label} className="group bg-zinc-900 border border-white/10 rounded-2xl px-6 py-6 text-center hover:bg-white hover:border-white transition-all duration-300 hover:scale-105 cursor-default">
                  <div className="flex justify-center text-white/60 group-hover:text-black transition-colors duration-300 mb-3">{icon}</div>
                  <p className="font-semibold text-sm mb-1 group-hover:text-black transition-colors duration-300">{label}</p>
                  <p className="text-white/40 text-xs group-hover:text-black/50 transition-colors duration-300">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 지원하기 버튼 */}
          <div className="text-center mt-20">
            <p className="text-white/30 text-sm mb-4">
              지원 문의: <a href="mailto:arotech2024@arotech.info" className="text-white/50 hover:text-white transition">arotech2024@arotech.info</a>
            </p>
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
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 items-stretch">
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <iframe
              title="AROTECH 오피스 위치"
              src="https://maps.google.com/maps?q=%EC%84%9C%EC%9A%B8%EC%8B%9C+%EA%B5%AC%EB%A1%9C%EA%B5%AC+%EB%94%94%EC%A7%80%ED%84%B8%EB%A1%9C+34%EA%B8%B8+55&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 280 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-10 py-10 flex items-center justify-center">
            <div className="flex flex-col items-center gap-5 text-center">
              <p className="text-white/80">
                서울시 구로구 디지털로 34길 55
              </p>
              <p className="text-white/80">
                arotech2024@arotech.info
              </p>
              <a
                href="/support"
                className="inline-block bg-white text-black font-bold px-10 py-3 rounded-full hover:bg-white/90 transition duration-200 mt-2"
              >
                문의하기
              </a>
            </div>
          </div>
        </div>
      </motion.section>


      <SiteFooter />

    </motion.main>
  );
}