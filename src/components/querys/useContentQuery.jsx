import { useQuery } from "@tanstack/react-query";
import { getContents } from "../../service/contents";

export default function useContentQuery() {
  const { data, isloading, error } = useQuery({
    queryKey: ["content"],
    queryFn: () => getContents(),
  });

  return { data, isloading, error };
}
