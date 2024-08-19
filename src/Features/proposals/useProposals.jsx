import { useQuery } from "react-query";
import { getProposalApi } from "../../Services/proposalService";




export default function useProposals() {
 
    const {isLoading,data} = useQuery({
        queryKey:["proposals"],
        queryFn:getProposalApi
    })
 const {proposals =[]} = data || {}

 return {isLoading , proposals}

}
