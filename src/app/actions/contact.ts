"use server";

import { contactSchema } from "@/lib/schemas";
import type { ContactState } from "@/lib/types";

export async function sendContactMessage(
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const values = {
    name: typeof raw.name === "string" ? raw.name : "",
    email: typeof raw.email === "string" ? raw.email : "",
    message: typeof raw.message === "string" ? raw.message : "",
  };

  const parsed = contactSchema.safeParse(values);

  if (!parsed.success) {
    const fieldErrors: ContactState["errors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (key === "name" || key === "email" || key === "message") {
        fieldErrors[key] = issue.message;
      }
    }
    return {
      status: "error",
      errors: fieldErrors,
      values,
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 600));

  return {
    status: "success",
  };
}
