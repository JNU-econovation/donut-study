import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import {
  getContentById,
  getContents,
  getImageUrl,
  uploadContent,
} from "../../service/contents";

const queryClient = new QueryClient();

export function useContentsQuery() {
  const { data, isloading, error } = useQuery({
    queryKey: ["content"],
    queryFn: () => getContents(),
    staleTime: 1000 * 60 * 60,
  });

  return { data, isloading, error };
}

export const useImageUrlQuery = (contentId) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["content", "image", contentId],
    queryFn: () => getImageUrl(contentId),
    staleTime: 1000 * 60 * 60,
  });

  return { data, isLoading, error };
};

export const useUploadContentMutation = ({
  title,
  content,
  file,
  setIsLoading,
  resetForm,
  closeModal,
}) => {
  const { mutate } = useMutation({
    mutationFn: () => {
      if (!file) {
        alert("파일을 선택해주세요");
        return;
      }
      return uploadContent(title, content, file[0]);
    },
    onMutate: () => {
      setIsLoading(true);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("content");
      setIsLoading(false);
      resetForm();
      alert("글이 성공적으로 업로드되었습니다.");
      closeModal();
    },
  });
  return mutate;
};

export const useContentByIdQuery = (id) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["content", id],
    queryFn: () => getContentById(id),
    staleTime: 1000 * 60 * 60,
  });

  return { data, isLoading, error };
};
