import { redirect } from "next/navigation";

export default function page() {
  return redirect("/en"); // Redirect to the English version of the site
}
