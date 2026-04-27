import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, position, portfolio, message } = await req.json();

    if (!name || !email || !phone || !position || !message) {
      return NextResponse.json({ error: "필수 항목이 누락되었습니다." }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.APPLY_TO_EMAIL || "arotech2024@arotech.info",
      replyTo: email,
      subject: `[채용지원] ${position} - ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>채용 지원서</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><b>이름</b></td><td style="padding: 8px; border: 1px solid #ddd;">${name}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><b>이메일</b></td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><b>연락처</b></td><td style="padding: 8px; border: 1px solid #ddd;">${phone}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><b>지원 포지션</b></td><td style="padding: 8px; border: 1px solid #ddd;">${position}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><b>포트폴리오</b></td><td style="padding: 8px; border: 1px solid #ddd;">${portfolio || "-"}</td></tr>
          </table>
          <h3 style="margin-top: 24px;">자기소개</h3>
          <p style="white-space: pre-wrap; padding: 16px; background: #f5f5f5; border-radius: 8px;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "이메일 전송 실패" }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "서버 오류" }, { status: 500 });
  }
}
