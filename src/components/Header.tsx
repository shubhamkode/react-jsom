import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {

  return (
    <div className="w-full fixed top-0 left-0 bg-slate-700 text-slate-200">
      <div className="flex justify-between items-center py-4 sm:py-6 max-w-5xl mx-auto h-full px-8 sm:px-4">
        <Link to="/">
          <h1 className="text-3xl sm:text-5xl font-semibold">JSOM</h1>
        </Link>
        <div className="space-x-5 hidden sm:flex items-center">
          <Link to="/authors" className="text-xl duration-300 hover:underline hover:underline-offset-4 ease-in-out">Authors</Link>
          <Link to="/posts" className="text-xl duration-300 hover:underline hover:underline-offset-4 ease-in-out">Posts</Link>
          <div className="flex space-x-3 justify-center font-semibold">
            <Link to="/auth/login" className=" px-8 py-3 bg-slate-500 rounded">Log In</Link>
            <Link to="/auth/signup" className="px-8 py-3 bg-blue-600 rounded">Sign Up</Link>
          </div>
        </div>
        <div className="sm:hidden">
          <button className="text-3xl p-3 hover:text-black hover:bg-slate-300 rounded duration-300 ease-in-out">
            <AiOutlineMenu />
          </button>
        </div>
      </div>

    </div >
  )
}

export default Header
