import SkillCard from './SkillCard'


//  Skills Logos
import htmlLogo from '../assets/html.jpg'
import cssLogo from '../assets/css.jpg'
import jsLogo from '../assets/js.jpg'
import reactLogo from '../assets/react.js.jpg'
import tailwindLogo from '../assets/tailwind.css.jpg'
import nodeLogo from '../assets/node.js.jpg'
import expressLogo from '../assets/express.js.jpg'
import mongoLogo from '../assets/mongodb.jpg'

const Skills = () => {
  let mySkills = [
    {
      title: 'HTML',
      logo: htmlLogo,
    },
    {
      title: 'CSS',
      logo: cssLogo,
    },
    {
      title: 'JavaScript',
      logo: jsLogo,
    },
    {
      title: 'React Js',
      logo: reactLogo,
    },
    {
      title: 'Tailwind CSS',
      logo: tailwindLogo,
    },
    {
      title: 'Node Js',
      logo: nodeLogo,
    },
    {
      title: 'Express Js',
      logo: expressLogo,
    },
    {
      title: 'Mongo DB',
      logo: mongoLogo,
    },
  ]
  
  return (
    <section id="skills" class="pb-16 pt-6 px-6 bg-slate-700">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4 text-gray-200">Skills</h2>
        <p class="text-gray-400 mb-10">Technologies and tools I use regularly</p>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:px-6 md:px-12">
          {
            mySkills.map((skill, index)=> (
              <SkillCard title={skill.title} imageUrl={skill.logo} key={index}/>
            ))
          } 
        </div>
      </div>
    </section>
  )
}

export default Skills