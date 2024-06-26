import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://xpsuuecqydbyptbaexzx.supabase.co";
const supabaseKey = import.meta.env.VITE_ERROR_API;
export const supabase = createClient(supabaseUrl, supabaseKey);
//export를 하면 다른 컴포넌트에 간편하게 import 할 수 있다.
