import { useMutation } from "react-query";
import { changeProposalStatusApi } from "../../Services/proposalService";
import toast from "react-hot-toast";


export default function useChangeProposalStatus(){

   

    const {mutate:changeProposalStatus ,isLoading:isUpdading} = useMutation({
        mutationFn:changeProposalStatusApi,
        onSuccess:(data)=>{
            toast.success(data.message)
        },
        onError:(err)=>{
            toast.error(err?.response?.data?.message)
        }

    })

    return {changeProposalStatus, isUpdading}
}