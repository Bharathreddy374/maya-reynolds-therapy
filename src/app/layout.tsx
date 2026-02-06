import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds | Anxiety & Trauma Therapist in Austin, TX",
  description: "Dr. Maya Reynolds is a licensed clinical psychologist in Austin, Texas specializing in anxiety, trauma, PTSD, and life transitions. Offering compassionate, evidence-based therapy including EMDR and CBT. Schedule your free consultation today.",
  keywords: "therapist Austin TX, anxiety therapist, trauma therapy, PTSD treatment, EMDR therapy, CBT therapist, clinical psychologist Austin, mental health Austin Texas",
  openGraph: {
    title: "Dr. Maya Reynolds | Anxiety & Trauma Therapist in Austin, TX",
    description: "Compassionate, evidence-based therapy for anxiety, trauma, and life transitions in Austin, Texas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
