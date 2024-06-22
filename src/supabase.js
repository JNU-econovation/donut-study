import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wnsbljczzfhovajxhsaw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Induc2JsamN6emZob3Zhanhoc2F3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkwNzQwMjcsImV4cCI6MjAzNDY1MDAyN30.0UncKYWwPwczXWVChu3-RC_xkv1YEco5jV4ZVLzjTts";
export const supabase = createClient(supabaseUrl, supabaseKey);
