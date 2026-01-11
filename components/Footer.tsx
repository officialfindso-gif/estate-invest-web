"use client";

import React from "react";
import Icon from "@/components/ui/Icon";

export default function Footer() {
  return (
    <footer className="bg-[#12110f] border-t border-[#333] text-white pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="size-8 text-[var(--accent-color)]">
                <Icon name="apartment" size={32} ariaHidden={true} />
              </div>
              <h2 className="text-white text-lg font-bold">INVEST PLATFORM</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Ведущая платформа для инвестиций в коммерческую и жилую недвижимость премиум-класса. Ваш надежный партнер в мире высоких доходов.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="size-10 flex items-center justify-center rounded-full bg-[#1a1a1a] border border-[#333] text-gray-400 hover:text-white hover:border-[var(--accent-color)] transition-all"
                aria-label="Facebook"
              >
                <span className="font-bold text-xs">FB</span>
              </a>
              <a
                href="#"
                className="size-10 flex items-center justify-center rounded-full bg-[#1a1a1a] border border-[#333] text-gray-400 hover:text-white hover:border-[var(--accent-color)] transition-all"
                aria-label="Telegram"
              >
                <span className="font-bold text-xs">TG</span>
              </a>
              <a
                href="#"
                className="size-10 flex items-center justify-center rounded-full bg-[#1a1a1a] border border-[#333] text-gray-400 hover:text-white hover:border-[var(--accent-color)] transition-all"
                aria-label="VK"
              >
                <span className="font-bold text-xs">VK</span>
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-base mb-2">Платформа</h4>
            <a href="#" className="text-gray-400 hover:text-[var(--accent-color)] text-sm transition-colors">
              О нас
            </a>
            <a href="#" className="text-gray-400 hover:text-[var(--accent-color)] text-sm transition-colors">
              Технология
            </a>
            <a href="#" className="text-gray-400 hover:text-[var(--accent-color)] text-sm transition-colors">
              Команда
            </a>
            <a href="#" className="text-gray-400 hover:text-[var(--accent-color)] text-sm transition-colors">
              Карьера
            </a>
          </div>

          {/* Links 2 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-base mb-2">Ресурсы</h4>
            <a href="#" className="text-gray-400 hover:text-[var(--accent-color)] text-sm transition-colors">
              База знаний
            </a>
            <a href="#" className="text-gray-400 hover:text-[var(--accent-color)] text-sm transition-colors">
              Аналитика
            </a>
            <a href="#" className="text-gray-400 hover:text-[var(--accent-color)] text-sm transition-colors">
              Обучение
            </a>
            <a href="#" className="text-gray-400 hover:text-[var(--accent-color)] text-sm transition-colors">
              FAQ
            </a>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-base mb-2">Подписка</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Получайте лучшие статьи и закрытые предложения раз в неделю.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                className="w-full bg-[#1a1a1a] border border-[#333] text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--accent-color)] transition-colors placeholder:text-gray-400/50"
                placeholder="Ваш Email"
                type="email"
              />
              <button
                className="w-full bg-[var(--accent-color)] hover:bg-[var(--accent-color)]/90 text-black font-bold text-sm py-3 rounded-lg transition-colors"
                type="submit"
              >
                Подписаться
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#333] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2026 Invest Platform. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
