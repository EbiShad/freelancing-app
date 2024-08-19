import { useQuery } from "react-query";
import getCategoryApi from "../Services/categoryService";

export default function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoryApi,
  });

  const { categories:rawCategories = []} = data || {};

  const transformedCategories = rawCategories.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));


  const categories = rawCategories.map((item) => ({
    label: item.title,
    value: item._id,
  }));

  return {transformedCategories, categories ,isLoading}
}
