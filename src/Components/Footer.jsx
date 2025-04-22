import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return(
    <footer className="bg-slate-700 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left sm:px-6 md:px-12 lg:px-16">
        <p className="text-slate-200 text-sm">&copy; 2025 MD Sohail. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0 text-slate-300">
          <a href="https://github.com/yourusername" target="_blank" className="hover:text-gray-600 transition">
            <FaGithub className='text-xl'/>
          </a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-gray-600 transition">
            <FaLinkedin className="text-xl"/>
          </a>
          <a href="mailto:you@example.com" className="hover:text-gray-600 transition">
            <FaEnvelope className="text-xl"/>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer