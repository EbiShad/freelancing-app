import { useNavigate } from "react-router-dom"


function useMoveBack() {
 const navigete = useNavigate()
 return ()=> navigete(-1)
}

export default useMoveBack
