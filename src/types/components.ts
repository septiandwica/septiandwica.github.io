import { Post } from "./blog";
import { Repo } from "./github";

export type BlogListProps = {
  initialPosts: Post[];
};

export type ProjectsProps = {
  repos: Repo[];
};

export type GiscusWrapperProps = {
  // Empty for now, but allows future extensibility without changing the UI definition
};
