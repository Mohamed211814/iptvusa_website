import { redirect } from "next/navigation";

export default function BlogCreateRedirect() {
  redirect("/admin/blog");
}
