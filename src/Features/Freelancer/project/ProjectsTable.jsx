import useProjects from "../../../Hookes/useProjects"
import Loading from "../../../Ui/Loading"
import Table from "../../../ui/Table"
import ProjectRow from "../../Freelancer/project/ProjectRow"




function ProjectsTable() {


  const {projects , isLoading} = useProjects()

  if(isLoading) return <Loading/>

  return (
    <Table>
    <Table.Header>
      <th>#</th>
      <th>عنوان پروژه</th>
      <th>بودجه</th>
      <th>ددلاین</th>
      <th>وضعیت</th>
      <th>عملیات</th>
    </Table.Header>
    <Table.Body>
      {projects.map((project, index) => (
        <ProjectRow key={project._id} project={project} index={index} />
      ))}
    </Table.Body>
  </Table>
  )
}

export default ProjectsTable
