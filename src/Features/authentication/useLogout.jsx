import { useMutation, useQueryClient } from "react-query";
import { logoutApi } from "../../Services/authService";
import { useNavigate } from "react-router-dom";


export default function useLogout() {

    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const {isLoading, mutate:logout} = useMutation({
        mutationFn:logoutApi,
        onSuccess:()=>{
            queryClient.removeQueries()
            navigate("/auth",{replace:true})
        }
    })
    return {isLoading,logout}
}