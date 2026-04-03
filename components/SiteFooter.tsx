import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="py-20 border-t border-white/10 bg-black">
      <div className="max-w-6xl mx-auto px-6">

        {/* 로고 자리 */}
        <div className="mb-12">
          {/* TODO: 로고 이미지 추가 시 아래 텍스트를 <Image /> 로 교체 */}
          <div className="w-40 h-10 border border-dashed border-white/20 rounded-lg flex items-center justify-center text-white/20 text-xs">
            LOGO
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 text-sm opacity-70">

          <div className="space-y-1.5">
            <h4 className="font-bold text-base mb-4 text-white opacity-100">Company</h4>
            <p>주식회사 에이로테크</p>
            <p>대표자: 김기영</p>
            <p>사업자등록번호: 787-86-02754</p>
            <p>통신판매업 신고번호: 제2025-서울구로-0000호</p>
            <p>서울시 구로구 디지털로 34길 55</p>
          </div>

          <div className="space-y-1.5">
            <h4 className="font-bold text-base mb-4 text-white opacity-100">Legal</h4>
            <p><Link href="/terms" className="hover:text-white transition">이용약관</Link></p>
            <p><Link href="/privacy" className="hover:text-white transition">개인정보처리방침</Link></p>
          </div>

          <div className="space-y-1.5">
            <h4 className="font-bold text-base mb-4 text-white opacity-100">Support</h4>
            <p><Link href="/support" className="hover:text-white transition">고객지원</Link></p>
            <p>arotech2024@arotech.info</p>
          </div>

        </div>

        <p className="mt-16 text-center text-xs opacity-50">
          © 2022 AROTECH. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
