"use client";

import { useState } from "react";
import Icon from "./ui/Icon";

export default function RegistrationSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    status: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          message: `Статус: ${formData.status}`,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", phone: "", status: "" });
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Ошибка отправки формы:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.phone && formData.status;

  return (
    <section className="py-20 px-4 bg-[#0a0a0a]" id="register">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Оставьте заявку
          </h2>
          <p className="text-lg text-gray-300">
            Заполните форму, и наш эксперт свяжется с вами в ближайшее время
          </p>
        </div>

        {isSuccess ? (
          <div className="max-w-[1000px] mx-auto text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--accent-color)] rounded-full mb-4">
              <Icon name="check_circle" size={32} color="#0a0a0a" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">
              Заявка отправлена!
            </h3>
            <p className="text-gray-300">
              Мы свяжемся с вами в ближайшее время
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-[1000px] mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Имя */}
              <div className="flex-1">
                <label htmlFor="name" className="sr-only">
                  Ваше имя
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Icon name="person" size={20} color="#6b7280" ariaHidden={true} />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-[#1a1a1a] border border-white/10 rounded-lg focus:outline-none focus:border-[var(--accent-color)] transition-colors text-white placeholder:text-gray-500"
                    placeholder="Иван Иванов"
                  />
                </div>
              </div>

              {/* Телефон */}
              <div className="flex-1">
                <label htmlFor="phone" className="sr-only">
                  Телефон
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Icon name="call" size={20} color="#6b7280" ariaHidden={true} />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-4 bg-[#1a1a1a] border border-white/10 rounded-lg focus:outline-none focus:border-[var(--accent-color)] transition-colors text-white placeholder:text-gray-500"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
              </div>

              {/* Статус */}
              <div className="flex-1">
                <label htmlFor="status" className="sr-only">
                  Ваш статус
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Icon name="work" size={20} color="#6b7280" ariaHidden={true} />
                  </div>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-10 py-4 bg-[#1a1a1a] border border-white/10 rounded-lg focus:outline-none focus:border-[var(--accent-color)] transition-colors text-white appearance-none cursor-pointer"
                  >
                    <option value="">Выберите статус</option>
                    <option value="investor">Инвестор</option>
                    <option value="realtor">Риелтор</option>
                    <option value="developer">Застройщик</option>
                    <option value="other">Другое</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <Icon name="expand_more" size={20} color="#6b7280" ariaHidden={true} />
                  </div>
                </div>
              </div>

              {/* Кнопка отправки */}
              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="md:w-auto px-8 py-4 bg-[var(--accent-color)] text-black font-semibold rounded-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubmitting ? "Отправка..." : "Отправить заявку"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
