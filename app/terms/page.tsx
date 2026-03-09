import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "이용약관 | AROTECH",
};

export default function TermsPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      <SiteHeader />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 border-b border-white/10">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest text-white/40 uppercase mb-4">Legal</p>
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">이용약관</h1>
          <p className="text-white/40 text-sm">최종 업데이트: 2025년 1월</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-14">

          <article>
            <h2 className="text-xs tracking-widest text-white/40 uppercase mb-2">제1조</h2>
            <h3 className="text-xl font-bold mb-4 text-white">목적</h3>
            <p className="text-white/60 leading-relaxed">
              본 약관은 주식회사 에이로테크(이하 "회사")가 제공하는 웹사이트 및 관련 서비스의 이용 조건 및 절차,
              회사와 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
            </p>
          </article>

          <div className="border-t border-white/10" />

          <article>
            <h2 className="text-xs tracking-widest text-white/40 uppercase mb-2">제2조</h2>
            <h3 className="text-xl font-bold mb-4 text-white">서비스의 제공</h3>
            <ul className="text-white/60 leading-relaxed space-y-2 list-none">
              <li className="flex gap-3">
                <span className="text-white/20 select-none">—</span>
                회사는 회사 소개, 프로젝트 안내, 채용 정보 및 기타 관련 정보를 제공합니다.
              </li>
              <li className="flex gap-3">
                <span className="text-white/20 select-none">—</span>
                회사는 필요에 따라 서비스의 내용을 변경할 수 있습니다.
              </li>
            </ul>
          </article>

          <div className="border-t border-white/10" />

          <article>
            <h2 className="text-xs tracking-widest text-white/40 uppercase mb-2">제3조</h2>
            <h3 className="text-xl font-bold mb-4 text-white">저작권</h3>
            <ul className="text-white/60 leading-relaxed space-y-2 list-none">
              <li className="flex gap-3">
                <span className="text-white/20 select-none">—</span>
                본 웹사이트에 게시된 모든 콘텐츠의 저작권은 회사 또는 정당한 권리를 가진 제3자에게 있습니다.
              </li>
              <li className="flex gap-3">
                <span className="text-white/20 select-none">—</span>
                이용자는 사전 동의 없이 이를 복제, 배포, 수정할 수 없습니다.
              </li>
            </ul>
          </article>

          <div className="border-t border-white/10" />

          <article>
            <h2 className="text-xs tracking-widest text-white/40 uppercase mb-2">제4조</h2>
            <h3 className="text-xl font-bold mb-4 text-white">면책조항</h3>
            <p className="text-white/60 leading-relaxed">
              회사는 천재지변, 시스템 오류 등 불가항력으로 인한 서비스 중단에 대해 책임을 지지 않습니다.
            </p>
          </article>

          <div className="border-t border-white/10" />

          <article>
            <h2 className="text-xs tracking-widest text-white/40 uppercase mb-2">제5조</h2>
            <h3 className="text-xl font-bold mb-4 text-white">준거법</h3>
            <p className="text-white/60 leading-relaxed">
              본 약관은 대한민국 법률에 따르며, 관련 분쟁은 대한민국 법원을 관할 법원으로 합니다.
            </p>
          </article>

        </div>
      </section>

      <SiteFooter />

    </main>
  );
}
