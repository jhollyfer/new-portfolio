"use server";

import { redirect } from "next/navigation";

export async function updateCategory(form: FormData) {
  const category = form.get("category");
  return redirect(`/portfolio?category=${category}`);
}
