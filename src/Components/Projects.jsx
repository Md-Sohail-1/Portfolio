import ProjectCard from './ProjectCard'

const Projects = () => {
  let myProjects = [
    {
      title: 'Twitter Clone',
      desc: 'Built with Node.js, Express, EJS, and MongoDB. Features secure login with JWT, public & private posts, and full CRUD. Clean UI with vanilla CSS & JavaScript.',
      link: 'https://social-app-o8zo.onrender.com',
    },
    {
      title: 'Real Estate Web App',
      desc: 'Built a responsive property platform with features to buy, sell, and search properties by location, price, and more. Used Tailwind CSS for UI and React Router Dom for routing.',
      link: 'https://realestate-peach-seven.vercel.app',
    },
    {
      title: 'Portfolio Website',
      desc: 'A clean and responsive portfolio built with HTML, Tailwind CSS, and JavaScript.',
      link: '#',
    },
  ];
  
  return (
    <section id="projects" className="pb-16 pt-6 px-6 bg-slate-700 w-full">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="pageHeading text-3xl font-bold mb-4 text-gray-200">Projects</h2>
        <p className="pageText text-gray-400 mb-10">A few of the things I've built</p>
        <div className="grid gap-8 md:grid-cols-2 sm:px-6 md:px-12">
          {
            myProjects.map((project,index)=> (
              <ProjectCard title={project.title} description={project.desc} link={project.link} key={index}/>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Projects