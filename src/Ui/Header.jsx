import UseAvatar from "../Features/authentication/UseAvatar"
import useUser from "../Features/authentication/useUser"
import HeaderMenu from "./HeaderMenu"




function Header() {
 const {isLoading} = useUser()

  return (
    <div className="py-4 px-8 bg-secondary-0 border-b border-secondary-200">
     <div className={`container xl:max-w-screen-lg flex  gap-x-10 items-center justify-end ${isLoading ? "blur" : "" }`}>
        <HeaderMenu/>
        <UseAvatar/>
     </div>
    </div>
  )
}

export default Header
