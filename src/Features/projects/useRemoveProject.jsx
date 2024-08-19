import { useMutation, useQueryClient } from "react-query";
import { removeProjectApi } from "../../Services/projectService";
import toast from "react-hot-toast";


export default function useRemoveProject() {

    const queryCliyent = useQueryClient()

       const {isLoading:isDeleting , mutate:removeProject} = useMutation({
        mutationFn:removeProjectApi,
        onSuccess: (data) =>{
            console.log(data)
            toast.success(data.message),
            queryCliyent.invalidateQueries({
                queryKey:["owner-projects"]
            })
        },
        onError:(err) => {
            toast.error(err)
        } 
    })
 
return {isDeleting,removeProject}
}

