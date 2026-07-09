import { Post } from "./blog";
import { Repo } from "./github";

export type BlogListProps = {
  initialPosts: Post[];
};

export type BlogContentProps = {
  posts: Post[];
};

export type BlogPostContentProps = {
  post: Post;
};

export type ProjectsProps = {
  repos: Repo[];
};

export type ProjectsContentProps = {
  repos: Repo[];
};

export type ProjectDetailContentProps = {
  repoData: Repo;
  readmeContent: string | null;
};

export type GiscusWrapperProps = {

};
