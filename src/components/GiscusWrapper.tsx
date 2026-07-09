"use client";

import Giscus from "@giscus/react";
import { ENV } from "@/config/env";
import { GiscusWrapperProps } from "@/types/components";

export default function GiscusWrapper(props: GiscusWrapperProps) {
  return (
    <Giscus
      id="comments"
      repo={`${ENV.GITHUB_USERNAME}/septiandwica.github.io`}
      repoId={ENV.GISCUS_REPO_ID}
      category="General"
      categoryId={ENV.GISCUS_CATEGORY_ID}
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="light"
      lang="id"
      loading="lazy"
      {...props}
    />
  );
}
