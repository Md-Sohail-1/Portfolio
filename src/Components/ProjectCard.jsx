
const ProjectCard = ({title, description, link}) => {
  return (
    <div class="project-card group bg-slate-300 p-6 rounded-xl shadow-md hover:shadow-lg hover:bg-slate-200 hover:scale-105 transition">
      <h3 class="text-xl font-semibold text-gray-800 mt-2 mb-1">{title || "Project name..."}</h3>
      <p class="text-gray-500 mb-2 group-hover:text-gray-700 text-[15px]">{description || 'Project description...'}</p>
      <a href={link || "#"} class="text-blue-600 text-sm group-hover:underline group-hover:underline-offset-4">View Project</a>
    </div>
  )
}

export default ProjectCard