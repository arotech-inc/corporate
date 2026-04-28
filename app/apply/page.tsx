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

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ApplyErrors = {
  name?: string;
  email?: string;
  phone?: string;
  position?: string;
  message?: string;
};

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [errors, setErrors] = useState<ApplyErrors>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    portfolio: "",
    message: "",
  });

  function clearError(field: keyof ApplyErrors) {
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    clearError(name as keyof ApplyErrors);
  }

  function selectPosition(role: string) {
    setForm({ ...form, position: role });
    clearError("position");
  }

  function validate(): ApplyErrors {
    const errs: ApplyErrors = {};
    if (!form.position) errs.position = "지원 포지션을 선택해주세요.";
    if (!form.name.trim()) errs.name = "이름을 입력해주세요.";
    if (!form.phone.trim()) errs.phone = "연락처를 입력해주세요.";
    if (!form.email.trim()) {
      errs.email = "이메일을 입력해주세요.";
    } else if (!EMAIL_REGEX.test(form.email.trim())) {
      errs.email = "올바른 이메일 형식이 아닙니다. (예: example@domain.com)";
    }
    if (!form.message.trim()) errs.message = "자기소개를 입력해주세요.";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "전송에 실패했습니다.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "전송에 실패했습니다.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass = (hasError: boolean) =>
    `w-full bg-zinc-900 border rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none transition ${
      hasError
        ? "border-red-500/60 focus:border-red-500"
        : "border-white/10 focus:border-white/30"
    }`;

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
            <form onSubmit={handleSubmit} noValidate className="space-y-8">

              {/* 포지션 선택 */}
              <div>
                <label className="block text-xs tracking-widest text-white/40 uppercase mb-3">
                  지원 포지션 *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {positions.map(({ role, type }) => {
                    const selected = form.position === role;
                    const showError = !!errors.position && !selected;
                    return (
                      <button
                        type="button"
                        key={role}
                        onClick={() => selectPosition(role)}
                        className={`text-left px-5 py-4 rounded-xl border transition duration-200 ${
                          selected
                            ? "bg-white text-black border-white"
                            : showError
                            ? "bg-zinc-900 border-red-500/60 text-white/70 hover:border-red-500"
                            : "bg-zinc-900 border-white/10 text-white/70 hover:border-white/30"
                        }`}
                      >
                        <p className="font-semibold text-sm">{role}</p>
                        <p className={`text-xs mt-1 ${selected ? "text-black/50" : "text-white/30"}`}>
                          {type}
                        </p>
                      </button>
                    );
                  })}
                </div>
                {errors.position && (
                  <p className="mt-2 text-red-400 text-xs">{errors.position}</p>
                )}
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
                    value={form.name}
                    onChange={handleChange}
                    placeholder="홍길동"
                    className={inputClass(!!errors.name)}
                  />
                  {errors.name && (
                    <p className="mt-2 text-red-400 text-xs">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs tracking-widest text-white/40 uppercase mb-2">
                    연락처 *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="010-0000-0000"
                    className={inputClass(!!errors.phone)}
                  />
                  {errors.phone && (
                    <p className="mt-2 text-red-400 text-xs">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-widest text-white/40 uppercase mb-2">
                  이메일 *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className={inputClass(!!errors.email)}
                />
                {errors.email && (
                  <p className="mt-2 text-red-400 text-xs">{errors.email}</p>
                )}
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
                  className={inputClass(false)}
                />
              </div>

              <div>
                <label className="block text-xs tracking-widest text-white/40 uppercase mb-2">
                  자기소개 *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="경력, 관심 분야, 지원 동기 등을 자유롭게 작성해주세요."
                  rows={6}
                  className={`${inputClass(!!errors.message)} resize-none`}
                />
                {errors.message && (
                  <p className="mt-2 text-red-400 text-xs">{errors.message}</p>
                )}
              </div>

              {error && (
                <p className="text-center text-red-400 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-white/90 transition disabled:opacity-30 disabled:cursor-not-allowed"
              >
                {submitting ? "전송 중..." : "지원서 제출하기"}
              </button>

              <p className="text-center text-white/30 text-xs">
                포트폴리오 파일은 제출 후 별도 이메일로 보내주세요
              </p>
            </form>
          )}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
