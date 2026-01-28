import type { Metadata } from "next";

const siteConfig = {
  name: "ZMZM",
  description: "ZMZM 서비스입니다.",
  url: "https://zmzm.io", // 실제 배포 URL로 변경 필요
  ogImage: "https://zmzm.io/og-image.png",
  links: {
    github: "https://github.com/zmzm",
  },
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
  ],
  authors: [
    {
      name: "zmzm",
      url: "https://zmzm.io",
    },
  ],
  creator: "zmzm",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@zmzm",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};
