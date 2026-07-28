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
    "india-real-estate-allocation-south-delhi-dubai-goa-land",
  "best-places-to-buy-property-in-south-delhi":
    "india-real-estate-allocation-south-delhi-dubai-goa-land",
  "builder-floors-in-south-delhi":
    "india-real-estate-allocation-south-delhi-dubai-goa-land",
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
