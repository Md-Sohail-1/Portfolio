import ProjectCard from './ProjectCard'
import realEstate from "../assets/realEstate.png"
import eCom from "../assets/eCom.png"
import twitterClone from "../assets/twitterClone.png"

const Projects = () => {
  let myProjects = [
    {
      title: 'E-Commerce UI',
      desc: 'A clean, responsive e-commerce interface built with React and Tailwind. Includes product pages, search, cart, wishlist, and checkout UI—everything except payment integration.',
      link: 'https://e-commerce-psi-two-62.vercel.app',
      githubLink: 'https://github.com/Md-Sohail-1/e-com',
      img: eCom,
      techStack: ['React.js', 'Tailwind CSS', 'JavaScript', 'Git', 'Redux', 'GitHub', 'Routing', 'Responsive Web Design']
    },
    {
      title: 'Real Estate Web App',
      desc: 'Built a responsive property platform with features to buy, sell, and search properties by location, price, and more. Used Tailwind CSS for UI and React Router Dom for routing.',
      link: 'https://realestate-peach-seven.vercel.app',
      githubLink: 'https://github.com/Md-Sohail-1/realestate',
      img: realEstate,
      techStack: ['React.js', 'Tailwind CSS', 'Responsive Web Design', 'Routing', 'Git', 'GitHub', 'Node.js', 'Express.js', 'Mongo DB' ]
    },
    {
      title: 'Twitter Clone',
      desc: 'Built with Node.js, Express, EJS, and MongoDB. Features secure login with JWT, public & private posts, and full CRUD. Clean UI with vanilla CSS & JavaScript.',
      link: 'https://social-app-o8zo.onrender.com',
      githubLink: '',
      img: twitterClone,
      techStack: ['Node.js', 'Express.js', 'Mongo DB', 'CSS', 'JavaScript', 'RESTful Apis', 'EJS', 'Git', 'GitHub', ]
    },
  ];
  
  return (
    <section id="projects" className="pb-16 pt-6 px-6 bg-slate-700 w-full">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="pageHeading text-3xl font-bold mb-4 text-gray-200">Projects</h2>
        <p className="pageText text-gray-300 mb-10">A few of the things I've built</p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 sm:px-6 md:px-8">
          {
            myProjects.map((project,index)=> (
              <ProjectCard key={index} title={project.title} description={project.desc} link={project.link} img={project.img} techStack={project.techStack} githubLink={project.githubLink} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Projects