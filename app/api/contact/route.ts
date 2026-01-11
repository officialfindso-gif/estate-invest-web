import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, status } = body;

    // Валидация
    if (!name || (!email && !phone)) {
      return NextResponse.json(
        { error: "Имя и контакт (email или телефон) обязательны" },
        { status: 400 }
      );
    }

    // Формируем HTML письма
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
        <div style="background-color: #1a1a1a; padding: 20px; border-radius: 8px 8px 0 0; border-left: 4px solid #d4af37;">
          <h2 style="color: #d4af37; margin: 0; font-size: 24px;">Новая заявка с сайта</h2>
          <p style="color: #9ca3af; margin: 5px 0 0 0; font-size: 14px;">Estate Invest</p>
        </div>
        
        <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px;">
          <div style="margin-bottom: 20px;">
            <p style="color: #6b7280; margin: 0 0 5px 0; font-size: 12px; text-transform: uppercase;">Имя</p>
            <p style="color: #111827; margin: 0; font-size: 16px; font-weight: bold;">${name}</p>
          </div>
          
          ${email ? `
          <div style="margin-bottom: 20px;">
            <p style="color: #6b7280; margin: 0 0 5px 0; font-size: 12px; text-transform: uppercase;">Email</p>
            <p style="color: #111827; margin: 0; font-size: 16px;"><a href="mailto:${email}" style="color: #d4af37; text-decoration: none;">${email}</a></p>
          </div>
          ` : ""}
          
          ${phone ? `
          <div style="margin-bottom: 20px;">
            <p style="color: #6b7280; margin: 0 0 5px 0; font-size: 12px; text-transform: uppercase;">Телефон</p>
            <p style="color: #111827; margin: 0; font-size: 16px;"><a href="tel:${phone}" style="color: #d4af37; text-decoration: none;">${phone}</a></p>
          </div>
          ` : ""}
          
          ${status ? `
          <div style="margin-bottom: 20px;">
            <p style="color: #6b7280; margin: 0 0 5px 0; font-size: 12px; text-transform: uppercase;">Статус</p>
            <p style="color: #111827; margin: 0; font-size: 16px;">${status}</p>
          </div>
          ` : ""}
          
          ${message ? `
          <div style="margin-bottom: 20px;">
            <p style="color: #6b7280; margin: 0 0 5px 0; font-size: 12px; text-transform: uppercase;">Сообщение</p>
            <p style="color: #111827; margin: 0; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          ` : ""}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #9ca3af; margin: 0; font-size: 12px;">
              Отправлено: ${new Date().toLocaleString("ru-RU", { dateStyle: "long", timeStyle: "short" })}
            </p>
          </div>
        </div>
      </div>
    `;

    // Отправка через Resend
    const { data, error } = await resend.emails.send({
      from: "Estate Invest <onboarding@resend.dev>",
      to: ["official.findso@gmail.com"],
      subject: `Новая заявка от ${name}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Ошибка Resend:", error);
      return NextResponse.json(
        { error: "Не удалось отправить заявку. Попробуйте позже." },
        { status: 500 }
      );
    }

    console.log("✅ Заявка успешно отправлена:", data);

    return NextResponse.json(
      { 
        success: true, 
        message: "Заявка успешно отправлена. Мы свяжемся с вами в ближайшее время." 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Ошибка при обработке заявки:", error);
    return NextResponse.json(
      { error: "Произошла ошибка при отправке заявки. Попробуйте позже." },
      { status: 500 }
    );
  }
}
