"use client";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useState } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SupportErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function SupportPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [errors, setErrors] = useState<SupportErrors>({});
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name as keyof SupportErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  }

  function validate(): SupportErrors {
    const errs: SupportErrors = {};
    if (!form.name.trim()) errs.name = "이름을 입력해주세요.";
    if (!form.email.trim()) {
      errs.email = "이메일을 입력해주세요.";
    } else if (!EMAIL_REGEX.test(form.email.trim())) {
      errs.email = "올바른 이메일 형식이 아닙니다. (예: example@domain.com)";
    }
    if (!form.message.trim()) errs.message = "문의 내용을 입력해주세요.";
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
      const res = await fetch("/api/support", {
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
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
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
                  문의 내용 *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="문의 내용을 입력해주세요."
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
                {submitting ? "전송 중..." : "문의 보내기"}
              </button>
              <p className="text-center text-white/30 text-xs">
                또는 직접 이메일로 문의: arotech2024@arotech.info
              </p>
            </form>
          )}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
