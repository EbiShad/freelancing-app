
import {  useQuery } from "react-query"
import {  getProjecApi } from "../../Services/projectService"
import { useParams } from "react-router-dom"



export default function useProject() {

    const {id} = useParams()

    const {isLoading,data} = useQuery({
        queryFn:() => getProjecApi(id),
        queryKey:["project",id],
        retry:false
    })

    const {project = {}} = data || {};

    return {project,isLoading}

}