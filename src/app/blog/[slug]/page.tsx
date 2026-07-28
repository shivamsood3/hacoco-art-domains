import { redirect } from "next/navigation";

import {
  getInvestorBlogPost,
  investorBlogPosts,
  investorInsightsBasePath,
} from "@/lib/blog";

type BlogRedirectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const legacySlugMap: Record<string, string> = {
  "south-delhi-real-estate-investment-guide":
    "south-delhi-property-investment-guide-defence-colony-gk-vasant-vihar",
  "best-places-to-buy-property-in-south-delhi":
    "south-delhi-property-investment-guide-defence-colony-gk-vasant-vihar",
  "builder-floors-in-south-delhi":
    "south-delhi-property-investment-guide-defence-colony-gk-vasant-vihar",
  "nri-guide-to-buying-south-delhi-real-estate":
    "dubai-real-estate-free-zone-company-setup-investor-guide",
};

export function generateStaticParams() {
  return investorBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostRedirectPage({
  params,
}: BlogRedirectPageProps) {
  const { slug } = await params;
  const mappedSlug = legacySlugMap[slug] ?? slug;
  const post = getInvestorBlogPost(mappedSlug);

  redirect(`${investorInsightsBasePath}/${post?.slug ?? mappedSlug}`);
}
