import { useLocation } from "react-router-dom";
import useUser from "./useUser";



function useAuthorize() {
  const { isLoading, user } = useUser();
  const { pathname } = useLocation();

  let isAuthenticated = false;
  if (user) isAuthenticated = true;

  let isAuthorize = false;

//   if (pathname.includes("owner")) {
//     if (user && user.role === "OWNER") isAuthorize = true;
//   }
//   if (pathname.includes("freelancer")) {
//     if (user && user.role === "FREELANCER") isAuthorize = true;
//   }
//   if (pathname.includes("admin")) {
//     if (user && user.role === "ADMIN") isAuthorize = true;
//   }

const ROLES = {
    admin:"ADMIN",
    freelancer:"FREELANCER",
    owner:"OWNER"
}
const desiredRole = pathname.split("/").at(1)

// if(user && user.role === desiredRole) isAuthorize = true

if( Object.keys(ROLES).includes(desiredRole)){
    if(user && user.role === ROLES[desiredRole])  isAuthorize = true
}


  return {isAuthenticated , isAuthorize , isLoading , user}
}

export default useAuthorize;
