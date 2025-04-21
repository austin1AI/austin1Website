import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function HomePage() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Austin1.ai Logo" className="h-10" />
            <span className="text-sm text-gray-600 tracking-widest uppercase">
              Where HI meets AI
            </span>
          </div>
          <nav className="space-x-6 text-sm font-medium">
            <a href="#verticals" className="text-gray-700 hover:text-red-700">Verticals</a>
            <a href="#capabilities" className="text-gray-700 hover:text-red-700">Capabilities</a>
            <a href="#contact" className="text-gray-700 hover:text-red-700">Contact</a>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-r from-red-700 to-red-500 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <img src="/logo.png" alt="Austin1.ai Logo" className="mx-auto mb-4 h-20" />
          <p className="text-sm uppercase tracking-widest text-gray-200 mb-4">Where HI meets AI</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Enabling Scalable Infrastructure for the AI-Powered Enterprise
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Austin1 helps global tech leaders build and manage intelligent, secure, and scalable infrastructure.
          </p>
          <a
            href="#capabilities"
            className="inline-block bg-white text-red-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Explore Our Capabilities
          </a>
        </div>
      </section>

      <section id="contact" className="py-16 px-6 bg-red-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Partner with Austin1.ai</h2>
          <p className="mb-6">
            Let’s architect the infrastructure foundation for tomorrow’s digital economy — secure, intelligent, and globally scalable.
          </p>
          <div className="mb-6">
            <p className="text-lg font-medium">📍 5 Cowboys Way, Frisco, TX 75034 USA</p>
          </div>
          <a
            href="mailto:info@austin1.ai"
            className="inline-block bg-white text-red-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      <footer className="bg-gray-100 text-center py-6 text-sm text-gray-600">
        &copy; {new Date().getFullYear()} <a href="https://www.austin1.ai" className="text-red-700 hover:underline">Austin1.ai</a>. All rights reserved.
      </footer>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
