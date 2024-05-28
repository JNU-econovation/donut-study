import supabase from "./supabase";

export const getContents = async () => {
  let { data: blog, error } = await supabase.from("blog").select("*");
  if (error) throw new Error(error.message);
  return blog;
};
