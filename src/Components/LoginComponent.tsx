// components/LoginComponent.tsx

import { Facebook, Github, Instagram, Twitter } from 'lucide-react'
import React, { useState } from 'react'

const LoginComponent: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailLogin = () => {
        // Add your email login logic here
        console.log('Email login:', email, password)
    }

    const handleGoogleLogin = () => {
        // Add your Google login logic here
        console.log('Google login')
    }

    const handleGithubLogin = () => {
        // Add your GitHub login logic here
        console.log('GitHub login')
    }

    return (
        <div className="flex flex-col items-center font-mono">
            <h2 className="text-2xl font-bold mb-0">Login</h2>

            <div className="p-1 transition-all duration-300">
                {/* Login with Google */}
                <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="bg-blue-600/70 hover:bg-blue-600 transition-all duration-300 text-white p-2 rounded m-3"
                >
                    <Facebook />
                </button>
                {/* Login with GitHub */}
                <button
                    type="button"
                    onClick={handleGithubLogin}
                    className="bg-sky-400/70 hover:bg-cyan-400 text-white p-2 transition-all duration-300 rounded m-3"
                >
                    <Twitter />
                </button>
                <button
                    type="button"
                    onClick={handleGithubLogin}
                    className="bg-purple-700 hover:bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 transition-all duration-300 text-white p-2 rounded m-3"
                >
                    <Instagram />
                </button>
            </div>

            {/* Email Login Form */}
            <form className="mb-4">
                <label className="block text-gray-700 mb-2">Email:</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 p-2 mb-2"
                />
                <label className="block text-gray-700 mb-2">Password:</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-300 p-2 mb-4"
                />
            </form>

            <button
                type="button"
                onClick={handleEmailLogin}
                className="bg-cyan-500 text-white p-2 rounded"
            >
                Login with Email
            </button>
        </div>
    )
}

export default LoginComponent
