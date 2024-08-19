import Loading from "../../Ui/Loading";
import Table from "../../ui/Table";
import ProposalRow from "../../Features/proposals/ProposalRow";
import useProposals from "./useProposals";



function ProposalTable() {
  const { isLoading, proposals } = useProposals();

  if (isLoading) return <Loading/>;
  return (
      <Table>
      <Table.Header>
        <th>#</th>
        <th>توضیحات </th>
        <th> زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
      </Table.Header>
      <Table.Body>
        {proposals.map((proposal, index) => (
          <ProposalRow key={proposal._id} proposal={proposal} index={index} />
        ))}
      </Table.Body>
    </Table>
 
  );
}

export default ProposalTable;
