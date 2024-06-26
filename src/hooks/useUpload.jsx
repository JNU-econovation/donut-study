import { useState } from "react";
import { useUploadContentMutation } from "./querys/useContentQuery";

export default function useUpload({ closeModal }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const resetForm = () => {
    setTitle("");
    setContent("");
    setFile(null);
  };

  const mutate = useUploadContentMutation({
    title,
    content,
    file,
    setIsLoading,
    resetForm,
    closeModal,
  });

  return {
    title,
    setTitle,
    content,
    setContent,
    file,
    setFile,
    isLoading,
    mutate,
  };
}
