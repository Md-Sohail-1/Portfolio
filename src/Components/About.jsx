const About = () => {
  return(
    <section id="about" className="pb-16 pt-6 px-6 bg-slate-700">
      <div className="max-w-4xl mx-auto text-center sm:px-6 md:px-12 lg:px-16">
        <h2 className="text-3xl font-bold text-gray-200 mb-4">About Me</h2>
        <p className="text-gray-300 text-lg leading-relaxed">I'm a frontend developer passionate about crafting modern, responsive websites and web apps. I focus on performance, accessibility, and clean UI/UX. I enjoy working with tools like
          <span className="text-blue-400 font-medium"> React</span>,
          <span className="text-blue-400 font-medium"> Tailwind CSS</span>, and
          <span className="text-blue-400 font-medium"> JavaScript</span> to build engaging digital experiences.
        </p>
        <p className="text-gray-300 mt-4 text-lg">
          When I'm not coding, you'll find me exploring design trends, contributing to open source, or sketching UI ideas.
        </p>
      </div>
    </section>
  )
}

export default About