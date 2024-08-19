import {HiArrowRight } from "react-icons/hi"
import useMoveBack from "../../Hookes/useMoveBack"


function ProjectHeader({project}) {
  const moveBack = useMoveBack()
  return (
    <div className="flex items-center gap-x-4 mb-8">
      <button onClick={moveBack}>
        <HiArrowRight/>
      </button>
      <h1>لیست درخواستهای {project.title}</h1>
    </div>
  )
}

export default ProjectHeader
