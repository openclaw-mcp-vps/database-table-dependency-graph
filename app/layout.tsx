import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DB Graph — Visualize Database Table Relationships Instantly',
  description: 'Generate interactive dependency graphs from your database schemas. Connect PostgreSQL or MySQL, upload SQL files, and explore table relationships visually.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="cbc1da1b-f88b-4fb2-b211-29383a9571d1"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
