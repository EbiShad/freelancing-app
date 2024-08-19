import ProjectHeader from "../Features/project/ProjectHeader"
import ProposalsTable from "../Features/project/ProposalsTable"
import useProject from "../Features/project/useProject"
// import Loading from "../Ui/Loading"


function Project() {
  const {project} = useProject()

  // if(isLoading) <Loading/>


// console.log(project)
  return (
    <div>
     <ProjectHeader project={project}/>
     <ProposalsTable proposals={project.proposals}/>
    </div>
  )
}

export default Project
