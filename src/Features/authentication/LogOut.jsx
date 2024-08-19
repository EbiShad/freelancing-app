import { HiArrowCircleRight } from "react-icons/hi";
import useLogout from "./useLogout";
import Loading from "../../Ui/Loading";

function LogOut() {
  const { isLoading, logout } = useLogout();

  return isLoading ? (
    <Loading />
  ) : (
    <button onClick={logout}>
      <HiArrowCircleRight className="w-5 h-5 text-primary-900" />
    </button>
  );
}

export default LogOut;
