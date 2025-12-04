

const ProjectCard = ({title, description, link, img, techStack, githubLink}) => {
  return (
    <div className="relative pb-12 mx-auto project-card flex flex-col min-w-64 max-w-md group overflow-hidden rounded-md shadow-md hover:shadow-lg hover:scale-105 transition">
      <div>
        <img src={img} alt={title} className="w-full h-48 object-cover group-hover:brightness-110 border-b border-slate-800"/>
      </div>
      <div className="px-6 py-2 md:min-h-64 text-left grid grid-rows-1 content-between">
        <div className="group-hover:text-slate-800">
          <h3 className="text-xl font-semibold text-gray-800 mt-2 mb-1">{title || "Project name..."}</h3>
          <p className="text-gray-600 mb-2 group-hover:text-gray-700 text-[15px]">{description || 'Project description...'}</p>
        </div>
        <div className="text-sm h-auto flex flex-wrap gap-2 text-slate-800 mt-2">
          {
            techStack.map((skill, index)=>(
              <span key={index} className="px-4 group-hover:bg-slate-100 transition ease-in-out py-1 bg-indigo-200 rounded-sm">{skill}</span>
            ))
          }
        </div>
        <div className="flex absolute bottom-1 space-x-3 py-4 h-12">
          <a href={link || "#"} className="text-blue-600 text-sm hover:underline hover:underline-offset-4">Live Project</a>
          <a href={githubLink || "#"} className="text-blue-600 text-sm hover:underline hover:underline-offset-4">Github Repo</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard