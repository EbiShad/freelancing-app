import DashboardHeader from "../Ui/DashboardHeader";
import Stats from "../Features/Freelancer/Stats";
import useProposals from "../Features/proposals/useProposals";
import Loading from "../Ui/Loading";

function FrreelancerDashboard() {
  const { isLoading, proposals } = useProposals();

  if (isLoading) return <Loading />;

  return (
    <div>
      <DashboardHeader />
      <Stats proposals={proposals} />
    </div>
  );
}

export default FrreelancerDashboard;
