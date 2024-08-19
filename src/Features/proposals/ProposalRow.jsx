import toLocalDateShort from "../../Utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../Utils/toPersianNumbers";
import truncateText from "../../Utils/truncateText";
import Table from "../../ui/Table";

function ProjectRow({ proposal, index }) {
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

  const { status } = proposal;

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(proposal.description)}</td>
      <td>{toLocalDateShort(proposal.duration)}</td>
      <td>{toPersianNumbersWithComma(proposal.price)}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
