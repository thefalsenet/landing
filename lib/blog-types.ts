export type BlogAuthor = {
  name: string;
  avatar?: string;
};

export type BlogContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "hr" };

export type BlogPost = {
  slug: string;
  title: string;
  /** ISO 8601 date string */
  date: string;
  excerpt: string;
  coverImage: string;
  coverAlt: string;
  authors: BlogAuthor[];
  content: BlogContentBlock[];
};
