import { useNavigate } from "react-router-dom";
import useAuthorize from "../Features/authentication/useAuthorize";
import { useEffect } from "react";
import Loading from "./Loading";




function ProtectedRout({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated, isAuthorize, isLoading } = useAuthorize();


  useEffect(() => {
    if(!isAuthenticated && !isLoading) navigate("/auth") ;
    if(!isAuthorize && !isLoading) navigate("/not-access")
  } , [isAuthenticated,isAuthorize,isLoading,navigate])

  if(isLoading) return <div className="bg-secondary-100 h-screen flex justify-center items-center"><Loading/> </div>

  if (isAuthenticated && isAuthorize) return children
}

export default ProtectedRout;
