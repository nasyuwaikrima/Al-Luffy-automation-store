import { supabase } from "@/lib/database/supabase";

export default async function Home() {
  const { data, error } = await supabase
    .from("products")
    .select("*");

  console.log(data, error);

  return <div>Test</div>;
}