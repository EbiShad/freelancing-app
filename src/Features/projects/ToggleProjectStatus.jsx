

import useToggleProjectStatus from "./useToggleProjectStatus.jsx";
import Loading from "../../Ui/Loading.jsx";
import Toggle from "../../Ui/Toggle.jsx";

function ToggleProjectStatus({ project }) {
  const enabled = project.status === "OPEN" ? true : false
  

  const { isUpdating, toggleProjectStatus } = useToggleProjectStatus();

  const toggleHandler = () => {
    const newStatus = project.status === "OPEN" ? "CLOSE" : "OPEN";

    toggleProjectStatus(
      {
        id: project._id,
        data: { status: newStatus },
      },
    );
  };
  return (
    <div className="w-[5rem]">
      {isUpdating ? (
        <Loading height={20} width={50} />
      ) : (
        <Toggle
          enabled={enabled}
          label={project.status === "OPEN" ? "باز" : "بسته"}
          onChange={toggleHandler}
        />
      )}
    </div>
  );
}

export default ToggleProjectStatus;
