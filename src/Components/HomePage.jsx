import { ReactTyped } from 'react-typed'

const HomePage = () => {
  const typedStrings = ['Front-end Developer', 'MERN Stack Developer', 'React js Developer']
  return (
    <>
      <section className="bottom-0 h-[calc(100vh-64px)] flex flex-col items-center justify-center text-center px-4 z-10 top-2 relative">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-gray-100">Hi, I'm <span className="text-blue-400">Md Sohail</span></h1>
        <h2 className="text-2xl sm:text-3xl text-gray-100 mb-6">
           I'm a <ReactTyped className="text-blue-400 font-semibold" 
           strings={typedStrings} 
           typeSpeed={80} 
           backSpeed={50} 
           loop />
        </h2>
        <p className="max-w-xl text-gray-300 mb-10">Passionate frontend developer crafting beautiful, performant web apps with modern technologies.</p>
        <div className="flex gap-2 text-sm">
          <a href="#projects" className="px-6 py-2 bg-blue-600 text-gray-200 rounded-md hover:bg-blue-700 transition">See My Work</a>
          <a href="#contact" className="px-6 py-2 border bg-gray-100 text-blue-500 rounded-md hover:bg-gray-300 transition">Contact Me</a>
        </div>
      </section>
      <hr/>
    </>
  )
}

export default HomePage