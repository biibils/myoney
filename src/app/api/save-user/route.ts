import { NextResponse } from "next/server";
import { createServerComponentClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { type Database } from "@/lib/supabase/schema"; // optional kalau ada

export async function POST() {
  const cookieStore = cookies();

  const supabase = createServerComponentClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: () => cookieStore }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    console.log("❌ No Supabase user found");
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { email, user_metadata } = user;

  const { error } = await supabase.from("users").upsert({
    email,
    name: user_metadata.full_name,
    image: user_metadata.avatar_url,
  });

  if (error) {
    console.error("❌ Supabase error:", error);
    return NextResponse.json({ error: "Failed to save user" }, { status: 500 });
  }

  console.log("✅ User saved:", { email });
  return NextResponse.json({ message: "User saved" }, { status: 200 });
}
