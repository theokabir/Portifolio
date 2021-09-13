import { Icon } from '@iconify/react'
import nextJs from '@iconify/icons-cib/next-js'
import expressIcon from '@iconify/icons-simple-icons/express'
import tailwindcssIcon from '@iconify/icons-simple-icons/tailwindcss'
import reactIcon from '@iconify/icons-cib/react'

export default function TechOptions({infoChange}) {
  return (
    <div class="grid grid-cols-4 md:grid-cols-1">

      <div className="text-6xl sm:text-8xl" onClick={ e => infoChange(e, "react") }>
        <Icon className="hover:text-blue-600 btn-tech-hover" icon={reactIcon} />
      </div>
      
      <div className="text-6xl sm:text-8xl" onClick={ e => infoChange(e, "next") }>
        <Icon className="hover:text-black btn-tech-hover" icon={nextJs} />
      </div>
      
      <div className="text-6xl sm:text-8xl" onClick={ e => infoChange(e, "express") }>
        <Icon className="hover:text-yellow-600 btn-tech-hover" icon={expressIcon} />
      </div>
      
      <div className="text-6xl sm:text-8xl" onClick={ e => infoChange(e, "tailwind") }>
        <Icon className="hover:text-blue-400 btn-tech-hover" icon={tailwindcssIcon} />
      </div>

    </div>
  )
}