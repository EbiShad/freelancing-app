import { useState } from "react";
import Modal from "../../Ui/Modal";
import truncateText from "../../Utils/truncateText";
import Table from "../../ui/Table";
import ChangeProposalStatus from "../project/ChangeProposalStatus";

function ProposalRow({ proposal, index }) {
  const [open, setOpen] = useState(false);
  const { status, user } = proposal;

  const statusStyle = [
    {
      label: "رد شده",
      className: "badge--danger",
    },
    {
      label: " در انتظار تایید",
      className: "badge--secondary",
    },
    {
      label: "تایید شده",
      className: "badge--success",
    },
  ];

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>
        <p>{truncateText(proposal.description, 50)}</p>
      </td>
      <td>{proposal.duration}</td>
      <td>{proposal.price}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <Modal
          onClose={() => setOpen(false)}
          title="تغییر وضعیت درخواست"
          open={open}
        >
          <ChangeProposalStatus proposalId={proposal._id} onClose={()=>setOpen(false)}/>
        </Modal>
        <button onClick={() => setOpen(true)}> تغییر وضعیت</button>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
