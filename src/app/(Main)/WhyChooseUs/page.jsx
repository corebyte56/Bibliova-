import NavLink from "@/components/NavLink";
import { Button } from "@heroui/react";
import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-40"></div>

      <div className="relative max-w-6xl mx-auto text-center">

        {/* Header */}
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          Why Choose <span className="text-blue-600">Bibliova</span>
        </h1>

        <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-16">
          A modern digital library built for readers who want speed, simplicity,
          and a premium reading experience. We focus on making knowledge
          accessible to everyone, anytime, anywhere.
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
            <h2 className="text-2xl font-semibold mb-3">📚 Massive Collection</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Explore thousands of books across fiction, science, programming,
              business, self-development and more. Everything in one place.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
            <h2 className="text-2xl font-semibold mb-3">⚡ Lightning Fast Search</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Smart search system that finds books instantly. No delay, no confusion,
              just type and discover.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
            <h2 className="text-2xl font-semibold mb-3">🎯 Clean Experience</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Minimal UI designed for focus. No distractions — only reading and learning.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
            <h2 className="text-2xl font-semibold mb-3">📱 Fully Responsive</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Works perfectly on mobile, tablet, and desktop. Read anywhere, anytime.
            </p>
          </div>

          {/* Card 5 */}
          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
            <h2 className="text-2xl font-semibold mb-3">🔒 Secure Platform</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Your data and reading history stay safe with modern authentication
              and secure architecture.
            </p>
          </div>

          {/* Card 6 */}
          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
            <h2 className="text-2xl font-semibold mb-3">🚀 Always Growing</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              New books and features are added regularly to improve your experience.
            </p>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Ready to explore knowledge?
          </h3>
          <p className="text-gray-500 mb-6">
            Join thousands of readers and start your journey today.
          </p>

          <NavLink href="/">
            <Button fullWidth>
            Get Started
          </Button>
          </NavLink>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;