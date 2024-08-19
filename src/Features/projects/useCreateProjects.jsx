import { useMutation, useQueryClient } from "react-query"
import { createProjectApi } from "../../Services/projectService"
import toast from "react-hot-toast"


export default function useCreateProjects() {
    const queryCliyent = useQueryClient()

    const {isLoading:isCreating , mutate:createProject} = useMutation({
        mutationFn:createProjectApi,
        onSuccess: (data) =>{
            toast.success(data.message),
            queryCliyent.invalidateQueries({
                queryKey:["owner-projects"]
            })
        },
        onError:(err) => {
            toast.error(err)
        } 
    })

    return {isCreating,createProject}

}