import { MdAssignment } from "react-icons/md";
import toLocalDateShort from "../../../Utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../../Utils/toPersianNumbers";
import truncateText from "../../../Utils/truncateText";
import Table from "../../../ui/Table";
import Modal from "../../../Ui/Modal";
import { useState } from "react";
import CreatePorposal from "../../proposals/CreatePorposal";


const projectsStatus = {
    OPEN: {
      lable: "باز",
      className: "badge--success",
    },
    CLOSE: {
      lable: "بسته",
      className: "badge--danger",
    },
  };

function ProjectRow({ project, index }) {
  const [open, setOpen] = useState(false);
  const { status ,title} = project;

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(project.title)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>
        <span className={`badge ${projectsStatus[status].className}`}>
          {projectsStatus[status].lable}
        </span>
      </td>
      <td>
        <button onClick={() => setOpen(!open)}>
            <MdAssignment className="w-5 h-5 text-primary-400"/>
        </button>
        <Modal open={open} title={` برای  درخواست ${title}`} onClose={ () =>setOpen(false)}>
            <CreatePorposal projectId={project._id} onClose={() => setOpen(false)}/>
        </Modal>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
