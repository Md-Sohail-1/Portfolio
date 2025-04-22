
const ProjectCard = ({title, description, link}) => {
  return (
    <div class="bg-slate-300 p-6 rounded-xl shadow-md hover:shadow-lg hover:bg-slate-200 hover:scale-105 transition">
      <h3 class="text-xl font-semibold text-gray-800 mb-2">{title || "social App"}</h3>
      <p class="text-gray-500 mb-4">{description || 'hii'}</p>
      <a href={link || "#"} class="text-blue-500 text-sm hover:underline hover:underline-offset-4">View Project</a>
    </div>
  )
}

export default ProjectCard