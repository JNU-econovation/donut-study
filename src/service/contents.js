import supabase from "./supabase";
import { v4 as uuidv4 } from "uuid";

const TABLE_NAME = import.meta.env.VITE_TABLE_NAME;
const BUCKET_NAME = import.meta.env.VITE_BUCKET_NAME;

export const getContents = async () => {
  let { data: blog, error } = await supabase.from(TABLE_NAME).select("*");
  if (error) throw new Error(error.message);
  return blog;
};

export const getImageUrl = async (contentId) => {
  const directory = `content/${contentId}`;

  let { data: image, error } = supabase.storage
    .from(BUCKET_NAME)
    .getPublicUrl(directory);
  if (error) throw new Error(error.message);
  return image;
};

export const uploadContent = async (title, content, file) => {
  const newId = uuidv4();
  const thumbnail = await uploadImage(file, newId);

  const { data, error: insertError } = await supabase
    .from(TABLE_NAME)
    .insert([{ title, content, thumbnail, id: newId }]);
  if (insertError) throw new Error(insertError.message);
  return data;
};

const uploadImage = async (file, id) => {
  const directory = `content/${id}.png`;

  const { data, error } = await supabase.storage.from(BUCKET_NAME).upload(
    directory,
    file,
    {
      contentType: "image/*",
    },
    {
      cacheControl: "3600",
      upsert: false,
    }
  );

  if (error) throw new Error(error.message);
  const path = data.path;
  return path;
};
