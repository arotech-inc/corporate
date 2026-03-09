import Link from "next/link";

export const metadata = {
  title: "개인정보처리방침 | AROTECH",
};

export default function PrivacyPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* Header */}
      <header className="fixed top-0 w-full bg-black/70 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-bold tracking-wide hover:opacity-70 transition">
            AROTECH
          </Link>
          <Link href="/" className="text-sm text-white/50 hover:text-white transition">
            ← 홈으로
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 border-b border-white/10">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest text-white/40 uppercase mb-4">Legal</p>
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">개인정보처리방침</h1>
          <p className="text-white/40 text-sm">최종 업데이트: 2025년 1월</p>
        </div>
      </section>

      {/* Intro */}
      <section className="pt-16 pb-4 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-white/60 leading-relaxed">
            주식회사 에이로테크(이하 "회사")는 이용자의 개인정보를 중요하게 생각하며 다음과 같이 처리합니다.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto space-y-14">

          <article>
            <h2 className="text-xs tracking-widest text-white/40 uppercase mb-2">01</h2>
            <h3 className="text-xl font-bold mb-4 text-white">수집하는 개인정보 항목</h3>
            <ul className="text-white/60 leading-relaxed space-y-2">
              <li className="flex gap-3">
                <span className="text-white/20 select-none">—</span>
                이메일 (문의 시)
              </li>
              <li className="flex gap-3">
                <span className="text-white/20 select-none">—</span>
                이름 (문의 시)
              </li>
            </ul>
          </article>

          <div className="border-t border-white/10" />

          <article>
            <h2 className="text-xs tracking-widest text-white/40 uppercase mb-2">02</h2>
            <h3 className="text-xl font-bold mb-4 text-white">수집 목적</h3>
            <ul className="text-white/60 leading-relaxed space-y-2">
              <li className="flex gap-3">
                <span className="text-white/20 select-none">—</span>
                문의 대응
              </li>
              <li className="flex gap-3">
                <span className="text-white/20 select-none">—</span>
                채용 관련 연락
              </li>
            </ul>
          </article>

          <div className="border-t border-white/10" />

          <article>
            <h2 className="text-xs tracking-widest text-white/40 uppercase mb-2">03</h2>
            <h3 className="text-xl font-bold mb-4 text-white">보관 기간</h3>
            <p className="text-white/60 leading-relaxed">
              문의 처리 완료 후 1년 이내 파기
            </p>
          </article>

          <div className="border-t border-white/10" />

          <article>
            <h2 className="text-xs tracking-widest text-white/40 uppercase mb-2">04</h2>
            <h3 className="text-xl font-bold mb-4 text-white">제3자 제공</h3>
            <p className="text-white/60 leading-relaxed">
              회사는 이용자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다.
            </p>
          </article>

          <div className="border-t border-white/10" />

          <article>
            <h2 className="text-xs tracking-widest text-white/40 uppercase mb-2">05</h2>
            <h3 className="text-xl font-bold mb-4 text-white">개인정보 보호 책임자</h3>
            <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 inline-block">
              <p className="text-white/40 text-xs mb-1">이메일</p>
              <p className="text-white font-medium">contact@arotech.co.kr</p>
            </div>
          </article>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 text-center text-xs text-white/30 mt-16">
        © 2022 AROTECH. All rights reserved.
      </footer>

    </main>
  );
}
