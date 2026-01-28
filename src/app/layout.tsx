
import "./globals.css";
import { metadata as siteMetadata, viewport as siteViewport, pretendard, themeConfig } from "@/config";
import { Toaster } from "@/components/common/feedback/sonner";
import { Provider } from "./provider";

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
        <Provider themeProps={themeConfig}>
          {children}
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
