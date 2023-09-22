"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();

    // Here, you can implement your sign-in logic
    // For demonstration purposes, we're just logging the email and password
    console.log("Email:", email);
    console.log("Password:", password);

    // After successful sign-in, you can redirect the user to another page
    // For example, using Next.js's router
    // import { useRouter } from 'next/router';
    // const router = useRouter();
    // router.push('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Parent container for centering */}
      <div className="text-center shadow-md p-4 rounded-2xl bg-white">
        <h1>Sign In</h1>
        <form onSubmit={handleSignIn} className="mt-4">
          <div className="mb-4 text-left">
            {/* Ajoutez la classe text-left pour aligner le texte à gauche */}
            <label htmlFor="email" className="block text-gray-600">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="border rounded-md px-4 py-2 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 text-left">
            {" "}
            {/* Ajoutez la classe text-left pour aligner le texte à gauche */}
            <label htmlFor="password" className="block text-gray-600">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="border rounded-md px-4 py-2 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
