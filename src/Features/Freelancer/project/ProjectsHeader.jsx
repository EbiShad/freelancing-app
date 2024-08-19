import useCategories from "../../../Hookes/useCategories"
import Filter from "../../../Ui/Filter"
import FilterDropdown from "../../../Ui/FilterDropdown"




function ProjectsHeader() {

  const {transformedCategories} = useCategories()

  const sortOptions = [
    {value:"latest", label:"مرتب سازی(جدیدترین)"},
    {value:"earliest", label:"مرتب سازی(قدیمی ترین)"}
  ]

  const statusOptions = [
    {value:"ALL", label:"همه"},
    {value:"OPEN", label:"باز"},
    {value:"CLOSED", label:"بسته"},
  ]

  return (
    <div className="flex justify-between mb-8 text-secondary-700 items-center">
      <h1 className="font-bold text-2xl"> لیست پروژه ها </h1>
      <FilterDropdown filterField="category" options={[...transformedCategories,{value:"ALL", label:"همه"}]}/>
      <FilterDropdown filterField="sort" options={sortOptions}/>
      <Filter filterField="status" options={statusOptions}/>
    </div>
  )
}

export default ProjectsHeader
