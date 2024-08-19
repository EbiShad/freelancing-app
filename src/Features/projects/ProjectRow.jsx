import { HiEye, HiOutlineTrash } from "react-icons/hi";
import toLocalDateShort from "../../Utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../Utils/toPersianNumbers";
import truncateText from "../../Utils/truncateText";
import Table from "../../ui/Table";
import { MdOutlineModeEdit } from "react-icons/md";
import { useState } from "react";
import Modal from "../../Ui/Modal";
import ConfirmDelete from "../../Ui/ConfirmDelete";
import useRemoveProject from "./useRemoveProject";
import CreateProjectForm from "./CreateProjectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";
import { Link } from "react-router-dom";

function ProjectRow({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const {  removeProject } = useRemoveProject();

  
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(project.title)}</td>
      <td>{project.category?.title || "-"}</td>
      <td>{toPersianNumbersWithComma(project.budget)}</td>
      <td>{toLocalDateShort(project.deadline)}</td>

      <td>
        <div className="flex flex-wrap gap-1 items-center max-w-[200px]">
          {project.tags.map((tag) => (
            <span className="badge badge--primary" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project.freelancer?.name || "-"} </td>
      <td>
      <ToggleProjectStatus project={project}/>
      </td>
      <td>
        <div className="flex items-center gap-x-2">

          <button onClick={() => setIsEditOpen(true)}>
          <MdOutlineModeEdit className="text-error w-5 h-5" />
          </button>

          <Modal
            onClose={() => setIsEditOpen(false)}
            open={isEditOpen}
            title={`ویرایش ${project.title} `}
          >
            <CreateProjectForm onClose={() => setIsEditOpen(false)} projectToEdit={project}/>
          </Modal>

          <Modal
            onClose={() => setIsDeleteOpen(false)}
            open={isDeleteOpen}
            title={`حذف ${project.title} `}
          >
            <ConfirmDelete
              resorceName={project.title}
              onClose={() => setIsDeleteOpen(false)}
              onConfirm={() =>
                removeProject(project._id, {
                  onSuccess: () => setIsDeleteOpen(false),
                })
              }
              disabled={false}
            />
          </Modal>

          <button onClick={() => setIsDeleteOpen(true)}>
          <HiOutlineTrash className="text-primary-900 w-5 h-5" />
          </button>
        </div>
      </td>
      <td>
        <Link to={project._id} className="flex justify-center"> 
        <HiEye className="h-5 w-5 text-primary-800"/>
        </Link>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
