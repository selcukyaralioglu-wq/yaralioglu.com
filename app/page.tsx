import { redirect } from "next/navigation";

/** Kök `/` → varsayılan dil (statik export; middleware yok) */
export default function RootPage() {
  redirect("/tr");
}
