import React from "react";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import CTAButton from "@/components/ui/CTAButton";

export default function Header() {
  return (
    <header className="w-full border-b border-white/10 bg-[#050505]/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2 text-white shrink-0">
            <div className="size-8 flex items-center justify-center">
              <Icon name="account_balance" size="lg" color="var(--accent-color)" />
            </div>
            <h2 className="text-white text-xl font-extrabold tracking-tight uppercase">INVESTPRO</h2>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <Link className="text-xs font-bold text-gray-300 hover:text-white uppercase tracking-wider transition-colors duration-200" href="#">ГЛАВНАЯ</Link>
            <Link className="text-xs font-bold text-gray-300 hover:text-white uppercase tracking-wider transition-colors duration-200" href="#">ТЕХНОЛОГИЯ</Link>
            <Link className="text-xs font-bold text-gray-300 hover:text-white uppercase tracking-wider transition-colors duration-200" href="#">ДЛЯ КОГО</Link>
            <Link className="text-xs font-bold text-gray-300 hover:text-white uppercase tracking-wider transition-colors duration-200" href="#">ОБУЧЕНИЕ</Link>
            <Link className="group flex items-center gap-2 text-xs font-bold text-white bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300" href="/blog">
              <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-color)' }} />
              <span className="uppercase tracking-wider">БЛОГ</span>
              <Icon name="auto_stories" size={16} color="var(--accent-color)" className="group-hover:text-white transition-colors" />
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-6 shrink-0">
            <Link className="text-gray-300 hover:text-white font-bold text-sm transition-colors duration-200 flex items-center gap-2" href="tel:+79990000000">
              <Icon name="call" size={20} color="var(--accent-color)" ariaHidden={true} />
              <span>+7 (999) 000-00-00</span>
            </Link>
            <div>
              <CTAButton 
                ariaLabel="Получить стратегию"
                className="inline-flex items-center justify-center gap-2 h-10 px-6 text-sm font-bold rounded-md bg-[var(--accent-color)] text-black hover:bg-[var(--accent-color)]/90 transition-all cursor-pointer"
              >
                СТРАТЕГИЯ
              </CTAButton>
            </div>
          </div>

          <div className="lg:hidden text-white cursor-pointer">
            <span className="material-symbols-outlined">menu</span>
          </div>
        </div>
      </div>
    </header>
  );
}
