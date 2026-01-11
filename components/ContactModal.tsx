"use client";

import React, { useState } from "react";
import Icon from "@/components/ui/Icon";
import { useContactModal } from "@/contexts/ContactModalContext";

export default function ContactModal() {
  const { isOpen, closeModal } = useContactModal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          closeModal();
          setIsSuccess(false);
          setFormData({ name: "", email: "", phone: "", message: "" });
        }, 2000);
      } else {
        alert(data.error || "Произошла ошибка при отправке. Попробуйте позже.");
      }
    } catch (error) {
      console.error("Ошибка отправки:", error);
      alert("Произошла ошибка при отправке. Проверьте соединение и попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={closeModal}
    >
      <div
        className="relative w-full max-w-lg bg-[#1a1a1a] border border-white/20 rounded-2xl shadow-2xl shadow-black/50 animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative flex items-center justify-between p-6 border-b border-white/10">
          <div>
            <h2 className="text-2xl font-black text-white uppercase tracking-tight">
              Получить <span style={{ color: "var(--accent-color)" }}>консультацию</span>
            </h2>
            <p className="text-sm text-gray-400 mt-1">Заполните форму и мы свяжемся с вами</p>
          </div>
          <button
            onClick={closeModal}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Закрыть модальное окно"
          >
            <Icon name="close" size={24} color="#fff" ariaHidden={true} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {isSuccess ? (
            <div className="py-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--accent-color)]/20 mb-4">
                <Icon name="check_circle" size={40} color="var(--accent-color)" ariaHidden={true} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Заявка отправлена!</h3>
              <p className="text-gray-400">Мы свяжемся с вами в ближайшее время</p>
            </div>
          ) : (
            <>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent-color)] transition-colors"
                  placeholder="Иван Иванов"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent-color)] transition-colors"
                  placeholder="ivan@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent-color)] transition-colors"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
                  Комментарий
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent-color)] transition-colors resize-none"
                  placeholder="Расскажите о вашем запросе..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[var(--accent-color)] hover:bg-[var(--accent-color)]/90 text-black font-bold text-base uppercase tracking-wide transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Icon name="hourglass_empty" size={20} className="animate-spin" ariaHidden={true} />
                    Отправка...
                  </>
                ) : (
                  <>
                    <Icon name="send" size={20} ariaHidden={true} />
                    Отправить заявку
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                Нажимая кнопку, вы соглашаетесь с{" "}
                <a href="/privacy" className="text-[var(--accent-color)] hover:underline">
                  политикой конфиденциальности
                </a>
              </p>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
