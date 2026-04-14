import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.stryds.com"),
  title: "Stryds",
  description: "The social health app.",
  icons: {
    icon: "/seo/stryds/favicon.png",
    apple: "/seo/stryds/webclip.png",
  },
  openGraph: {
    title: "Stryds",
    description: "The social health app.",
    images: ["/seo/stryds/open-graph.avif"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stryds",
    description: "The social health app.",
    images: ["/seo/stryds/open-graph.avif"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="w-mod-js"
      data-wf-domain="www.stryds.com"
      data-wf-page="66503afaeb964a084dd8fbf4"
      data-wf-site="664eea9e5a26d00faaa2716e"
    >
      <head>
        <meta content="H_PC_Gsh-O7BsS_Sy_f8ETmLudV-CVQDWPlRaZUMEdQ" name="google-site-verification" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/css/intlTelInput.min.css"
        />
      </head>
      <body className="global-body" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
