import { useMutation, useQueryClient } from "react-query"
import toast from "react-hot-toast"
import { toggleProjectStatusApi } from "../../Services/projectService"


export default function useToggleProjectStatus() {
    const queryCliyent = useQueryClient()

    const {isLoading:isUpdating , mutate:toggleProjectStatus} = useMutation({
        mutationFn:toggleProjectStatusApi,
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

    return {isUpdating,toggleProjectStatus}

}