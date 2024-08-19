import { toPersianNumbersWithComma } from "../Utils/toPersianNumbers"



const colors = {
    primary: "bg-primary-100 text-primary-700",
    green: "bg-green-100 text-green-700",
    yellow: "bg-yellow-100 text-yellow-700"
  }


function Stat({value,icon,title,color}) {
  return (
    <div className="col-span-1 flex gap-x-5 items-center bg-secondary-100 p-4 rounded-lg">
        <div className={`aspect-square rounded-full p-2 ${colors[color]}`}>
          {icon}
        </div>
        <div className="flex flex-col gap-y-2"> 
          <h5 className="font-bold text-xl">{title}</h5>
          <span className="font-bold text-2xl">{toPersianNumbersWithComma(value)}</span>
        </div>
      </div>
  )
}

export default Stat
