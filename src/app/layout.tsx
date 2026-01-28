
import "./globals.css";
import { metadata as siteMetadata, viewport as siteViewport, pretendard } from "@/config";
import { Toaster } from "@/components/common/sonner";

export const metadata = siteMetadata;
export const viewport = siteViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`antialiased ${pretendard.variable} font-sans`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
