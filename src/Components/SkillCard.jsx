/*  Skills Logos
import htmlLogo from '../assets/html.jpg'
import cssLogo from '../assets/css.jpg'
import jsLogo from '../assets/js.jpg'
import reactLogo from '../assets/react.js.jpg'
import tailwindLogo from '../assets/tailwind.css.jpg'
import nodeLogo from '../assets/node.js.jpg'
import expressLogo from '../assets/express.js.jpg'
import mongoLogo from '../assets/mongodb.jpg'
*/
const SkillCard = ({imageUrl, title}) => {
  return(
    <div class="skill-card group py-4 bg-slate-300 relative hover:bg-slate-200 grid content-center rounded-lg shadow-sm hover:shadow-md transition">
      <img src={`${imageUrl}`} alt={ imageUrl } class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[55px] mix-blend-multiply contrast-100 brightness-120 z-0 group-hover:hidden group-hover:opacity-100" />
      <span class="opacity-0 group-hover:opacity-100 transition text-shadow-md">{title || 'HTML'}</span>
    </div>
  )
}

export default SkillCard