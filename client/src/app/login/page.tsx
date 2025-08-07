"use client";

import { FaGithub, FaGoogle } from "react-icons/fa";
import Button from "../components/Button";
import Input from "../components/Input";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BsPerson } from "react-icons/bs";
import { MdEmail, MdPassword } from "react-icons/md";
import InfiniteTextLoop from "../components/InfiniteTextLoop";
import Image from "next/image";

const codeSnippet = `const user = await register({ email, password });`;

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [change, setChange] = useState(false);
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Form submitted");
    console.log("Form values:", formValues, "Terms accepted:", checked);
    setIsLoading(false);
  };

  const handleValuesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    console.log(`Field ${name} changed to ${value}`);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      {/* Content Card */}
      <div className="relative z-10 w-full max-w-xl">
        <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Form Side */}
            <div className="flex-1 p-16 sm:p-10 ">
              <div className="max-w-md mx-auto">
                {/* Header */}
                <div className="mb-8">
                  <h1 className="text-2xl mb-2">Continue Your Journey</h1>
                  <p className="text-gray-400 text-xs">
                    Enter your credintials to login your account
                  </p>
                </div>

                {/* Social Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <Button
                    text="Google"
                    icon={<FaGoogle className="w-4 h-4" />}
                    className="flex-1 justify-center"
                  />
                  <Button
                    text="GitHub"
                    icon={<FaGithub className="w-4 h-4" />}
                    className="flex-1 justify-center"
                  />
                </div>

                {/* Divider */}
                <div className="flex items-center mb-6">
                  <div className="w-full border-t border-gray-700"></div>
                  <span className="px-2 text-xs text-gray-400">Or</span>
                  <div className="w-full border-t border-gray-700"></div>
                </div>

                {/* Form */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="flex flex-col sm:grid-cols-2 gap-5"></div>

                  <div>
                    {change ? (
                      <Input
                        placeHolder="john doe"
                        id="username"
                        name="username"
                        onChange={handleValuesChange}
                        label="Username"
                        icon={<BsPerson className="text-gray-500" size={15} />}
                      />
                    ) : (
                      <Input
                        placeHolder="example@gmail.com"
                        id="email"
                        name="email"
                        label="Email address"
                        onChange={handleValuesChange}
                        type="email"
                        icon={<MdEmail className="text-gray-500" size={15} />}
                      />
                    )}
                    <button
                      onClick={() => setChange((prev) => !prev)}
                      className="text-xs hover:underline cursor-pointer text-blue-400"
                    >
                      Or use your email
                    </button>
                  </div>

                  <div>
                    <Input
                      placeHolder="min 6 characters"
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                      onChange={handleValuesChange}
                      isPassword
                      icon={<MdPassword className="text-gray-500" size={15} />}
                    />
                    <button className="text-xs hover:underline cursor-pointer text-blue-400">
                      Forget me password
                    </button>
                  </div>

                  <div className="flex items-center mb-4">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => {
                        const isChecked = e.target.checked;
                        setChecked(isChecked);
                        console.log("Checked now:", isChecked);
                      }}
                      className="w-4 h-4 rounded-full bg-gray-700 border-gray-600 focus:ring-blue-500"
                    />

                    <label
                      htmlFor="terms"
                      className="ml-2 text-sm text-gray-300"
                    >
                      I agree to the{" "}
                      <a
                        href="#"
                        className="text-blue-400 outline-0 hover:underline"
                      >
                        Terms
                      </a>{" "}
                      &{" "}
                      <a
                        href="#"
                        className="text-blue-400 outline-0 hover:underline"
                      >
                        Privacy Policy
                      </a>
                    </label>
                  </div>

                  <Button
                    text={isLoading ? "Login Account..." : "Login Account"}
                    className={`w-full justify-center py-3 bg-blue-600 hover:bg-blue-700 transition-colors 
                    ${
                      isLoading || !checked
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  />
                </form>
                <div className="mt-6 text-center text-sm text-gray-400">
                  Already have an account?{" "}
                  <a
                    href="/register"
                    className="text-blue-400 hover:underline font-medium"
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
