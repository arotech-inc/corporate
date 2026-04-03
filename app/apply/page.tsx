"use client";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useState } from "react";

const positions = [
  { role: "Game Designer", type: "정규직" },
  { role: "Unity Developer", type: "정규직" },
  { role: "Backend Engineer", type: "정규직" },
  { role: "2D Artist", type: "계약직 · 프리랜서" },
];

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    portfolio: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { name, email, phone, position, portfolio, message } = form;
    const subject = encodeURIComponent(`[채용지원] ${position} - ${name}`);
    const body = encodeURIComponent(
      `이름: ${name}\n이메일: ${email}\n연락처: ${phone}\n지원 포지션: ${position}\n포트폴리오: ${portfolio}\n\n자기소개:\n${message}`
    );
    window.location.href = `mailto:arotech2024@arotech.info?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <main className="bg-black text-white min-h-screen">
      <SiteHeader showBack />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 border-b border-white/10">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest text-white/40 uppercase mb-4">Careers</p>
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">지원하기</h1>
          <p className="text-white/40 text-sm">
            AROTECH와 함께할 당신의 이야기를 들려주세요.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-center py-20">
              <div className="text-5xl mb-6">✓</div>
              <p className="text-2xl font-bold mb-4">지원이 접수되었습니다.</p>
              <p className="text-white/50 mb-8">
                검토 후 빠른 시일 내에 연락 드리겠습니다.
              </p>
              <a
                href="/"
                className="inline-block border border-white/20 rounded-full px-8 py-3 text-sm text-white/60 hover:text-white hover:border-white/40 transition"
              >
                홈으로 돌아가기
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* 포지션 선택 */}
              <div>
                <label className="block text-xs tracking-widest text-white/40 uppercase mb-3">
                  지원 포지션 *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {positions.map(({ role, type }) => (
                    <button
                      type="button"
                      key={role}
                      onClick={() => setForm({ ...form, position: role })}
                      className={`text-left px-5 py-4 rounded-xl border transition duration-200 ${
                        form.position === role
                          ? "bg-white text-black border-white"
                          : "bg-zinc-900 border-white/10 text-white/70 hover:border-white/30"
                      }`}
                    >
                      <p className="font-semibold text-sm">{role}</p>
                      <p className={`text-xs mt-1 ${form.position === role ? "text-black/50" : "text-white/30"}`}>
                        {type}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* 인적사항 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-widest text-white/40 uppercase mb-2">
                    이름 *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="홍길동"
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest text-white/40 uppercase mb-2">
                    연락처 *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="010-0000-0000"
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-widest text-white/40 uppercase mb-2">
                  이메일 *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition"
                />
              </div>

              <div>
                <label className="block text-xs tracking-widest text-white/40 uppercase mb-2">
                  포트폴리오 링크
                </label>
                <input
                  type="url"
                  name="portfolio"
                  value={form.portfolio}
                  onChange={handleChange}
                  placeholder="https://your-portfolio.com"
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition"
                />
              </div>

              <div>
                <label className="block text-xs tracking-widest text-white/40 uppercase mb-2">
                  자기소개 *
                </label>
                <textarea
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="경력, 관심 분야, 지원 동기 등을 자유롭게 작성해주세요."
                  rows={6}
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={!form.position}
                className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-white/90 transition disabled:opacity-30 disabled:cursor-not-allowed"
              >
                지원서 제출하기
              </button>

              <p className="text-center text-white/30 text-xs">
                제출 시 이메일 클라이언트가 열립니다 · 포트폴리오 파일은 메일에 첨부해주세요
              </p>
            </form>
          )}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
