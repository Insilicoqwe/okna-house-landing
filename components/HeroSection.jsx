"use client";

import { useState } from "react";
import { RulerDimensionLine } from 'lucide-react';
import { Calculator } from 'lucide-react';

const features = [
  {
    icon: <img src="images/window.svg"/>,
    title: "Современные окна и балконные конструкции по доступным ценам",
  },
  {
    icon: <img src="images/hands.png"/>,
    title: "Квалифицированный подход к решению задач любой сложности",
  },
  {
    icon: <img src="images/respect.png"/>,
    title: "Гарантия высочайшего качества нашей продукции",
  },
];

const navLinks = [
  { label: "Услуги", href: "#" },
  { label: "Продукция", href: "#" },
  { label: "О компании", href: "#" },
  { label: "Портфолио", href: "#" },
  { label: "Вопрос-ответ", href: "#" },
  { label: "Контакты", href: "#" },
];

export default function OknaHausLanding() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", agree: true });
  const [activeNav, setActiveNav] = useState("Продукция");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Заявка отправлена!");
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top z-50">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-1 py-3">
            <img src="images/logo.svg" alt="" className="w-15 h-15"/>
          </div>

          {/* Nav */}
          <nav className="hidden lg:flex items-stretch gap-1 self-stretch">
            {navLinks.map((link) => {
              const isActive = activeNav === link.label;
              return (
                <button
                  key={link.label}
                  onClick={() => setActiveNav(link.label)}
                  className={`relative px-4 text-md font-medium transition-colors flex items-center cursor-pointer ${
                    isActive ? "text-orange-500" : "text-gray-700 hover:text-orange-500"
                  }`}
                >
                  {/* Top indicator */}
                  {isActive && (
                    <span className="absolute top-0 left-0 right-0 h-0.5 bg-orange-500 rounded-b" />
                  )}
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 border border-orange-500 text-white text-sm font-semibold px-4 py-2 rounded bg-orange-500 hover:bg-white hover:text-orange-500 transition-colors cursor-pointer">
              <RulerDimensionLine/>
              Заявка на замер
            </button>
            <button className="flex items-center gap-2 border border-gray-300 text-white bg-gray-700 text-sm font-semibold px-4 py-2 rounded hover:bg-white hover:text-gray-700 transition-colors cursor-pointer">
              <Calculator/>
              Заказать расчет
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden">
        {/* Background overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("images/back.png")`,
          }}
        />
        <div className="absolute inset-0" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-16">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
            {/* Left: Hero text + features */}
            <div className="flex-1 text-white">
              <p className="text-orange-400 font-bold text-2xl mb-1">Окна Хаус -</p>
              <h1 className="text-4xl lg:text-5xl font-extralight leading-tight mb-12">
                Профессиональный подход<br />к остеклению
              </h1>

              {/* Features */}
              <div className="flex flex-col sm:flex-row gap-8">
                {features.map((f, i) => (
                  <div key={i} className="flex flex-col items-start gap-3 max-w-[160px]">
                    {f.icon}
                    <p className="text-sm text-gray-200 leading-snug">{f.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form card */}
            <div className="bg-white rounded-xl shadow-2xl p-7 w-full max-w-sm">
              <h2 className="text-center text-gray-800 font-bold text-lg mb-5">
                Вызвать замерщика на дом
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Представьтесь, пожалуйста"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-200 rounded px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Номер телефона"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-gray-200 rounded px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-200 rounded px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
                />

                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.agree}
                    onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                    className="mt-0.5 accent-orange-500"
                  />
                  <span className="text-xs font-bold text-gray-500 leading-snug">
                    Согласен на обработку персональных данных в соответствии с{" "}
                    <a href="#" className="text-orange-500 underline">
                      политикой конфиденциальности
                    </a>
                  </span>
                </label>

                <button
                  type="submit"
                  className="mt-1 w-full cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded transition-colors text-sm tracking-wide"
                >
                  Отправить заявку
                </button>
              </form>
              <div className="relative right-8 top-4 w-110 pointer-events-none select-none z-50">
                <img src="/images/measure.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Realistic tape measure under form card */}
      </section>
    </div>
  );
}