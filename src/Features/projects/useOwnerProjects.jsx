

import { useQuery } from "react-query";
import { getOwnerProjectApi } from "../../Services/projectService";

export default function useOwnerProjects(){
        const {data , isLoading} = useQuery({
            queryKey:["owner-projects"],
            queryFn : getOwnerProjectApi
        })

        const {projects} =  data || {}

        return {projects , isLoading}
 
}