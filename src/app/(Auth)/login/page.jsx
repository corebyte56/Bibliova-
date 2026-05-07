import NavLink from "@/components/NavLink";
import {Button} from "@heroui/react";
import {Icon} from "@iconify/react";

const Login = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 px-6">

      {/* Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-blue-300 blur-3xl opacity-30 rounded-full top-10 left-10"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-300 blur-3xl opacity-30 rounded-full bottom-10 right-10"></div>

      {/* Glass Card */}
      <div className="relative w-full max-w-md p-10 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-gray-600 mb-8 text-sm">
          Sign in to continue your reading journey 📚
        </p>

        {/* Form */}
        <form className="space-y-4">

          <input
            type="email"
            placeholder="Email address"
            className="w-full p-3 rounded-xl bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-xl bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Options */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-md hover:scale-[1.02] transition"
          >
            Sign In
          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Social Buttons */}
        <Button className="w-full" variant="tertiary">
        <Icon icon="devicon:google" />
        Sign in with Google
      </Button>


        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <NavLink href="/register" className="text-blue-600 font-medium hover:underline">
            Create account
          </NavLink>
        </p>

      </div>
    </section>
  );
};

export default Login;