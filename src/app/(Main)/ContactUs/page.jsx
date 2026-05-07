import React from "react";

const ContactUs = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white via-gray-50 to-white">

      <div className="max-w-6xl mx-auto text-center mb-14">

        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Contact <span className="text-blue-600">Us</span>
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions, feedback, or suggestions? We’d love to hear from you.
          Reach out anytime and we’ll respond as soon as possible.
        </p>

      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* Contact Info */}
        <div className="space-y-6">

          <div className="p-6 bg-white rounded-2xl shadow border border-gray-100">
            <h2 className="text-xl font-semibold mb-2">📍 Address</h2>
            <p className="text-gray-600 text-sm">
              Dhaka, Bangladesh — Digital Library Headquarters
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow border border-gray-100">
            <h2 className="text-xl font-semibold mb-2">📧 Email</h2>
            <p className="text-gray-600 text-sm">
              support@bibliova.com
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow border border-gray-100">
            <h2 className="text-xl font-semibold mb-2">📞 Phone</h2>
            <p className="text-gray-600 text-sm">
              +880 1X XXX XXX XX
            </p>
          </div>

        </div>

        {/* Contact Form */}
        <div className="p-8 bg-white rounded-2xl shadow border border-gray-100">

          <h2 className="text-2xl font-semibold mb-6 text-center">
            Send a Message
          </h2>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default ContactUs;