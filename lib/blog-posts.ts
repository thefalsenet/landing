import type { BlogPost } from "./blog-types";
import { whyWeBuiltAiReadingHistoryBlocks } from "./blog-why-we-built-blocks";

export type { BlogAuthor, BlogContentBlock, BlogPost } from "./blog-types";

const whyWeBuiltAiReadingHistoryPost: BlogPost = {
  slug: "why-we-built-an-ai-agent",
  title: "Why We Built an AI That Knows Your Reading History",
  date: "2026-04-06",
  excerpt:
    "Your reading history is evidence of how you think—but most tools never connect the dots. The Library Agent is different: yours, not the internet's; patterns, not trends.",
  coverImage:
    "/cinematic_soft-focus_photograph_of_a_single_open_book_resting_6b793e86-99b1-4560-8483-5d32e798a465_1.png",
  coverAlt: "Abstract interface suggesting AI-assisted reading discovery",
  authors: [
    {
      name: "Oybek Babayev",
      avatar:
        "https://media.licdn.com/dms/image/v2/D4D03AQF1F8ON83tP7w/profile-displayphoto-crop_800_800/B4DZeb6afvH4AI-/0/1750667471975?e=1776902400&v=beta&t=Rkp1at8nGqlnEnnXD4anjcMa3Fi-0HvlMNkfUWC7XJQ",
    },
    {
      name: "Bakhtiyor Ganijon",
      avatar:
        "https://media.licdn.com/dms/image/v2/D4D03AQEpv8iEcide5w/profile-displayphoto-scale_400_400/B4DZzE21fFIAAg-/0/1772829235838?e=1776902400&v=beta&t=jpRFBkVGBGQ6YlC9U5NI5NCy6MilKW5Gb0agSpaPCPs",
    },
  ],
  content: whyWeBuiltAiReadingHistoryBlocks,
};

export const blogPosts: BlogPost[] = [whyWeBuiltAiReadingHistoryPost];

export function getAllSlugs(): { slug: string }[] {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
