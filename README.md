# tyann. - Personal Portfolio & Blog

A minimalist, high-performance personal portfolio and blog built with modern web technologies. This project serves as my digital garden to showcase open-source contributions, share software engineering insights, and connect with the community.

![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)

## ✨ Features

- **Modern Tech Stack**: Built with Next.js App Router, React 19, and Tailwind CSS v4.
- **Markdown Blog**: A statically generated blog powered by `gray-matter` and `remark`. Supports categories, tags, and featured posts.
- **GitHub Integration**: Automatically fetches and displays public repositories and their respective programming languages using the GitHub REST API.
- **Interactive Discussions**: Integrated with [Giscus](https://giscus.app) to provide a global Guestbook and per-article comment sections backed by GitHub Discussions.
- **Minimalist Design**: Clean, typography-focused aesthetic with smooth micro-animations.
- **Static Export**: Fully optimized for static hosting via GitHub Pages using GitHub Actions.

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js (v18+) and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/septiandwica/septiandwica.github.io.git
   cd septiandwica.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Copy the example environment file and fill in your details.
   ```bash
   cp .env.example .env.local
   ```
   *Note: Ensure you configure the Giscus parameters and your GitHub username properly.*

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Writing Blog Posts

To add a new blog post, simply create a new Markdown (`.md`) file in the `_posts` directory. Use the following YAML frontmatter structure:

```yaml
---
title: "Your Post Title"
date: "2026-07-09"
excerpt: "A brief description of your post."
category: "Tech"
tags: ["Web", "Next.js"]
featured: false
---

Your markdown content goes here...
```

## ⚙️ Deployment

This project is configured to deploy automatically to **GitHub Pages** using GitHub Actions (`.github/workflows/deploy.yml`). 

Whenever you push to the `main` branch, the workflow will generate a static HTML export (`out/` directory) and publish it to the `github-pages` environment.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
