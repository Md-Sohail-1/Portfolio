import { useState } from 'react'

const Header = () => {
  const [isMainBtnClick, setIsMainBtnClick] = useState(false)
  
  return(
  <>
    <header id="header" className="opacity-30 flex items-center justify-between p-4 bg-slate-200 shadow-md fixed top-0 w-full z-50 h-16 md:px-16 sm:px-6">
      <div className="text-2xl font-bold">MD Sohail</div>
    
     {
     //  Navbar 
     }
      <nav className="hidden md:flex gap-6 text-lg">
        <a href="#" className="hover:text-indigo-600 text-gray-600 hover:underline hover:underline-offset-8 transition">About</a>
        <a href="#" className="hover:text-indigo-600 text-gray-600 hover:underline hover:underline-offset-8 transition">Projects</a>
        <a href="#" className="hover:text-indigo-600 text-gray-600 hover:underline hover:underline-offset-8 transition">Skills</a>
        <a href="#" className="hover:text-indigo-600 text-gray-600 hover:underline hover:underline-offset-8 transition">Contact</a>
      </nav>

     { // Mobile Menu Button 
     }
      <button id="menuBtn" onClick={() => setIsMainBtnClick(!isMainBtnClick)} className="md:hidden text-gray-700 focus:outline-none">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </header>
    <aside id="sidebar" className={`fixed ${ isMainBtnClick ? '' : '-translate-x-full' } top-0 left-0 h-full w-64 bg-slate-600 shadow-lg p-6 transform transition-transform duration-300 md:hidden z-50`}>
      <div className="flex justify-between items-center mb-6">
        <span className="text-xl font-semibold text-slate-100">Menu</span>
        <button id="closeBtn" onClick={() => setIsMainBtnClick(!isMainBtnClick)} className="text-gray-100">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <nav className="flex flex-col space-y-4 text-base">
        <a href="#about" className="hover:text-yellow-400 text-gray-100 hover:underline hover:underline-offset-[6px] transition">About</a>
        <a href="#projects" className="hover:text-yellow-400 text-gray-100 hover:underline hover:underline-offset-[6px] transition">Projects</a>
        <a href="#skills" className="hover:text-yellow-400 text-gray-100 hover:underline hover:underline-offset-[6px] transition">Skills</a>
        <a href="#contact" className="hover:text-yellow-400 text-gray-100 hover:underline hover:underline-offset-[6px] transition">Contact</a>
      </nav>
    </aside>
  </>
  )
}

export default Header