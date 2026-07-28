import { redirect } from "next/navigation";

import { investorInsightsBasePath } from "@/lib/blog";

export default function BlogRedirectPage() {
  redirect(investorInsightsBasePath);
}
