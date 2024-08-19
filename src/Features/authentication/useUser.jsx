import {useQuery } from "react-query";
import { getUser } from "../../Services/authService";

 
 
export default function useUser() {
 const {data,isLoading} = useQuery({
    queryKey:["user"],
    queryFn:getUser,
    retry:false
 })

 const {user = {}} = data || {}

 return {user,isLoading}
 }