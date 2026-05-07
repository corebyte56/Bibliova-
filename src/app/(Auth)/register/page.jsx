import NavLink from "@/components/NavLink";
import {Button} from "@heroui/react";
import {Icon} from "@iconify/react";

const Register = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-blue-100 px-6">

      {/* Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-purple-300 blur-3xl opacity-30 rounded-full top-10 right-10"></div>
      <div className="absolute w-[400px] h-[400px] bg-blue-300 blur-3xl opacity-30 rounded-full bottom-10 left-10"></div>

      {/* Glass Card */}
      <div className="relative w-full max-w-md p-10 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">
          Create Account
        </h1>

        <p className="text-center text-gray-600 mb-8 text-sm">
          Join Bibliova and start your reading journey 📚
        </p>

        {/* Form */}
        <form className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-xl bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-xl bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-xl bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 rounded-xl bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          {/* Terms */}
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" />
            I agree to the terms & conditions
          </label>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-md hover:scale-[1.02] transition"
          >
            Create Account
          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Social */}
        <Button className="w-full" variant="tertiary">
                <Icon icon="devicon:google" />
                Sign in with Google
              </Button>

        

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <NavLink href="/login" className="text-purple-600 font-medium hover:underline">
            Login
          </NavLink>
        </p>

      </div>
    </section>
  );
};

export default Register;