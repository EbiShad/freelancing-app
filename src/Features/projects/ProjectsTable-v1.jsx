import Loading from "../../Ui/Loading";
import toLocalDateShort from "../../Utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../Utils/toPersianNumbers";
import truncateText from "../../Utils/truncateText";
import useOwnerProjects from "./useOwnerProjects";

function ProjectsTable() {
  const { projects, isLoading } = useOwnerProjects();

  if (isLoading) return <Loading />;
  console.log(projects);
  if (projects.length == 0) return <h4> پروژه ای وجود ندارد </h4>;

  return (
    <div className="bg-secondary-0 overflow-x-auto">
      <table>
        <thead>
          <tr className="title-row">
            <th>#</th>
            <th>عنوان</th>
            <th>دسته بندی</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>تگ</th>
            <th>فریلنسر</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((project, index) => (
            <tr key={project._id}>
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
              <td>{project.freelancer?.name || "-" }</td>
              <td>
                {project.status === "OPEN" ? (
                  <span className="badge badge--success ">باز</span>
                ) : (
                  <span className="badge badge--danger">بسته</span>
                )}
              </td>
              <td>......</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectsTable;
