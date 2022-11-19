import { Link } from 'react-router-dom';
import React from 'react'

const Footer = () => {
  return (
      <div className="mt-5 fixed bottom-0 w-full bg-slate-800 text-center text-slate-200 py-5 shadow-sm">
      Made By
      <a href='https://github.com/shubhamkode/'
        target="_blank"
        rel="noopener noreferer"
        className="font-semibold uppercase ml-2">
              shubham Agarwal
          </a>
    </div>
  )
}

export default Footer