import { useQuery } from "react-query";
import { getProjectsApi } from "../Services/projectService";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

export default function useProjects() {
  const { search } = useLocation();

  const queryObject = queryString.parse(search);

  const { data, isLoading } = useQuery({
    queryKey: ["projects",queryObject],
    queryFn:() => getProjectsApi(search),
  });

  const { projects } = data || {};

  return { projects, isLoading };
}
