import { useMutation, useQueryClient } from "react-query"
import { editProjectApi } from "../../Services/projectService"
import toast from "react-hot-toast"


export default function useEditProject() {
    const queryCliyent = useQueryClient()

    const {isLoading:isEditing , mutate:editProject} = useMutation({
        mutationFn:editProjectApi,
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

    return {isEditing,editProject}

}