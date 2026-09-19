import type React from "react"
import type { Metadata } from "next"

import "./globals.css"

export const metadata: Metadata = {
  title: "Shivam Sharma | B.Tech Student at NIT Raipur",
  description: "Portfolio of Shivam Sharma, a third-year B.Tech student at NIT Raipur focused on DSA, software engineering, and building useful projects.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased overflow-x-hidden">{children}</body>
    </html>
  )
}
