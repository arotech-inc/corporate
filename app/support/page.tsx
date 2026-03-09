"use client";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useState } from "react";

export default function SupportPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { name, email, message } = form;
    const subject = encodeURIComponent(`[고객문의] ${name}`);
    const body = encodeURIComponent(`이름: ${name}\n이메일: ${email}\n\n${message}`);
    window.location.href = `mailto:contact@arotech.co.kr?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <main className="bg-black text-white min-h-screen">
      <SiteHeader showBack />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 border-b border-white/10">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest text-white/40 uppercase mb-4">Support</p>
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">고객지원</h1>
          <p className="text-white/40 text-sm">문의사항을 남겨주시면 빠르게 답변드리겠습니다.</p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-center py-20">
              <p className="text-2xl font-bold mb-4">문의가 접수되었습니다.</p>
              <p className="text-white/50">빠른 시일 내에 답변 드리겠습니다.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs tracking-widest text-white/40 uppercase mb-2">이름</label>
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
                <label className="block text-xs tracking-widest text-white/40 uppercase mb-2">이메일</label>
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
                <label className="block text-xs tracking-widest text-white/40 uppercase mb-2">문의 내용</label>
                <textarea
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="문의 내용을 입력해주세요."
                  rows={6}
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-white/90 transition"
              >
                문의 보내기
              </button>
              <p className="text-center text-white/30 text-xs">
                또는 직접 이메일로 문의: contact@arotech.co.kr
              </p>
            </form>
          )}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
