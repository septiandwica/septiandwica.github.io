"use client";

import Giscus from "@giscus/react";

export default function GiscusWrapper() {
  return (
    <Giscus
      id="comments"
      repo={`${process.env.NEXT_PUBLIC_GITHUB_USERNAME?.trim()}/septiandwica.github.io`}
      repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID?.trim() || ""}
      category="General"
      categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID?.trim() || ""}
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="light"
      lang="id"
      loading="lazy"
    />
  );
}
