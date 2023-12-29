// components/SignupComponent.tsx

import React, { useState } from 'react';

const SignupComponent: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Add your signup logic here
    console.log('Signup:', name, email, password);
  };

  return (
    <div className="flex flex-col items-center font-lilita ">
      <h2 className="text-2xl font-bold mb-1">Sign Up</h2>

      {/* Signup Form */}
      <form className="mb-4 flex flex-col min-w-full">
        <label className="block text-white/70 mb-2">Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 p-2 mb-2 text-black"
        />
        <label className="block text-white/70 mb-2">Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 p-2 mb-2 text-black"
        />
        <label className="block text-white/70 mb-2">Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 p-2 mb-4 text-black"
        />
        <button type="button" onClick={handleSignup} className="bg-green-700/70 hover:bg-green-600/90 hover:scale-105 transition-all duration-300 text-white p-2 rounded">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupComponent;
