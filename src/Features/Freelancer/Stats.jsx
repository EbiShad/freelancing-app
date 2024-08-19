import { HiCollection, HiCurrencyDollar, HiOutlineViewGrid } from "react-icons/hi"
import Stat from "../../Ui/Stat"




function Stats( {proposals}) {

    const numOfProposals = proposals.length
    const acceptedProposals = proposals.filter(p => p.status === 2)

    const balance = acceptedProposals.reduce((acc,curr) => curr.price + acc, 0)

    console.log(proposals)
  return (
    <div>
       <Stat value={numOfProposals} title="درخواست ها" icon={<HiOutlineViewGrid className="w-20 h-20"/>} color="primary"/>
       <Stat value={acceptedProposals.length} title="درخواست های تایید شده" icon={<HiCurrencyDollar className="w-20 h-20"/>} color="green"/>
       <Stat value={balance} title="کیف پول" icon={<HiCollection className="w-20 h-20"/>} color="yellow"/>
    </div>
  )
}

export default Stats
