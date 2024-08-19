import { useMutation, useQueryClient } from "react-query"
import { creatProposalApi } from "../../Services/proposalService"
import toast from "react-hot-toast"


export default function useCreateProposal(){

    const queryClient = useQueryClient();

    const {isLoading:isCreating , mutate:createProposal} = useMutation({
        mutationFn:creatProposalApi,
        onSuccess: (data) =>{
            toast.success(data.message)
            queryClient.invalidateQueries({
                queryKey:["proposals"]
            })
        },
        onError:(err) => {
            toast.error(err)
        } 
        
    })

    return {isCreating,createProposal}
}