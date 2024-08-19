import Loading from "../../Ui/Loading"
import useOwnerProjects from "../projects/useOwnerProjects"
import DashboardHeader from "../../Ui/DashboardHeader"
import Satats from "./Satats"


function DashboareLayout() {

    const {projects , isLoading} = useOwnerProjects()

    if (isLoading) return <Loading/>
  return (
    <div>
    <DashboardHeader/>
    <Satats projects={projects}/>
    </div>
  )
}

export default DashboareLayout
