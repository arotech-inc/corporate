"use client";

import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const categories = [
  {
    name: "개발",
    positions: [
      { role: "Unity Developer", type: "정규직", desc: "게임 클라이언트 개발 및 최적화를 담당합니다.", details: ["Unity 기반 모바일/PC 게임 개발", "성능 최적화 및 메모리 관리", "3년 이상 Unity 개발 경력"] },
      { role: "Backend Engineer", type: "정규직", desc: "서버 아키텍처 설계 및 API 개발을 담당합니다.", details: ["게임 서버 설계 및 구현", "실시간 데이터 처리 및 DB 설계", "Node.js 또는 Go 경험 우대"] },
    ],
  },
  {
    name: "기획",
    positions: [
      { role: "Game Designer", type: "정규직", desc: "시스템 설계, 밸런싱, 콘텐츠 기획 전반을 담당합니다.", details: ["게임 시스템 및 경제 설계", "레벨 디자인 및 밸런싱", "게임 기획 경력 2년 이상"] },
    ],
  },
  {
    name: "아트",
    positions: [
      { role: "2D Artist", type: "계약직 · 프리랜서", desc: "캐릭터, UI, 배경 아트워크 제작을 담당합니다.", details: ["캐릭터 일러스트 및 UI 디자인", "게임 내 배경 및 아이콘 제작", "Photoshop, Illustrator 능숙자"] },
    ],
  },
];

const process = [
  { step: "01", title: "서류 전형", desc: "이력서와 포트폴리오를 검토합니다." },
  { step: "02", title: "과제 전형", desc: "직무별 실무 과제를 진행합니다." },
  { step: "03", title: "인터뷰", desc: "실무진 및 경영진 면접을 진행합니다." },
  { step: "04", title: "최종 합류", desc: "처우 협의 후 팀에 합류합니다." },
];

const benefits = [
  { icon: "🕐", title: "유연근무제", desc: "자율 출퇴근으로 최적의 업무 환경을 만듭니다." },
  { icon: "📚", title: "성장 지원", desc: "컨퍼런스, 도서, 교육비를 지원합니다." },
  { icon: "🖥️", title: "장비 지원", desc: "원하는 개발 장비를 선택할 수 있습니다." },
  { icon: "🎮", title: "게임 플레이", desc: "업무 시간 내 게임 플레이를 권장합니다." },
  { icon: "🏖️", title: "리프레시 휴가", desc: "장기 근속 시 추가 유급 휴가를 제공합니다." },
  { icon: "🍽️", title: "식대 지원", desc: "점심 식대를 지원합니다." },
];

export default function CareersPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <SiteHeader showBack />

      {/* Hero */}
      <section className="relative w-full h-[60vh] min-h-[400px]">
        <Image
          src="/office.jpg"
          alt="AROTECH Office"
          fill
          sizes="100vw"
          quality={85}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
          <p className="text-xs tracking-widest text-white/50 uppercase mb-4">Careers at AROTECH</p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-center">
            MAKE IT WITH US
          </h1>
          <p className="text-white/60 text-lg md:text-xl text-center max-w-2xl">
            AROTECH와 함께 새로운 경험을 설계할 동료를 찾습니다.
          </p>
        </div>
      </section>

      {/* 채용 프로세스 */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">채용 프로세스</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {process.map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="text-4xl font-extrabold text-white/10 mb-4">{step}</div>
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-white/50 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 채용 포지션 */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">채용 중인 포지션</h2>
          <div className="space-y-16">
            {categories.map(({ name, positions }) => (
              <div key={name}>
                <h3 className="text-xs tracking-widest text-white/40 uppercase mb-6 border-b border-white/10 pb-3">
                  {name}
                </h3>
                <div className="space-y-4">
                  {positions.map(({ role, type, desc, details }) => (
                    <div
                      key={role}
                      className="bg-zinc-900 border border-white/10 rounded-2xl px-8 py-6 hover:border-white/30 transition duration-300"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-lg font-semibold">{role}</span>
                        <span className="text-xs text-white/40 border border-white/10 rounded-full px-3 py-1">
                          {type}
                        </span>
                      </div>
                      <p className="text-white/50 text-sm mb-4">{desc}</p>
                      <ul className="space-y-1">
                        {details.map((d) => (
                          <li key={d} className="text-white/30 text-sm flex items-start gap-2">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-white/30 shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 채용 사이트 안내 */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-white/50 text-lg mb-12">
            채용 진행중인 포지션은 아래 채용 사이트에서 확인 가능합니다.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "GAMEJOB", href: "https://www.gamejob.co.kr", logo: (
                <div className="flex items-center justify-center gap-2">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#00B4D8"/><path d="M10 11l6 5-6 5V11z" fill="#fff"/><path d="M16 11l6 5-6 5V11z" fill="#fff" opacity=".6"/></svg>
                  <span className="text-xl font-extrabold tracking-tight">GAMEJOB</span>
                </div>
              )},
              { name: "JOBKOREA", href: "https://www.jobkorea.co.kr", logo: (
                <div className="flex items-center justify-center">
                  <span className="text-xl font-extrabold tracking-tight">JOBKOREA</span>
                </div>
              )},
              { name: "saramin", href: "https://www.saramin.co.kr", logo: (
                <div className="flex items-center justify-center gap-2">
                  <div className="flex flex-col gap-0.5">
                    <div className="flex gap-0.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#7B68EE]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#7B68EE] opacity-50" />
                    </div>
                    <div className="flex gap-0.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#00D4AA] opacity-50" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#00D4AA]" />
                    </div>
                  </div>
                  <span className="text-xl font-bold">saramin</span>
                </div>
              )},
              { name: "LinkedIn", href: "https://www.linkedin.com", logo: (
                <div className="flex items-center justify-center gap-1">
                  <span className="text-xl font-bold">Linked</span>
                  <span className="text-xl font-bold bg-[#0A66C2] text-white px-1.5 rounded">in</span>
                </div>
              )},
            ].map(({ name, href, logo }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl px-6 py-8 flex items-center justify-center text-black hover:scale-105 transition duration-300"
              >
                {logo}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 복지 및 혜택 */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">복지 및 혜택</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-zinc-900 border border-white/10 rounded-2xl px-8 py-8 text-center hover:border-white/20 transition"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-white/50 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 지원하기 CTA */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">함께할 준비가 되셨나요?</h2>
          <p className="text-white/50 mb-10">
            지원서를 제출하고 AROTECH의 여정에 합류하세요.
          </p>
          <a
            href="/apply"
            className="inline-block bg-white text-black font-bold text-lg px-12 py-4 rounded-full hover:bg-white/90 transition duration-200"
          >
            지원하기
          </a>
          <p className="mt-6 text-white/30 text-sm">
            문의: <a href="mailto:arotech2024@arotech.info" className="text-white/50 hover:text-white transition">arotech2024@arotech.info</a>
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
