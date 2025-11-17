const SkillCard = ({imageUrl, title}) => {
  return(
    <div className="skill-card group py-4 bg-skill-card relative grid content-center rounded-lg shadow-sm hover:shadow-md transition">
      <img src={`${imageUrl}`} alt={ imageUrl } className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[55px] mix-blend-multiply contrast-100 brightness-120 z-0 group-hover:hidden group-hover:opacity-100" />
      <span className="opacity-0 group-hover:opacity-100 transition text-shadow-md">{title || 'HTML'}</span>
    </div>
  )
}

export default SkillCard