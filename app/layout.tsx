import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InvoiceScore — AI Invoice Payment Delay Predictor",
  description: "Score invoices on payment probability based on client history, amount, and timing to prioritize collections."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7a2f7c36-b510-43a1-bcc5-643e9988b294"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
