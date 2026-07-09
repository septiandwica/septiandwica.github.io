export const ENV = {
  SITE_URL: (process.env.NEXT_PUBLIC_SITE_URL || "https://septiandwica.github.io").trim(),
  GITHUB_USERNAME: (process.env.NEXT_PUBLIC_GITHUB_USERNAME || "septiandwica").trim(),
  CONTACT_EMAIL: (process.env.NEXT_PUBLIC_CONTACT_EMAIL || "septian.cahyo@samastanuswantara.com").trim(),
  GISCUS_REPO_ID: (process.env.NEXT_PUBLIC_GISCUS_REPO_ID || "R_kgDOJGIkkQ").trim(),
  GISCUS_CATEGORY_ID: (process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || "DIC_kwDOJGIkkc4DA02s").trim(),
} as const;
