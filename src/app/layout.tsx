import type { Metadata, Viewport } from "next";
import "./globals.css";

const description = "Ahmed Mahmoud Mohammad Lubbad is a Project Coordinator, MEAL Specialist, and Cyber Security Specialist working across humanitarian programs, community engagement, data, and digital safety in Gaza, Palestine.";

export const metadata: Metadata = {
  title: "Ahmed Mahmoud Mohammad Lubbad | Project Coordinator & MEAL Specialist",
  description,
  keywords: ["Ahmed Mahmoud Mohammad Lubbad", "Project Coordinator", "MEAL Specialist", "Cyber Security Specialist", "Humanitarian Project Management", "Data Analysis", "Digital Safety", "Gaza", "Palestine"],
  authors: [{ name: "Ahmed Mahmoud Mohammad Lubbad" }],
  openGraph: { type: "website", title: "Ahmed Mahmoud Mohammad Lubbad", description, locale: "en_US", alternateLocale: "ar_PS", siteName: "Ahmed Lubbad — Portfolio" },
  twitter: { card: "summary", title: "Ahmed Mahmoud Mohammad Lubbad", description },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = { themeColor: "#0b1020", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" dir="ltr"><body data-theme="dark">{children}</body></html>;
}
