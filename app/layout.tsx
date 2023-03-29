import './globals.css'

export const metadata = {
  title: 'Auth.js + Xata',
  description: 'Get in if you can',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen grid place-items-center">{children}</body>
    </html>
  )
}
