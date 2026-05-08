"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import NavLink from "@/components/NavLink";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { authClient } from "@/lib/auth-client";

const Register = () => {

  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {

    setLoading(true);
    setAuthError("");

    try {

      const { name, email, password } = data;

      const { data: res, error } = await authClient.signUp.email({
        name,
        email,
        password,
        callbackURL: "/",
      });

      if (error) {
        setAuthError(error.message || "Something went wrong");
        setLoading(false);
        return;
      }

      console.log(res);

      reset();

    } catch (err) {

      console.log(err);
      setAuthError("Registration failed");

    } finally {

      setLoading(false);

    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-blue-100 px-4 py-10 sm:px-6">

      {/* Glow Background */}
      <div className="absolute w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-300 blur-3xl opacity-30 rounded-full top-0 right-0"></div>

      <div className="absolute w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-blue-300 blur-3xl opacity-30 rounded-full bottom-0 left-0"></div>

      {/* Glass Card */}
      <div className="relative w-full max-w-md p-6 sm:p-10 rounded-[28px] bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl">

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-2">
          Create Account
        </h1>

        <p className="text-center text-gray-600 mb-8 text-sm sm:text-base">
          Join Bibliova and start your reading journey 📚
        </p>

        {/* Auth Error */}
        {authError && (
          <div className="mb-4 rounded-xl bg-red-100 border border-red-300 text-red-600 text-sm p-3">
            {authError}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Full Name"
              {...register("name", {
                required: "Name is required",
              })}
              className="w-full p-3 rounded-xl bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm sm:text-base"
            />

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email",
                },
              })}
              className="w-full p-3 rounded-xl bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm sm:text-base"
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full p-3 rounded-xl bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm sm:text-base"
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              className="w-full p-3 rounded-xl bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm sm:text-base"
            />

            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Terms */}
          <label className="flex items-start gap-2 text-sm text-gray-600">

            <input
              type="checkbox"
              {...register("terms", {
                required: "You must accept the terms",
              })}
              className="mt-1"
            />

            <span>I agree to the terms & conditions</span>

          </label>

          {errors.terms && (
            <p className="text-red-500 text-sm">
              {errors.terms.message}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-md hover:scale-[1.02] transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>

          <span className="px-3 text-gray-500 text-sm">
            OR
          </span>

          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Google Button */}
        <Button className="w-full" variant="tertiary">
          <Icon icon="devicon:google" width="20" />
          Sign in with Google
        </Button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}

          <NavLink
            href="/login"
            className="text-purple-600 font-medium hover:underline"
          >
            Login
          </NavLink>

        </p>

      </div>
    </section>
  );
};

export default Register;