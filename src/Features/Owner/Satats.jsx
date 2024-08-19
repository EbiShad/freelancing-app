
import { HiCollection, HiCurrencyDollar, HiOutlineViewGrid } from "react-icons/hi";
import Stat from "../../Ui/Stat";

function Satats({ projects }) {



  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.map((p) => p.status === "OPEN").length;
  const numOfProposals = projects.reduce(
    (acc, curr) => curr.proposals.length + acc,
    0
  );

  return (
    <div className="grid  lg:grid-cols-3 md:grid-cols-2 gap-y-2 grid-cols-1 gap-x-4 ">
     <Stat value={numOfProjects} title="پروژه ها" icon={<HiOutlineViewGrid className="w-20 h-20"/>} color="primary"/>
     <Stat value={numOfAcceptedProjects} title=" پروژه های واگذار شده" icon={<HiCurrencyDollar className="w-20 h-20"/>} color="green"/>
     <Stat value={numOfProposals} title="درخواست ها" icon={<HiCollection className="w-20 h-20"/>} color="yellow"/>
   
    </div>
  );
}

export default Satats;
