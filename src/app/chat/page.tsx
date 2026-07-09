"use client";

import Giscus from "@giscus/react";

export default function ChatPage() {
  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-6 pt-16 pb-24">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Guestbook / Chat</h1>
        <p className="mt-4 text-gray-600">Leave a message, comment, or just say hi!</p>
      </div>
      
      <div className="mt-8">
        <Giscus
          id="comments"
          repo={`${process.env.NEXT_PUBLIC_GITHUB_USERNAME?.trim()}/septiandwica.github.io`}
          repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID?.trim() || ""}
          category="General"
          categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID?.trim() || ""}
          mapping="specific"
          term="Guestbook"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="light"
          lang="id"
          loading="lazy"
        />
        <p className="mt-4 text-center text-xs text-gray-400">
          *Note: If comments aren&apos;t loading, ensure GitHub Discussions are enabled for this repository and configured on giscus.app.
        </p>
      </div>
    </div>
  );
}
