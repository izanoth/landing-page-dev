import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from '../components/ui/whatsapp-button';

export const metadata: Metadata = {
  title: "Ivan Cilento - Software Developer",
  description: "Landing page for software developer Ivan Cilento, showcasing experience, projects, and services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground font-manrope antialiased">
        {children}
        <WhatsAppButton phoneNumber="+5511999999999" /> {/* Replace with actual phone number */}
      </body>
    </html>
  );
}
